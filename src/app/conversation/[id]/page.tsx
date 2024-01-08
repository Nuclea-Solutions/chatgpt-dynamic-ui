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
import '../styles.css';
import axios from 'axios';

/*
Conversation detail page: rendering a conversation with the new structure (type Conversation)
*/

export async function generateStaticParams() {
	const conversations = await axios.get('/api/conversations');

	return conversations.data?.map((conversation: any) => ({
		id: conversation.id
	}));
}

export default function Page({ params }: { params: { id: unknown } }) {
	const messages = useMessagesStore((state) => state.messages);
	const { getConversation } = useChatCustom({});
	// const params = useParams();
	const { id } = params;

	useEffect(() => {
		// if (!id) return;
		getConversation();
	}, [id]);

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
