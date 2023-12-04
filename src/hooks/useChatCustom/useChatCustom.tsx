// libraries
import { useState, useCallback, useRef } from 'react';
import axios from 'axios';
// store and context
import useMessagesStore from '@/store/useMessagesStore';
// utils
import { nanoid } from 'nanoid';

const useChatCustom = () => {
	const userId = useRef(nanoid());
	const [listOfComponents, setListOfComponents] = useState<any[]>([]);
	const [
		setNewMessage,
	] = useMessagesStore((state) => [
		state.setNewMessage,
	]);
	const [inputMessage, setInputMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleChangeMessage = (e: any) => {
		setInputMessage(e.target.value);
	};

	const sendMessage = useCallback(async (newMessage: string) => {
		setInputMessage('');

		try {
			const response = await axios.post('/api/chat', {
				message: newMessage,
				user_id: userId.current
			});

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
		sendMessage(inputMessage);
	};

	return {
		handleInputChange: handleChangeMessage,
		handleSubmit: handleSubmitCustom,
		input: inputMessage,
		listOfComponents,
		isLoading,
	};
};

export default useChatCustom;
