'use client';
// components
import ComponentMessage from '@/components/ComponentMessage';
import Avatar from '@/components/Avatar';
import AssistantMessage from '@/components/AssistantMessage';
import ToolMessage from './ToolMessage';
import UserMessage from './UserMessage';
// utils
import { cn } from '@/utils/utils';
import { nanoid } from 'nanoid';
import { Message, MessageRole } from '@/types/message';
import ErrorMessage from './ErrorMessage';

const MessagesList = ({ messages }: { messages: Message[] }) => {
	return messages?.map((item) => {
		const parseItemContent = item.content.output ? item.content.output.message.content : '';
		return (
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
							{item.id?.includes('error') ? (
								<ErrorMessage content={parseItemContent} />
							) : item.role === MessageRole.ASSISTANT ? (
								/* ASSISTANT MESSAGE */
								<AssistantMessage contentId={item.id ?? nanoid()} content={parseItemContent} />
							) : /* TOOL/FUNCTION MESSAGE */
							item.role === MessageRole.TOOL ? (
								<ToolMessage item={item} />
							) : (
								/* USER MESSAGE */
								<UserMessage content={item.content} />
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
		);
	});
};

export default MessagesList;
