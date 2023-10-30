import React from 'react';

const ShareLinkToChatComponent = () => {
	return (
		<div className='relative col-auto col-start-2 row-auto row-start-2 w-full rounded-[8px] text-left shadow-xl transition-all left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 max-w-[550px]'>
			<div className='px-4 pb-4 pt-5 sm:p-6 flex items-center justify-between border-b border-black/10 dark:border-white/10'>
				<div className='flex'>
					<div className='flex items-center'>
						<div className='flex flex-col gap-1 text-center sm:text-left'>
							<h2
								id='radix-:r9b:'
								className='text-lg font-medium leading-6 text-gray-900 dark:text-gray-200'
							>
								Share Link to Chat
							</h2>
						</div>
					</div>
				</div>
				<button className='text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'>
					<svg
						stroke='currentColor'
						fill='none'
						strokeWidth='2'
						viewBox='0 0 24 24'
						strokeLinecap='round'
						strokeLinejoin='round'
						height='20'
						width='20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<line x1='18' y1='6' x2='6' y2='18'></line>
						<line x1='6' y1='6' x2='18' y2='18'></line>
					</svg>
				</button>
			</div>
			<div className='p-4 sm:p-6 sm:pt-4'>
				<div className='w-full'>
					<p className='mb-6 text-gray-500'>
						Messages you send after creating your link won't be shared. Anyone with the URL will be
						able to view the shared chat.
					</p>
				</div>
				<div className='w-full mb-4 shadow-[0_2px_12px_0px_rgba(0,0,0,0.08)] dark:bg-gray-800/90 rounded-[8px] birder border-gray-700 overflow-hidden bg-gray-50'>
					<div className='flex h-full max-w-full flex-1 flex-col overflow-hidden'>
						<div className='w-full h-[263px] overflow-y-auto'></div>
						<div className='flex p-4 bg-white dark:bg-gray-800/90 border-t border-gray-100 dark:border-gray-700 rounded-b-lg w-full h-full'>
							<div className='flex-1 pr-1'>
								<div className='flex w-full items-center justify-left gap-2 min-h-[1.5rem]'>
									Actualizar Estado con Dos Inputs
									<button className='text-gray-500'>
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
								</div>
								<div className='mt-1 text-gray-500'>October 11, 2023</div>
							</div>
							<div className='flex-none h-full mt-auto mb-auto'>
								<button
									className='btn relative btn-neutral mb-auto mt-auto'
									type='button'
									aria-haspopup='dialog'
									aria-expanded='false'
									aria-controls='radix-:ran:'
									data-state='closed'
								>
									<div className='flex w-full gap-2 items-center justify-center'>
										<svg
											stroke='currentColor'
											fill='currentColor'
											strokeWidth='0'
											viewBox='0 0 20 20'
											height='1em'
											width='1em'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z'></path>
										</svg>
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='mt-5 flex flex-col gap-3 sm:mt-4 sm:flex-row-reverse justify-between'>
					<button className='relative items-center border border-transparent rounded-[.25rem] py-[.5rem] px-[.75rem] bg-[#10a37f] text-white'>
						<div className='flex w-full gap-2 items-center justify-center'>
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
								<path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'></path>
								<path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'></path>
							</svg>
							Copy Link
						</div>
					</button>
					<div className='flex items-center gap-2 text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 hover:cursor-pointer'>
						More Info
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
							<path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
							<polyline points='15 3 21 3 21 9'></polyline>
							<line x1='10' y1='14' x2='21' y2='3'></line>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShareLinkToChatComponent;
