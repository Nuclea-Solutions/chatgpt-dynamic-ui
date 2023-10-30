import React, { useState } from 'react';
import SwitchButton from '../switch_button/SwitchButton.component';

const SettingsModal = () => {
	const [tabSelected, setTabSelected] = useState('general');
	const handleTabSelected = (e: React.MouseEvent<HTMLDivElement>) => {
		setTabSelected(e.currentTarget.id);
	};
	const [isChecked, setIsChecked] = useState(false);
	const handleToggleSwitch = () => {
		setIsChecked(!isChecked);
	};
	return (
		<div className='relative col-auto col-start-2 row-auto row-start-2 w-full rounded-[8px] text-left shadow-xl transition-all left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 md:max-w-[680px] text-gray-700 dark:text-gray-200'>
			<div className='px-4 pb-4 pt-5 sm:p-6 flex items-center justify-between border-b border-black/10 dark:border-white/10'>
				<div className='flex'>
					<div className='flex items-center'>
						<div className='flex flex-col gap-1 text-center sm:text-left'>
							<h2
								id='radix-:RkdmH1:'
								className='text-lg font-medium leading-6 text-gray-900 dark:text-gray-200'
							>
								Settings
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
			<div className='flex flex-col md:flex-row gap-6 p-4 sm:p-6 sm:pt-4'>
				<div className='-ml-[8px] flex min-w-[180px] h-full flex-shrink-0 md:max-w-[200px] flex-row gap-6 md:flex-col p-1 bg-gray-200 dark:bg-gray-800 md:bg-inherit rounded-[8px]'>
					<div
						className={`flex justify-center md:justify-normal gap-2 w-full py-1.5 px-2 rounded-[8px] cursor-pointer ${
							tabSelected == 'general' && 'bg-gray-100 dark:bg-gray-800/30'
						}`}
						id='general'
						onClick={handleTabSelected}
					>
						<svg
							stroke='currentColor'
							fill='currentColor'
							strokeWidth='0'
							viewBox='0 0 20 20'
							className='h-5 w-5 fill-gray-800 group-radix-state-active:fill-white dark:fill-gray-500'
							height='1em'
							width='1em'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
								clipRule='evenodd'
							></path>
						</svg>
						<p>General</p>
					</div>
					<div
						className={`flex justify-center md:justify-normal gap-2 w-full py-1.5 px-2 rounded-[8px] cursor-pointer ${
							tabSelected == 'dataControls' && 'bg-gray-100 dark:bg-gray-800/30'
						}`}
						id='dataControls'
						onClick={handleTabSelected}
					>
						<svg
							stroke='currentColor'
							fill='currentColor'
							strokeWidth='0'
							viewBox='0 0 20 20'
							className='h-5 w-5 fill-gray-800 group-radix-state-active:fill-white dark:fill-gray-500'
							height='1em'
							width='1em'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z'></path>
							<path d='M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z'></path>
							<path d='M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z'></path>
						</svg>
						<p>Data controls</p>
					</div>
				</div>

				{tabSelected === 'general' ? (
					<div className=' w-full h-full min-h-[300px] '>
						<div className='flex flex-col gap-3 '>
							<div className='flex items-center justify-between border-b pb-3 dark:border-gray-70'>
								<div>Theme</div>
								<select className=' hover:bg-gray-50 dark:hover:bg-[#494A54] flex gap-4 px-3 cursor-ponter h-9 rounded-[8px] outline-none cursor-pointer'>
									<option value='System'>System</option>
									<option value='Dark' selected>
										Dark
									</option>
									<option value='Light'>Light</option>
								</select>
							</div>
							<div className='flex items-center justify-between border-b pb-3 dark:border-gray-70'>
								<div>Clear all chats</div>
								<button className='bg-red-600 hover:bg-[#b91c1c] text-white py-2 px-3 rounded'>
									Clear
								</button>
							</div>
						</div>
					</div>
				) : (
					<div className='w-full h-full min-h-[300px]'>
						<div className='flex flex-col gap-3'>
							<div className='border-b pb-3 dark:border-gray-700'>
								<div className='flex items-center justify-between'>
									<div>Chat history &amp; training</div>
									<SwitchButton isChecked={isChecked} toggleSwitch={handleToggleSwitch} />
								</div>
								<div className='mt-2 text-xs text-token-text-tertiary'>
									Save new chats on this browser to your history and allow them to be used to
									improve our models. Unsaved chats will be deleted from our systems within 30 days.
									This setting does not sync across browsers or devices.{' '}
									<a
										href='https://help.openai.com/en/articles/7730893 '
										target='_blank'
										className='underline'
										rel='noreferrer'
									>
										Learn more
									</a>
								</div>
							</div>
							<div className='border-b pb-3 dark:border-gray-700'>
								<div className='flex items-center justify-between'>
									<div>Shared links</div>
									<button className='border border-whie dark:bg-gray-800/50 hover:bg-gray-700/20 dark:text-white py-2 px-3 rounded '>
										<div className='flex w-full gap-2 items-center justify-center'>Manage</div>
									</button>
								</div>
							</div>
							<div className='border-b pb-3 dark:border-gray-700'>
								<div className='flex items-center justify-between'>
									<div>Export data</div>
									<button className='border border-whie dark:bg-gray-800/50 hover:bg-gray-700/20 dark:text-white py-2 px-3 rounded'>
										<div className='flex w-full gap-2 items-center justify-center'>Export</div>
									</button>
								</div>
							</div>
							<div className='border-b pb-3 last-of-type:border-b-0 dark:border-gray-700'>
								<div className='flex items-center justify-between'>
									<div>Delete account</div>
									<button className='bg-red-600 hover:bg-[#b91c1c] text-white py-2 px-3 rounded'>
										<div className='flex w-full gap-2 items-center justify-center'>Delete</div>
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default SettingsModal;
