// libraries
import { useState, useCallback, useRef } from 'react';
import axios from 'axios';
// store and context
import useMessagesStore from '@/store/useMessagesStore';
import useCustomGPT from '@/store/useCustomGPT';
// utils
import { nanoid } from 'nanoid';

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
	const [isLoading, setIsLoading] = useState(false);
	const [name, description, instructions] = useCustomGPT((state) => [
		state.name,
		state.description,
		state.instructions
	]);

	const handleChangeMessage = (e: any) => {
		setInputMessage(e.target.value);
	};

	const sendMessage = useCallback(async (payload: ChatPayload) => {
		setInputMessage('');

		try {
			const response = await axios.post('/api/chat', payload);

			setNewMessage({
				content: response.data,
				id: nanoid(),
				role: 'assistant'
			});
		} catch (error) {
			console.error(error);
			setNewMessage({
				content: 'An error ocurred. Try again later',
				id: `error-${nanoid()}`,
				role: 'assistant'
			});
		}
	}, []);

	// Submit user message
	const handleSubmitCustom = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!e) return;
		setNewMessage({
			content: inputMessage,
			id: nanoid(),
			role: 'user'
		});
		const payload: ChatPayload = {
			message: inputMessage,
			user_id: userId.current
		};
		if (customGPT) {
			payload.name = name;
			payload.description = description;
			payload.instructions = instructions;
		}
		sendMessage(payload);
	};

	return {
		handleInputChange: handleChangeMessage,
		handleSubmit: handleSubmitCustom,
		input: inputMessage,
		isLoading
	};
};

export default useChatCustom;
