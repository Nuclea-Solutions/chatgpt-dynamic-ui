// libraries
import { useState, useCallback, useRef, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';
// store and context
import useMessagesStore from '@/store/useMessagesStore';
import useCustomGPT from '@/store/useCustomGPT';
import useConversationsStore from '@/store/useConversationsStore';
// utils
import { nanoid } from 'nanoid';
import { Message, MessageRole } from '@/types/message';
import { Conversation, MessageModule } from '@/types/conversation';

type ChatPayload = {
	message: string;
	user_id: string;
	name?: string;
	description?: string;
	instructions?: string;
};

const useChatCustom = ({ customGPT }: { customGPT?: boolean }) => {
	const userId = useRef(nanoid());
	const params = useParams();

	const [inputMessage, setInputMessage] = useState('');
	const [configureInput, setConfigureInput] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [currentConversation, setCurrentConversation] = useState<Conversation>();

	const [messages, setNewMessage, setMessages] = useMessagesStore((state) => [
		state.messages,
		state.setNewMessage,
		state.setMessages
	]);
	const [name, description, instructions, setNewConfigurationMessage] = useCustomGPT((state) => [
		state.name,
		state.description,
		state.instructions,
		state.setNewConfigurationMessage
	]);
	const [setNewMessageToConversation, setConversationList, conversationList] =
		useConversationsStore((state) => [
			state.setNewMessageToConversation,
			state.setConversationList,
			state.conversationList
		]);

	const handleChangeMessage = (e: any) => {
		setInputMessage(e.target.value);
	};

	const handleChangeConfigureMessage = (e: any) => {
		setConfigureInput(e.target.value);
	};

	// Post message
	const sendMessage = useCallback(async (payload: ChatPayload, type: 'chat' | 'configure') => {
		setInputMessage('');
		setConfigureInput('');
		const setMesageFn = type === 'configure' ? setNewConfigurationMessage : setNewMessage;

		try {
			const response = await axios.post('/api/chat', payload);
			const messageToSave = {
				content: response.data,
				id: nanoid(),
				author: { role: MessageRole.ASSISTANT }
			};
			setMesageFn(messageToSave);

			if (type !== 'configure' && !!currentConversation) {
				// TODO:
				setNewMessageToConversation(messageToSave, currentConversation?._id);
			}
		} catch (error) {
			console.error(error);
			setMesageFn({
				content: 'An error ocurred. Try again later',
				id: `error-${nanoid()}`,
				author: { role: MessageRole.ASSISTANT }
			});
		}
	}, []);

	// Submit user message
	const handleSubmitCustom = (e: React.FormEvent<HTMLFormElement>, type: 'chat' | 'configure') => {
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

		if (type !== 'configure' && !!currentConversation) {
			// TODO:
			setNewMessageToConversation(messageToSave, currentConversation?._id);
		}

		const payload: ChatPayload = {
			message: messageContent,
			user_id: userId.current
		};
		if (customGPT) {
			payload.name = name;
			payload.description = description;
			payload.instructions = instructions;
		}
		sendMessage(payload, type);
	};

	// Get one conversation
	const getConversation = useCallback(async () => {
		if (!params.id) return;

		try {
			// const { data } = await axios.get(`/api/conversation/${params.id}`);
			const data = conversationList.find((item) => item._id === params.id);

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

					// it always has one element
					const part = item.message?.content.parts[0];
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
	}, [conversationList]);

	// Set current messages to conversation
	useEffect(() => {
		if (messages.length === 1) {
			const messageItem = messages[0];
			if (!messageItem.id) {
				messageItem.id = nanoid();
			}

			const converId = nanoid();
			const conver: any = {
				id: converId,
				_id: converId,
				title: messageItem.content,
				create_time: Date.now(),
				update_time: Date.now(),
				mapping: {
					[messageItem.id]: {
						id: messageItem.id,
						message: messageItem
					}
				}
			};
			setCurrentConversation(conver);
			setConversationList([...conversationList, conver]);
		}
	}, [messages]);

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
