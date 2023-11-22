'use client';

// components
import HomeLayout from '@/components/HomeLayout';
import EmptyCardsContainerComponent from '@/stories/empty_cards_container/EmptyCardsContainer.component';
import HelpButtonComponent from '@/stories/help_button/HelpButton.component';
import MessagesList from '@/components/MessagesList';
import InputWidthButtonComponent from '@/stories/input_with_button/InputWidthButton.component';
// hooks
import useChatCustom from '@/hooks/useChatCustom/useChatCustom';
// store
import useMessagesStore from '@/store/useMessagesStore';

/*
Page with chat using the message and the input component that it's return from response
*/
export default function Chat() {
	const { isLoading, input, handleInputChange, handleSubmit } = useChatCustom();
	const messages = useMessagesStore((state) => state.messages);

	return (
		<HomeLayout>
			<div className='flex flex-col h-full justify-between w-full'>
				{/* MESSAGES */}
				<MessagesList messages={messages} />
				{isLoading && <p className='px-10'>cargando...</p>}

				<div className='h-full pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-[60px] flex flex-col justify-end relative'>
					{/* Empty chat cards */}
					{messages?.every((item) => item.role === 'system') && (
						<div className='h-full w-full relative'>
							<EmptyCardsContainerComponent isNewChat />
						</div>
					)}
					{/* Input component */}
					<div className='w-full py-2 text-center text-xs text-gray-600 dark:text-gray-300 flex justify-center sticky bottom-0'>
						{/* Input component */}
						<div className=' w-full px-2 flex items-center flex-row-reverse md:block'>
							<form
								onSubmit={handleSubmit}
								className='w-full lg:mx-auto lg:max-w-2xl xl:max-w-3xl bg-white dark:bg-[#444654] rounded-large relative'
							>
								<InputWidthButtonComponent value={input} onChange={handleInputChange} />

								{/* Footer */}
								<div className='mt-2 text-center text-sm'>
									<span>ChatGPT can make mistakes. Consider checking important information.</span>
								</div>
								<div className='absolute bottom-2 -right-10 xl:-right-20 z-10'>
									<HelpButtonComponent />
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</HomeLayout>
	);
}
