// libraries
import { useState, useMemo, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
// store and context
import useMessagesStore from '@/store/useMessagesStore';
import useConversationsStore from '@/store/useConversationsStore';
// utils
import { PROMPTS } from '../../utils/propts';
import { nanoid } from 'nanoid';
import { Message, MessageRole } from '@/types/message';

const useChatCustom = () => {
	const params = useParams();
	const [dateInput, setDateInput] = useState<Date | undefined>();
	const [textInput, setTextInput] = useState<string | undefined>('');
	const [isLoading, setIsLoading] = useState(false);
	const [setNewMessage, messages, setMessages] = useMessagesStore((state) => [
		state.setNewMessage,
		state.messages,
		state.setMessages
	]);
	const conversationList = useConversationsStore((state) => state.conversationList);

	// Current chat input component name
	const inputType = useMemo(
		() =>
			messages?.length && messages?.at(-1)?.content?.output
				? messages?.at(-1)?.content?.output.input_component ?? 'text_input'
				: 'text_input',
		[messages]
	);

	// Handle string input
	const handleTextInputChange = (e: any) => {
		setTextInput(e.target.value);
	};

	// Handle date input
	const handleDateInputChange = (newValue: Date) => {
		setDateInput(newValue);
	};

	// Submit user message
	const handleSubmit = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			if (!e) return;

			const message = {
				content: inputType !== 'date_picker' ? textInput : dateInput,
				id: nanoid(),
				role: MessageRole.USER
			};
			setNewMessage(message);
			sendMessage(message);
		},
		[textInput]
	);

	// Post message
	const sendMessage = useCallback(
		async (message: Message) => {
			setTextInput('');
			const list = !!messages?.length ? [...messages, message] : [message];
			try {
				const response = await axios.post('/api/chat', {
					data: { messages: list }
				});
				setNewMessage(response.data);
			} catch (error) {
				console.log({ error });
			}
		},
		[messages]
	);

	// Get one conversation
	const getConversation = useCallback(async () => {
		if (!params.id) return;

		try {
			const { data } = await axios.get(`/api/conversation/${params.id}`);

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
							role: MessageRole.TOOL,
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
							role: MessageRole.USER
						};
						resultMessages.push(payload as Message);
					} else {
						// MARKDOWN AND TEXT MESSAGES
						const payload = {
							id: item.id,
							createdAt: item.message.create_time ?? new Date(),
							content: {
								output: {
									message: {
										content: part
									},
									input_component: 'text_input'
								}
							},
							role: item.message.author.role as MessageRole
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

	// Save initial message
	useEffect(() => {
		if (messages?.length === 0 && !params.id) {
			setNewMessage({
				content: PROMPTS.initial,
				// id: 'initial',
				role: 'system'
			});
		}
	}, []);

	return {
		handleInputChange: inputType !== 'date_picker' ? handleTextInputChange : handleDateInputChange,
		handleSubmit,
		input: inputType !== 'date_picker' ? textInput : dateInput,
		dateInput,
		handleDateInputChange,
		inputType,
		isLoading,
		getConversation
	};
};

export default useChatCustom;
