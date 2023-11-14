'use client';
// libraries
import { useParams } from 'next/navigation';
// components
import HomeLayout from '@/components/HomeLayout';
import EmptyCardsContainerComponent from '@/stories/empty_cards_container/EmptyCardsContainer.component';
// hooks
import useChatCustom from '@/hooks/useChatCustom/useChatCustom';
// utils
import MessagesList from '@/components/MessagesList';
import InputContainer from '@/components/InputContainer';
import useMessagesStore from '@/store/useMessagesStore';

/*
Page with chat using the message and the input component that it's return from response
*/
export default function Chat() {
	const params = useParams();
	const { isLoading } = useChatCustom();
	const messages = useMessagesStore((state) => state.messages);

	return (
		<HomeLayout>
			<div className='flex flex-col h-full justify-between w-full'>
				{/* MESSAGES */}
				<MessagesList messages={messages} />
				{isLoading && <p className='px-10'>cargando...</p>}

				<div className='h-full pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-[60px] flex flex-col justify-end'>
					{/* Empty chat cards */}
					{messages?.every((item) => item.role === 'system') && (
						<div className='h-full w-full relative'>
							<EmptyCardsContainerComponent isNewChat />
						</div>
					)}
					{/* Input component */}

					<div className='w-full py-2 text-center text-xs text-gray-600 dark:text-gray-300 flex justify-center sticky bottom-0'>
						{/* Input component */}
						<div className=' lg:w-full px-2 flex items-center flex-row-reverse md:block'>
							<InputContainer />
						</div>
					</div>
				</div>
			</div>
		</HomeLayout>
	);
}
