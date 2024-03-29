// libraries
import { useState, useCallback, useRef } from 'react';
import axios from 'axios';
// store and context
import useMessagesStore from '@/store/useMessagesStore';
import useCustomGPT from '@/store/useCustomGPT';
import useConversationsStore from '@/store/useConversationsStore';
import { useShallow } from 'zustand/react/shallow';
// utils
import { nanoid } from '@/utils/utils';
import { Message, MessageRole } from '@/types/message';
import { Conversation, MessageModule } from '@/types/conversation';

type ChatPayload = {
	message: string;
	user_id?: string;
	name?: string;
	description?: string;
	instructions?: string;
	run_id?: string;
	thread_id?: string;
	assistant_id?: string;
	session_id?: string;
	chat_history: any[] | [];
};

const useChatCustom = ({
	customGPT,
	conversationId
}: {
	customGPT?: boolean;
	conversationId?: string;
}) => {
	const userId = useRef(nanoid());
	// const sessionId = useRef();

	const [inputMessage, setInputMessage] = useState('');
	const [configureInput, setConfigureInput] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [usesLocalDB, setUsesLocalDB] = useState(true);

	const [messages, setNewMessage, setMessages] = useMessagesStore(
		useShallow((state) => [state.messages, state.setNewMessage, state.setMessages])
	);
	const [name, description, instructions, setNewConfigurationMessage] = useCustomGPT(
		useShallow((state) => [
			state.name,
			state.description,
			state.instructions,
			state.setNewConfigurationMessage
		])
	);
	const [
		setNewMessageToConversation,
		setConversationList,
		conversationList,
		currentConversationId,
		setCurrentConversationId,
		sessionId,
		setSessionId,
		chatHistory,
		setChatHistory
	] = useConversationsStore((state) => [
		state.setNewMessageToConversation,
		state.setConversationList,
		state.conversationList,
		state.currentConversationId,
		state.setCurrentConversationId,
		state.sessionId,
		state.setSessionId,
		state.chatHistory,
		state.setChatHistory
	]);

	const handleChangeMessage = (e: any) => {
		setInputMessage(e.target.value);
	};

	const handleChangeConfigureMessage = (e: any) => {
		setConfigureInput(e.target.value);
	};

	// Post message
	const postChat = useCallback(
		async ({
			payload,
			type,
			userMessage,
			conversationId,
			session_id
		}: {
			payload: ChatPayload;
			type: 'chat' | 'configure';
			userMessage: Message;
			conversationId?: string;
			session_id?: string;
		}) => {
			const setMesageFn = type === 'configure' ? setNewConfigurationMessage : setNewMessage;

			try {
				const response = await axios.post('/api/chat', payload);

				setSessionId(response.data.session_id);
				setChatHistory(response.data.chat_history);

				const messageToSave = {
					content: response.data.data,
					id: nanoid(),
					author: { role: MessageRole.ASSISTANT }
				};
				setMesageFn(messageToSave);

				if (type !== 'configure') {
					const converId = conversationId ? conversationId : currentConversationId;
					const currentConver = conversationList.filter(
						(item) => item.id === currentConversationId
					);

					setNewMessageToConversation(messageToSave, converId);
					const converToAddMessage = !!currentConver[0]
						? {
								...currentConver[0],
								mapping: {
									...currentConver[0].mapping,
									[`${userMessage.id ?? 'no-id'}`]: {
										message: userMessage.content,
										id: userMessage.id ?? 'no-id'
									}
								}
						  }
						: currentConver[0];
					await saveNewMessageToConversation(messageToSave, converToAddMessage);
					await saveNewMessageToConversation(messageToSave, converToAddMessage);
				}
			} catch (error) {
				console.log({ error });
				setMesageFn({
					content: 'An error ocurred. Try again later',
					id: `error-${nanoid()}`,
					author: { role: MessageRole.ASSISTANT }
				});
			}
		},
		[currentConversationId, conversationList]
	);

	// Save conversation
	const saveConversation = async (newConversation: Conversation) => {
		return await axios.post('/api/conversation', { data: newConversation });
	};

	// Save new message to conversation
	const saveNewMessageToConversation = async (
		newMessage: Message,
		currentConversation: Conversation
	) => {
		if (!currentConversation || !usesLocalDB) {
			return;
		}

		try {
			await axios.post(`/api/message/${currentConversation.id}`, {
				data: { message: newMessage, conversation: currentConversation }
			});
		} catch (error) {
			console.log('error while saving conversation to db');
		}
	};

	// Set current messages to conversation
	const setFormattedConversation = async (message: Message) => {
		if (!message.id) {
			message.id = nanoid();
		}
		const converId = nanoid();
		const conver: any = {
			id: converId,
			// _id: converId,
			title: message.content.length > 30 ? message.content.slice(0, 30) : message.content,
			create_time: Date.now(),
			update_time: Date.now(),
			mapping: {
				[message.id]: {
					id: message.id,
					message: message
				}
			},
			conversation_id: converId,
			// conversation_template_id: null,
			// plugin_ids: null,
			current_node: ''
		};
		try {
			const conversation = await saveConversation(conver);
			if (!conversation.data) {
				setUsesLocalDB(false);
			}
			setCurrentConversationId(converId);
			setConversationList([...conversationList, conver]);
			return converId;
		} catch (error) {
			setCurrentConversationId(converId);
			setConversationList([...conversationList, conver]);
			setUsesLocalDB(false);
			return converId;
		}
	};

	// Submit user message
	const handleSubmitCustom = async (
		e: React.FormEvent<HTMLFormElement>,
		type: 'chat' | 'configure'
	) => {
		e.preventDefault();
		if (!e) return;
		const messageContent = type === 'configure' ? configureInput : inputMessage;
		const setMesageFn = type === 'configure' ? setNewConfigurationMessage : setNewMessage;

		const messageToSave = {
			content: messageContent,
			id: nanoid(),
			author: { role: type === 'configure' ? MessageRole.SYSTEM : MessageRole.USER }
		};
		setMesageFn(messageToSave);

		// Save to db
		if (type !== 'configure' && !!currentConversationId) {
			const currentConver = conversationList.filter((item) => item.id === currentConversationId);
			setNewMessageToConversation(messageToSave, currentConversationId);
			await saveNewMessageToConversation(messageToSave, currentConver[0]);
		}

		setInputMessage('');
		setConfigureInput('');

		// Post message
		const payload: ChatPayload = {
			message: messageContent,
			user_id: userId.current,
			chat_history: chatHistory
			// run_id: chataMetadata?.run_id,
			// thread_id: chataMetadata?.thread_id,
			// assistant_id: chataMetadata?.assistant_id
		};

		if (customGPT) {
			payload.name = name;
			payload.description = description;
			payload.instructions = instructions;
		}

		// Conversation first message
		if (messages.length === 0 && !conversationId) {
			// New agent session
			// const newSessionId = nanoid();
			// sessionId.current = newSessionId;
			// payload.session_id = newSessionId;

			const converId = await setFormattedConversation(messageToSave);
			postChat({
				payload,
				type,
				userMessage: messageToSave,
				conversationId: converId
			});

			return;
		}

		// payload.run_id = chataMetadata?.run_id;
		// payload.thread_id = chataMetadata?.thread_id;
		// payload.assistant_id = chataMetadata?.assistant_id;
		payload.session_id = sessionId ?? undefined;
		payload.user_id = userId.current;

		// New message to conversation
		postChat({
			payload,
			type,
			userMessage: messageToSave
		});
	};

	// Get one conversation
	const getConversation = useCallback(async () => {
		if (!conversationId) return;

		try {
			// const { data } = await axios.get(`/api/conversation/${params.id}`);
			const data = conversationList?.find((item) => item.id === conversationId);

			let resultMessages: Message[] = [];
			Object.values((data as Conversation).mapping).forEach(
				(item: MessageModule, index: number, array: MessageModule[]) => {
					if (
						!item.message ||
						item.message?.author.role === MessageRole.SYSTEM ||
						item.message?.author.role === MessageRole.TOOL
					) {
						return;
					}

					const type = typeof item.message?.content === 'string' ? 'new_chat' : 'history_chat';

					// it always has one element
					const part =
						type === 'history_chat' ? item.message?.content.parts[0] : item.message?.content;
					if (
						item.message.recipient !== 'all' &&
						array[index + 1]?.message?.author.role === MessageRole.TOOL
					) {
						// TOOL (PLUGINS) MESSAGE
						const nextItem = array[index + 1];
						const partTool = nextItem?.message?.content.parts[0];

						const payload = {
							id: item.id,
							createdAt: item.message.create_time ?? new Date(),
							content: partTool,
							author: { role: MessageRole.TOOL },
							name: nextItem.message?.author.name,
							function_call: part
							// string | ChatCompletionMessage.FunctionCall	undefined;
						};
						resultMessages.push(payload as Message);
					} else if (item.message.author.role === MessageRole.USER) {
						// USER MESSAGES
						const payload = {
							id: item.id,
							createdAt: item.message.create_time ?? new Date(),
							content: part,
							author: { role: MessageRole.USER }
						};
						resultMessages.push(payload as Message);
					} else {
						// MARKDOWN AND TEXT MESSAGES
						const payload = {
							id: item.id,
							createdAt: item.message.create_time ?? new Date(),
							content: part,
							author: { role: item.message.author.role as MessageRole }
						};
						resultMessages.push(payload as Message);
					}
				}
			);
			setMessages(resultMessages);
		} catch (err) {
			console.error({ err });
		}
	}, [conversationList, conversationId]);

	return {
		handleInputChange: handleChangeMessage,
		handleSubmit: handleSubmitCustom,
		input: inputMessage,
		configureInput,
		handleChangeConfigureMessage,
		isLoading,
		getConversation
	};
};

export default useChatCustom;
