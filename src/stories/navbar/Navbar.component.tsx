import React from 'react';

const NavbarComponent = ({ isNewChat, hide }: { isNewChat: Boolean; hide?: boolean }) => {
	return (
		<div
			className={`relative z-10 flex min-h-[60px] flex-wrap items-center justify-between gap-3 border-b bg-white border-black/10 p-2 dark:border-gray-900/50 dark:bg-gray-800 ${
				hide && 'hidden'
			}`}
		>
			<div className='hidden flex-shrink flex-row sm:flex'>
				<div className='h-11 w-11'></div>
			</div>
			<div className='flex flex-1 flex-grow items-center gap-1 text-lg p-1 text-gray-600 dark:text-white sm:justify-center sm:p-0'>
				<span>{isNewChat ? 'New Chat' : 'Default (GTP-3.5)'}</span>
			</div>
			<div className='flex flex-shrink flex-row'>
				<span>
					<span>
						<button
							aria-label='Share chat'
							className='flex p-3 items-center gap-3 transition-colors duration-200 text-gray-600 dark:text-white cursor-pointer text-sm rounded-md bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 h-11'
						>
							<svg
								stroke='currentColor'
								fill='none'
								strokeWidth='2'
								viewBox='0 0 24 24'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='icon-sm'
								height='1.3rem'
								width='1.3rem'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8'></path>
								<polyline points='16 6 12 2 8 6'></polyline>
								<line x1='12' y1='2' x2='12' y2='15'></line>
							</svg>
						</button>
					</span>
				</span>
			</div>
		</div>
	);
};

export default NavbarComponent;
