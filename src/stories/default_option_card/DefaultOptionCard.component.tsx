import React, { useState } from 'react';

interface Props {
	title: string;
	content: string;
}
const DefaultOptionCardComponent = ({
	title = 'Tell me a fun fact',
	content = 'about the Roman Empire'
}: Props) => {
	const [hovered, setHovered] = useState(false);

	const handleMouseEnter = () => {
		setHovered(true);
	};

	const handleMouseLeave = () => {
		setHovered(false);
	};
	return (
		<button
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className='w-full py-2 px-3 whitespace-nowrap border rounded-xl text-left bg-white hover:bg-gray-100/70 text-gray-700 shadow-[0px_1px_6px_0px_rgba(0,0,0,0.02)] dark:text-gray-300 dark:bg-slate-700 dark:hover:bg-slate-700/50  md:whitespace-normal text-sm'
		>
			<div className='flex w-full gap-2 items-center justify-center'>
				<div className='flex w-full items-center justify-between'>
					<div className='flex flex-col overflow-hidden'>
						<div className='truncate'>{title}</div>
						<div className='truncate opacity-50'>{content}</div>
					</div>
					<div
						className={`w-6 h-6 p-1 ${
							hovered ? 'opacity-100' : 'opacity-0'
						} bg-white flex justify-center items-center rounded-[8px]`}
					>
						<svg
							width='18'
							height='18'
							viewBox='0 0 24 24'
							fill='none'
							className='icon-sm text-token-text-primary'
						>
							<path
								d='M7 11L12 6L17 11M12 18V7'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							></path>
						</svg>
					</div>
				</div>
			</div>
		</button>
	);
};

export default DefaultOptionCardComponent;
