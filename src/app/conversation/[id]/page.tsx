'use client';
// libraries
import { useEffect } from 'react';
// components
import MessagesList from '@/components/MessagesList';
import InputContainer from '@/components/InputContainer';
// hooks and store
import useChatCustom from '@/hooks/useChatCustom/useChatCustom';
import useMessagesStore from '@/store/useMessagesStore';
// utils
import '../styles.css';

/*
Conversation detail page: rendering a conversation with the new structure (type Conversation)
*/
export default function Conversation() {
	const messages = useMessagesStore((state) => state.messages);

	const { getConversation } = useChatCustom();

	useEffect(() => {
		getConversation();
	}, []);

	return (
		<div className='min-h-screen flex flex-col py-2'>
			<div className='w-full max-w-[100vw]'>
				<div className='flex flex-col h-full justify-between'>
					<MessagesList messages={messages} />

					<div className='w-full h-full py-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-[60px] flex flex-col justify-end'>
						{/* Input component */}
						<InputContainer />
					</div>
				</div>
			</div>
		</div>
	);
}
