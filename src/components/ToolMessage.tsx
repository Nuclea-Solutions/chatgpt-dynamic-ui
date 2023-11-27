import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { Message } from '@/types/message';
import { CodeBlock } from './CodeBlock';

const ToolMessage = ({ item }: { item: Message }) => {
	return (
		<Accordion className='max-w-[500px] bg-[#ececf1]'>
			<AccordionSummary>
				<span className='pr-1 font-bold'>Used:</span>
				{item.tool_calls?.name}
			</AccordionSummary>
			<AccordionDetails>
				<CodeBlock
					value={item.tool_calls?.toString() ?? 'Function name'}
					language='javascript'
					type='request'
				/>
				<CodeBlock value={item.content} language='javascript' type='response' />
			</AccordionDetails>
		</Accordion>
	);
};

export default ToolMessage;
