// libraries
import { useState, useMemo, useEffect, useCallback } from 'react';
import { useChat } from 'ai/react';
import { useParams } from 'next/navigation';
// store and context
import useMessagesStore from '@/store/useMessagesStore';
import useConversationsStore from '@/store/useConversationsStore';
// utils
import { PROMPTS } from '../../utils/propts';
import { nanoid } from 'nanoid';
import axios from 'axios';
import { Message, MessageRole } from '@/types/message';

const useChatCustom = () => {
	const params = useParams();
	const [dateInput, setDateInput] = useState<Date | undefined>();
	const [textInput, setTextInput] = useState<string | undefined>('');
	const [listOfComponents, setListOfComponents] = useState<any[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [
		setNewMessage,
		setNewMessageComponent,
		messagesComponents,
		messages,
		setMessages,
		setMessagesComponents
	] = useMessagesStore((state) => [
		state.setNewMessage,
		state.setNewMessageComponent,
		state.messagesComponents,
		state.messages,
		state.setMessages,
		state.setMessagesComponents
	]);
	const conversationList = useConversationsStore((state) => state.conversationList);

	// Current chat input component name
	const inputType = useMemo(
		() =>
			messagesComponents?.length && messagesComponents?.at(-1)?.output
				? messagesComponents?.at(-1)?.output.input_component ?? 'text_input'
				: messagesComponents?.at(-1)?.content?.output
				? messagesComponents?.at(-1)?.content?.output?.input_component ?? 'text_input'
				: 'text_input',
		[messagesComponents]
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
			try {
				const response = await axios.post('/api/chat', {
					data: { messages: [...messages, message] }
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
		const data = conversationList.find((item) => item.id === params.id);

		if (!data) return;
		let resultMessages: Message[] = [];
		Object.values((data as Conversation).mapping).forEach(
			(item: MessageModule, index: number, array: MessageModule[]) => {
				if (
					!item.message ||
					item.message?.author.role === 'system' ||
					item.message?.author.role === 'tool'
				) {
					return;
				}

				// it always has one element
				const part = item.message?.content.parts[0];
				if (item.message.recipient !== 'all' && array[index + 1]?.message?.author.role === 'tool') {
					// TOOL (PLUGINS) MESSAGE
					const nextItem = array[index + 1];
					const partTool = nextItem?.message?.content.parts[0];

					const payload = {
						id: item.id,
						createdAt: item.message.create_time ?? new Date(),
						content: partTool,
						role: 'function',
						tool_calls: {
							name: nextItem.message?.author.name,
							arguments: part
						}
						// string | ChatCompletionMessage.FunctionCall	undefined;
					};
					resultMessages.push(payload as Message);
				} else {
					// MARKDOWN AND TEXT MESSAGES
					const payload = {
						id: item.id,
						createdAt: item.message.create_time ?? new Date(),
						content: part,
						role: item.message.author.role
					};
					resultMessages.push(payload as Message);
				}
			}
		);
		setMessages(resultMessages);
		data && formatOutput(data);
	}, [conversationList]);

	// Format message for render
	const formatOutput = useCallback((conversation: Conversation) => {
		const result: any[] = [];
		Object.values(conversation.mapping).filter((item) => {
			if (item.message && item.message?.author.role !== 'system') {
				const part = item.message?.content.parts[0];
				const outputPart = {
					createdAt: item.message.create_time,
					id: item.id,
					role: item.message.author.role,
					content: {
						output: {
							message: {
								content: part,
								component: undefined
							},
							input_component: 'text_input'
						}
					}
				};
				result.push(outputPart);
			}
		});
		setMessagesComponents(result);
	}, []);

	// Save initial message
	useEffect(() => {
		if (messages.length === 0) {
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
		listOfComponents,
		dateInput,
		handleDateInputChange,
		inputType,
		isLoading,
		formatOutput,
		getConversation
	};
};

export default useChatCustom;
