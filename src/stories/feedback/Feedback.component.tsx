import React from 'react';

const FeedbackComponent = () => {
	return (
		<div className='text-gray-400 flex mt-2 visible lg:gap-1 lg:mt-0 lg:pl-2 gap-2 md:gap-3'>
			<button className='flex gap-2 items-center rounded-[8px] p-1 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400 hover:bg-gray-100 hover:text-gray-700'>
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
					<path d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'></path>
					<rect x='8' y='2' width='8' height='4' rx='1' ry='1'></rect>
				</svg>
			</button>
			<div className='flex gap-1'>
				<button className='p-1 rounded disabled:dark:hover:text-gray-400 dark:hover:text-gray-200 dark:text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700'>
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
						<path d='M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3'></path>
					</svg>
				</button>
				<button className='p-1 rounded-[8px] disabled:dark:hover:text-gray-400 dark:hover:text-gray-200 dark:text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700'>
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
						<path d='M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17'></path>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default FeedbackComponent;
