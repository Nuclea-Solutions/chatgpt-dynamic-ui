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
	const { getConversation } = useChatCustom({});

	useEffect(() => {
		getConversation();
	}, []);

	return (
		<div className='min-h-screen flex flex-col pt-2'>
			<div className='w-full h-full max-w-[100vw]'>
				<div className='flex flex-col h-full justify-between '>
					<MessagesList messages={messages ?? []} />
				</div>
			</div>

			<div className='w-full px-4 flex items-center flex-row-reverse md:block sticky z-20 bottom-0'>
				<InputContainer />
			</div>
		</div>
	);
}
