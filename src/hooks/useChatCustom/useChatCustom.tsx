// libraries
import { useState, useCallback, useRef, useEffect } from 'react';
import axios from 'axios';
// store and context
import useMessagesStore from '@/store/useMessagesStore';
import useCustomGPT from '@/store/useCustomGPT';
// utils
import { nanoid } from 'nanoid';
import { MessageRole } from '@/types/message';

type ChatPayload = {
	message: string;
	user_id: string;
	name?: string;
	description?: string;
	instructions?: string;
};

const useChatCustom = ({ customGPT }: { customGPT?: boolean }) => {
	const userId = useRef(nanoid());
	const [setNewMessage] = useMessagesStore((state) => [state.setNewMessage]);
	const [inputMessage, setInputMessage] = useState('');
	const [configureInput, setConfigureInput] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [name, description, instructions, setNewConfigurationMessage] = useCustomGPT((state) => [
		state.name,
		state.description,
		state.instructions,
		state.setNewConfigurationMessage
	]);

	const handleChangeMessage = (e: any) => {
		setInputMessage(e.target.value);
	};

	const handleChangeConfigureMessage = (e: any) => {
		setConfigureInput(e.target.value);
	};

	const sendMessage = useCallback(async (payload: ChatPayload, type: 'chat' | 'configure') => {
		setInputMessage('');
		setConfigureInput('');
		const setMesageFn = type === 'configure' ? setNewConfigurationMessage : setNewMessage;

		try {
			const response = await axios.post('/api/chat', payload);
			setMesageFn({
				content: response.data,
				id: nanoid(),
				role: MessageRole.ASSISTANT
			});
		} catch (error) {
			console.error(error);
			setMesageFn({
				content: 'An error ocurred. Try again later',
				id: `error-${nanoid()}`,
				role: MessageRole.ASSISTANT
			});
		}
	}, []);

	// Submit user message
	const handleSubmitCustom = (e: React.FormEvent<HTMLFormElement>, type: 'chat' | 'configure') => {
		e.preventDefault();
		if (!e) return;
		const messageContent = type === 'configure' ? configureInput : inputMessage;
		const setMesageFn = type === 'configure' ? setNewConfigurationMessage : setNewMessage;
		setMesageFn({
			content: messageContent,
			id: nanoid(),
			role: type === 'configure' ? MessageRole.SYSTEM : MessageRole.USER
		});
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

	return {
		handleInputChange: handleChangeMessage,
		handleSubmit: handleSubmitCustom,
		input: inputMessage,
		configureInput,
		handleChangeConfigureMessage,
		isLoading
	};
};

export default useChatCustom;
