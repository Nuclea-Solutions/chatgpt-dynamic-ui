'use client';
// libraries
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { usePathname } from 'next/navigation';
// components
import Avatar from '@/components/Avatar';
import AssistantMessage from '@/components/AssistantMessage';
import ErrorMessage from './ErrorMessage';
import { TbPencil } from 'react-icons/tb';
// hooks and store
import useChatCustom from '@/hooks/useChatCustom/useChatCustom';
import useMessagesStore from '@/store/useMessagesStore';
// utils
import { cn } from '@/utils/utils';
import { MessageRole } from '@/types/message';
import useCustomGPT from '@/store/useCustomGPT';

const MessagesList = ({
	isConfigureChat,
	conversationId
}: {
	isConfigureChat?: boolean;
	conversationId?: string;
}) => {
	const [showIconInUserMessage, setShowIconInUserMessage] = useState(false);
	const [showFeedbackMessage, setShowFeedbackMessage] = useState(false);
	const actualPath = usePathname();

	const { getConversation } = useChatCustom({ conversationId });
	const messages = useMessagesStore((state) => state.messages);
	const configurationMessages = useCustomGPT((state) => state.configurationMessages);

	useEffect(() => {
		getConversation();
	}, []);

	return (!isConfigureChat ? messages : configurationMessages)?.map((item) => {
		return (
			<div className='w-full justify-center' key={`${item.id}-${nanoid()}`}>
				<div className={cn(['whitespace-pre-wrap flex justify-center'])}>
					<div
						className={`w-full md:max-w-[91%] bg-inherit ${actualPath === '/' && 'md:w-[820px]'}`}
					>
						<div className='flex py-3 px-5'>
							<div>
								<Avatar author={item.author.role} />
							</div>

							{/* ASSISTANT MESSAGE */}
							{item.id?.includes('error') ? (
								<div className='w-[75%] md:max-w-[80%]'>
									<ErrorMessage content={item?.content ?? ''} />
								</div>
							) : item.author.role === MessageRole.ASSISTANT ? (
								/* ASSISTANT MESSAGE */

								<div
									className={`flex flex-col w-full md:max-w-[91%] ${
										actualPath === '/' && 'md:w-[820px]'
									}`}
									onMouseEnter={() => setShowFeedbackMessage(true)}
									onMouseLeave={() => setShowFeedbackMessage(false)}
								>
									<p className='font-semibold text-sm mb-1'>Gú</p>
									<AssistantMessage
										contentId={item.id ?? nanoid()}
										content={item.content}
										showFeedbackMessage={showFeedbackMessage}
									/>
								</div>
							) : (
								/* USER MESSAGE */
								<div
									className={`flex-1 w-full md:max-w-[91%] ${actualPath === '/' && 'md:w-[820px]'}`}
									onMouseEnter={() => setShowIconInUserMessage(true)}
									onMouseLeave={() => setShowIconInUserMessage(false)}
								>
									<p className='font-semibold text-sm mb-1'>You</p>
									<div className=' w-[100%]'>
										<p className='m-0 break-words'>{item.content}</p>
									</div>
									<div
										className={`mt-2 text-gray-400 hover:text-black hover:cursor-pointer w-0 ${
											!showIconInUserMessage && 'opacity-0'
										}`}
									>
										<TbPencil size={16} />
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	});
};

export default MessagesList;
