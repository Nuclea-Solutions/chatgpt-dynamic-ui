'use client';
// libraries
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
// components
import ComponentMessage from '@/components/ComponentMessage';
import Avatar from '@/components/Avatar';
import AssistantMessage from '@/components/AssistantMessage';
import { CodeBlock } from './CodeBlock';
// utils
import { cn } from '@/utils/utils';
import { Message } from 'ai';
import { nanoid } from 'nanoid';

const MessagesList = ({ messages }: { messages: Message[] }) => {
	return messages?.map((item) => {
		let parseItem: any = {
			output: { message: { content: item.content } }
		};
		try {
			parseItem =
				messages.length > 1 && item.role === 'assistant' && item.content.length > 2
					? JSON.parse(item.content)
					: { output: { message: { content: item.content } } };
		} catch (error) {
			parseItem = { output: { message: { content: item.content } } };
		}
		const parseItemOutput = parseItem?.output ?? {
			output: { message: parseItem?.messages ?? { content: item.content } }
		};
		const parseItemMessage = parseItem?.message ?? { message: { content: item.content } };

		return (
			item.role !== 'system' && (
				<div className='w-full justify-center' key={`${item.id}-${nanoid()}`}>
					<div
						className={cn([
							'whitespace-pre-wrap flex justify-center',
							item.role === 'assistant' ? 'bg-[#f7f7f8] border-1' : 'inherit'
						])}
					>
						<div className='w-full md:w-[820px] md:max-w-[94%]'>
							<div className='flex py-6'>
								<Avatar author={item.role} />
								{/* ASSISTANT MESSAGE */}
								{item.role === 'assistant' ? (
									/* ASSISTANT MESSAGE */
									<AssistantMessage
										contentId={item.id}
										content={
											parseItem && Object.keys(parseItem)?.includes('output')
												? parseItemOutput?.message?.content ?? ''
												: parseItemMessage
												? parseItemMessage?.content
												: 'no readable message'
										}
									/>
								) : /* TOOL/FUNCTION MESSAGE */
								item.role === 'function' ? (
									<Accordion className='max-w-[500px] bg-[#ececf1]'>
										<AccordionSummary>
											<span className='pr-1 font-bold'>Used:</span>
											{item.name}
										</AccordionSummary>
										<AccordionDetails>
											<CodeBlock
												value={item.function_call?.toString() ?? 'Function name'}
												language='javascript'
												type='request'
											/>
											<CodeBlock value={item.content} language='javascript' type='response' />
										</AccordionDetails>
									</Accordion>
								) : (
									/* USER MESSAGE */
									<div className='flex-1 md:max-w-[80%]'>
										<p className='m-0'>{item.content}</p>
									</div>
								)}
							</div>
							{item.role === 'assistant'
								? parseItemOutput?.message?.component && (
										<div className='m-[24px]'>
											<ComponentMessage
												key={`${item.id}-${Date.now()}`}
												component={
													typeof parseItemOutput.message?.component === 'string'
														? parseItemOutput.message?.component
														: parseItemOutput.message?.component?.name ?? ''
												}
												componentProps={parseItemOutput.message?.component?.props ?? []}
											/>
										</div>
								  )
								: null}
						</div>
					</div>
				</div>
			)
		);
	});
};

export default MessagesList;
