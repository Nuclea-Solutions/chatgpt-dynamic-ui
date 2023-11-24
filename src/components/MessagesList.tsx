'use client';
// components
import ComponentMessage from '@/components/ComponentMessage';
import Avatar from '@/components/Avatar';
import AssistantMessage from '@/components/AssistantMessage';
// utils
import { cn } from '@/utils/utils';
import { nanoid } from 'nanoid';
import { Message, MessageRole } from '@/types/message';
import ToolMessage from './ToolMessage';

const MessagesList = ({ messages }: { messages: Message[] }) => {
	return messages?.map(
		(item) =>
			item.role !== MessageRole.SYSTEM && (
				<div className='w-full justify-center' key={`${item.id}-${nanoid()}`}>
					<div
						className={cn([
							'whitespace-pre-wrap flex justify-center',
							item.role === MessageRole.ASSISTANT ? 'bg-[#f7f7f8] border-1' : 'inherit'
						])}
					>
						<div className='w-full md:w-[820px] md:max-w-[94%]'>
							<div className='flex py-6'>
								<div>
									<Avatar author={item.role} />
								</div>

								{/* ASSISTANT MESSAGE */}
								{item.role === MessageRole.ASSISTANT ? (
									/* ASSISTANT MESSAGE */
									<AssistantMessage
										contentId={item.id ?? nanoid()}
										content={item.content.output.message.content}
									/>
								) : /* TOOL/FUNCTION MESSAGE */
								item.role === MessageRole.TOOL ? (
									<ToolMessage item={item} />
								) : (
									/* USER MESSAGE */
									<div className='flex-1 md:max-w-[80%]'>
										<p className='font-semibold text-sm mb-1'>You</p>
										<p className='m-0'>{item.content}</p>
									</div>
								)}
							</div>
							{item.role === MessageRole.ASSISTANT
								? item.content.output.message?.component && (
										<div className='m-[24px]'>
											<ComponentMessage
												key={`${item.id}-${Date.now()}`}
												component={
													typeof item.content.output.message?.component === 'string'
														? item.content.output.message?.component
														: item.content.output.message?.component?.name ?? ''
												}
												componentProps={item.content.output.message?.component?.props ?? []}
											/>
										</div>
								  )
								: null}
						</div>
					</div>
				</div>
			)
	);
};

export default MessagesList;
