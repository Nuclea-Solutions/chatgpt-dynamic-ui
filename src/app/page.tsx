'use client';
// libraries
import { useParams } from 'next/navigation';
// components
import HomeLayout from '@/components/HomeLayout';
import EmptyCardsContainerComponent from '@/stories/empty_cards_container/EmptyCardsContainer.component';
import RegenerateButtonComponent from '@/stories/regenerate_button/RegenerateButton.component';
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
			<div className='flex flex-col h-full justify-between'>
				{/* MESSAGES */}
				<MessagesList messages={messages} />
				{isLoading && <p className='px-10'>cargando...</p>}
				{!!params?.id && (
					<div className='flex justify-end mb-1 z-9 mr-4 mt-4'>
						<RegenerateButtonComponent
							isRegenerate={false}
							setIsRegenerate={() => console.log('regenerate')}
						/>
					</div>
				)}
				<div className='w-full h-full py-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-[60px] flex flex-col justify-end'>
					{/* Empty chat cards */}
					{messages?.every((item) => item.role === 'system') && (
						<EmptyCardsContainerComponent isNewChat />
					)}
					{/* Input component */}
					<InputContainer />
				</div>
			</div>
		</HomeLayout>
	);
}
