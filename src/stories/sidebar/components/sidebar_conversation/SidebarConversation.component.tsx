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
			className={`flex items-center gap-3 p-2 rounded-[8px] cursor-pointer mr-2 bg-black hover:bg-[rgb(32,33,35)] text-white break-all relative ${
				isSelected == itemId ? 'bg-[hsl(220,4%,13%)] mr-2 pr-14' : ''
			}`}
			key={itemId}
			onMouseEnter={handleConversationMouseEnter}
			onMouseLeave={handleConversationMouseLeave}
		>
			<div className='flex-1 text-ellipsis max-h-5 overflow-hidden relative text-sm'>
				{title}
				<div
					className={`absolute inset-y-0 right-0 w-8 z-10 bg-gradient-to-l  ${
						isSelected !== itemId && conversationHovered === false
							? 'from-black'
							: 'from-[rgb(32,33,35)]'
					}
					`}
				></div>
			</div>

			<div
				className={`absolute flex right-2 z-10 text-gray-300 ${isSelected !== itemId && 'hidden'}`}
			>
				<button className='p-1 hover:text-token-text-primary'>
					<svg
						width='18'
						height='18'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='icon-md relative'
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z'
							fill='currentColor'
						></path>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default SidebarConversationComponent;
