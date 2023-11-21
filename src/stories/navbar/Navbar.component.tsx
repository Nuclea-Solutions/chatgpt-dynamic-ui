import React from 'react';

const NavbarComponent = ({ isNewChat, hide }: { isNewChat: Boolean; hide?: boolean }) => {
	return (
		<div
			className={`z-10 flex min-h-[60px] justify-between  items-center gap-3 p-4 bg-white opacity-95 dark:border-gray-900/50 dark:bg-gray-800 ${
				hide && 'hidden'
			}`}
		>
			<div className='flex items-center gap-1 text-lg p-1 text-gray-600 dark:text-white sm:justify-center sm:p-0 opacity-100'>
				<span>
					<span className='font-semibold'>ChatGPT</span> 3.5
				</span>
			</div>
			<div>
				<button
					aria-label='Share chat'
					className='flex p-2 items-center gap-3 transition-colors border rounded-[8px] border-gray-300 duration-200 text-black dark:text-white cursor-pointer text-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
				>
					<svg
						width='18'
						height='18'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='icon-md'
					>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L16.7071 6.29289C17.0976 6.68342 17.0976 7.31658 16.7071 7.70711C16.3166 8.09763 15.6834 8.09763 15.2929 7.70711L13 5.41421V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V5.41421L8.70711 7.70711C8.31658 8.09763 7.68342 8.09763 7.29289 7.70711C6.90237 7.31658 6.90237 6.68342 7.29289 6.29289L11.2929 2.29289ZM4 13C4.55228 13 5 13.4477 5 14V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V14C3 13.4477 3.44772 13 4 13Z'
							fill='currentColor'
						></path>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default NavbarComponent;
