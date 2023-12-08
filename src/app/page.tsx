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
import { useChatGptVersion } from '@/store/useChatGptVersion';
import { MessageRole } from '@/types/message';

/*
Page with chat using the message and the input component that it's return from response
*/
export default function Chat() {
	const { isLoading, input, handleInputChange, handleSubmit } = useChatCustom({});
	const messages = useMessagesStore((state) => state.messages);
	const publicVersion = useChatGptVersion((state) => state.publicVersion);
	return (
		<HomeLayout>
			<div className='flex flex-col h-full justify-between w-full'>
				{/* MESSAGES */}
				<MessagesList messages={messages} />
				{isLoading && <p className='px-10'>cargando...</p>}

				<div className='h-full pt-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-[60px] flex flex-col justify-end sticky z-20 bottom-0'>
					{/* Empty chat cards */}
					{messages?.every((item) => item.role === MessageRole.SYSTEM) && (
						<div className='h-full w-full relative'>
							<EmptyCardsContainerComponent isNewChat />
						</div>
					)}

					<div className='w-full pt-2 text-center text-xs text-gray-600 dark:text-gray-300 flex justify-center'>
						<div className=' w-full px-2 flex items-center flex-row-reverse md:block'>
							<form
								onSubmit={(e) => handleSubmit(e, 'chat')}
								className='w-full lg:mx-auto lg:max-w-2xl xl:max-w-3xl bg-white dark:bg-[#444654] rounded-large relative'
								id='formu'
							>
								<InputWidthButtonComponent value={input} onChange={handleInputChange} />

								{/* Footer */}
								<div className='mt-2 text-center text-sm'>
									{publicVersion ? (
										<span>Nuclea puede cometer errores. Considera checar la información.</span>
									) : (
										<span>ChatGPT can make mistakes. Consider checking important information.</span>
									)}
								</div>
							</form>
						</div>
					</div>
					<div className='fixed bottom-2 right-6  z-10'>
						<HelpButtonComponent />
					</div>
				</div>
			</div>
		</HomeLayout>
	);
}
