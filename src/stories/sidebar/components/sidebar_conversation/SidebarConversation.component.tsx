import React, { useState } from 'react';

const SidebarConversationComponent = ({
	title,
	itemId,
	isSelected
}: {
	title: String;
	itemId: string | number;
	isSelected: string | number;
}) => {
	const [conversationHovered, setConversationHovered] = useState(false);

	const handleConversationMouseEnter = () => {
		setConversationHovered(true);
	};
	const handleConversationMouseLeave = () => {
		setConversationHovered(false);
	};

	return (
		<div
			className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer mr-2 bg-[#202123] hover:bg-[#2A2B32] text-white break-all relative ${
				isSelected == itemId ? 'bg-[#2A2B32] mr-2 pr-14' : ''
			}`}
			key={itemId}
			onMouseEnter={handleConversationMouseEnter}
			onMouseLeave={handleConversationMouseLeave}
		>
			<svg
				stroke='currentColor'
				fill='none'
				strokeWidth='2'
				viewBox='0 0 24 24'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='icon-sm'
				height='1em'
				width='1em'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'></path>
			</svg>

			<div className='flex-1 text-ellipsis max-h-5 overflow-hidden relative text-sm'>
				{title}
				<div
					className={`absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l  ${
						isSelected !== itemId && conversationHovered === false
							? 'from-[#202123]'
							: 'from-[#2A2B32]'
					}
					`}
				></div>
			</div>

			<div
				className={`absolute flex right-0 z-10 text-gray-300 ${isSelected !== itemId && 'hidden'}`}
			>
				<button className='p-1 hover:text-token-text-primary'>
					<svg
						stroke='currentColor'
						fill='none'
						strokeWidth='2'
						viewBox='0 0 24 24'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='icon-sm'
						height='1em'
						width='1em'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M12 20h9'></path>
						<path d='M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z'></path>
					</svg>
				</button>
				<button className='p-1 hover:text-token-text-primary'>
					<svg
						stroke='currentColor'
						fill='none'
						strokeWidth='2'
						viewBox='0 0 24 24'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='icon-sm'
						height='1em'
						width='1em'
						xmlns='http://www.w3.org/2000/svg'
					>
						<polyline points='3 6 5 6 21 6'></polyline>
						<path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path>
						<line x1='10' y1='11' x2='10' y2='17'></line>
						<line x1='14' y1='11' x2='14' y2='17'></line>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default SidebarConversationComponent;
