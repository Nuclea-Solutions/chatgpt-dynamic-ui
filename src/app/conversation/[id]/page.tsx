'use client';
// libraries
import { useEffect } from 'react';
import { useParams } from 'next/navigation';
// components
import MessagesList from '@/components/MessagesList';
import InputContainer from '@/components/InputContainer';
// hooks and store
import useChatCustom from '@/hooks/useChatCustom/useChatCustom';
import useMessagesStore from '@/store/useMessagesStore';
// utils
import './styles.css';

/*
Conversation detail page: rendering a conversation with the new structure (type Conversation)
*/
export default function Conversation() {
	const messages = useMessagesStore((state) => state.messages);
	const { getConversation } = useChatCustom({});
	const params = useParams();

	useEffect(() => {
		if (!params.id) return;
		getConversation();
	}, [params?.id]);

	return (
		<div className='flex justify-center h-full'>
			<div className='h-full w-full flex flex-col justify-between'>
				<div className='w-full'>
					<MessagesList messages={messages ?? []} />
				</div>

				<div className='w-full px-4 flex items-center flex-row-reverse md:block sticky z-20 bottom-0'>
					<InputContainer />
				</div>
			</div>
		</div>
	);
}
