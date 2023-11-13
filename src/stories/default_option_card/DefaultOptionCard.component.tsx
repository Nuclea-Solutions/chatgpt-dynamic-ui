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
			className='w-full py-2 px-3 whitespace-nowrap border rounded-xl text-left bg-white hover:bg-gray-100/50 text-gray-700 shadow-[0px_1px_6px_0px_rgba(0,0,0,0.02)] dark:text-gray-300 dark:bg-slate-700 dark:hover:bg-slate-700/50  md:whitespace-normal text-sm'
		>
			<div className='flex w-full gap-2 items-center justify-center'>
				<div className='flex w-full items-center justify-between'>
					<div className='flex flex-col overflow-hidden'>
						<div className='truncate font-semibold'>{title}</div>
						<div className='truncate opacity-50'>{content}</div>
					</div>
					<div className={`w-5 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 16 16'
							fill='none'
							className='icon-sm'
						>
							<path
								d='M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z'
								fill='currentColor'
							></path>
						</svg>
					</div>
				</div>
			</div>
		</button>
	);
};

export default DefaultOptionCardComponent;
