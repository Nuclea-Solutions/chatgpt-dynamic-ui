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
		<div className='min-h-screen flex flex-col pt-2'>
			<div className='w-full max-w-[100vw]'>
				<div className='flex flex-col h-full justify-between '>
					<MessagesList messages={messages} />

					{/* <div className='w-full h-36 py-2 text-center text-xs text-gray-600 dark:text-gray-300 flex justify-center'> */}
					{/* Input component */}
					{/* <div className='fixed bottom-0 w-full lg:w-[90%] px-2 flex items-center flex-row-reverse md:block'> */}
					{/* <div */}
					{/* className={`flex items-center md:justify-end self-start h-14 md:w-full lg:mx-auto lg:max-w-2xl xl:max-w-3xl md:mb-4`} */}
					{/* > */}
					{/* <RegenerateButtonComponent */}
					{/* isRegenerate={false} */}
					{/* setIsRegenerate={() => console.log('regenerate')} */}
					{/* /> */}
					{/* </div> */}
					{/* <InputContainer /> */}
					{/* </div> */}
					{/* </div> */}
				</div>
			</div>

			<div className='w-full px-4 flex items-center flex-row-reverse md:block sticky z-20 bottom-0'>
				<InputContainer />
			</div>
		</div>
	);
}
