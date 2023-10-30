import React, { useState, ChangeEvent } from 'react';
import { BsEyeSlash } from 'react-icons/bs';
import SwitchButton from '../switch_button/SwitchButton.component';

const CustomInstructionsComponent = ({
	customInstructionsShow
}: {
	customInstructionsShow: boolean;
}) => {
	const [textBoxs, setTextBoxs] = useState({
		firstTextBox: '',
		secondTextBox: ''
	});
	const [isChecked, setIsChecked] = useState(false);
	const [focusedValue, setFocusedValue] = useState('');
	const [modalFirstOpen, setModalFirstOpen] = useState(false);
	const [modalSecondOpen, setModalSecondOpen] = useState(false);
	const toggleSwitch = () => {
		setIsChecked(!isChecked);
	};

	const handleChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const { value, name } = e.target;
		setTextBoxs({
			...textBoxs,
			[name]: value
		});
	};

	const handleFocus = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const { name } = e.target;
		setFocusedValue(name);
	};

	const handleBlur = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setFocusedValue('name');
	};

	return (
		<div
			className={`${
				!customInstructionsShow && 'hidden'
			} bg-white relative col-auto col-start-2 row-auto row-start-2 w-full rounded-xl text-left shadow-xl transition-all left-1/2 -translate-x-1/2 dark:bg-gray-800 max-w-xl xl:max-w-xl `}
		>
			<div className='px-4 pb-4 pt-5 sm:p-6 flex items-center justify-between border-b border-black/10 dark:border-white/10'>
				<div className='flex flex-col gap-1 text-center sm:text-left'>
					<h2
						id='radix-:r7q:'
						className='text-lg font-medium leading-6 text-gray-900 dark:text-gray-200'
					>
						<div className='flex flex-row gap-2'>
							Custom instructions
							<span className='' data-state='closed'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 18 18'
									fill='none'
									className='h-6 w-6 flex-shrink-0 text-gray-500'
								>
									<path
										d='M8.4375 8.4375L8.46825 8.4225C8.56442 8.37445 8.67235 8.35497 8.77925 8.36637C8.88615 8.37776 8.98755 8.41955 9.07143 8.48678C9.15532 8.55402 9.21818 8.64388 9.25257 8.74574C9.28697 8.8476 9.29145 8.95717 9.2655 9.0615L8.7345 11.1885C8.70836 11.2929 8.7127 11.4026 8.74702 11.5045C8.78133 11.6065 8.84418 11.6965 8.9281 11.7639C9.01202 11.8312 9.1135 11.8731 9.2205 11.8845C9.32749 11.8959 9.43551 11.8764 9.53175 11.8282L9.5625 11.8125M15.75 9C15.75 9.88642 15.5754 10.7642 15.2362 11.5831C14.897 12.4021 14.3998 13.1462 13.773 13.773C13.1462 14.3998 12.4021 14.897 11.5831 15.2362C10.7642 15.5754 9.88642 15.75 9 15.75C8.11358 15.75 7.23583 15.5754 6.41689 15.2362C5.59794 14.897 4.85382 14.3998 4.22703 13.773C3.60023 13.1462 3.10303 12.4021 2.76381 11.5831C2.42459 10.7642 2.25 9.88642 2.25 9C2.25 7.20979 2.96116 5.4929 4.22703 4.22703C5.4929 2.96116 7.20979 2.25 9 2.25C10.7902 2.25 12.5071 2.96116 13.773 4.22703C15.0388 5.4929 15.75 7.20979 15.75 9ZM9 6.1875H9.006V6.1935H9V6.1875Z'
										stroke='currentColor'
										strokeWidth='1.5'
										strokeLinecap='round'
										strokeLinejoin='round'
									></path>
								</svg>
							</span>
						</div>
					</h2>
				</div>
			</div>
			<div className='p-4 sm:p-6 sm:pt-4'>
				<p className='text-muted pb-3 pt-2 text-sm text-gray-600 dark:text-white'>
					What would you like ChatGPT to know about you to provide better responses?
				</p>
				<div className='mb-3 xl:relative'>
					<textarea
						className='w-full	resize-none rounded p-4 border border-gray-200 bg-inherit dark:border-gray-100 dark:bg-gray-800  focus:border-brand-green outline-green-200'
						rows={7}
						name='firstTextBox'
						onChange={handleChangeValue}
						onFocus={handleFocus}
						onBlur={handleBlur}
					></textarea>
					<div className='flex items-center justify-between px-1 text-xs text-gray-400'>
						<div>0/1500</div>
						<button
							className={`flex items-center gap-1 text-gray-400 ${
								focusedValue !== 'firstTextBox' && 'hidden'
							}`}
							onClick={() => setModalFirstOpen((prev) => !prev)}
						>
							Hide tips
							<BsEyeSlash />
						</button>
					</div>
					<div
						className={` w-full xl:max-w-xs rounded-xl py-4 px-5 flex flex-col gap-2 absolute top-1/2 -right-0 xl:-right-[62%] xl:top-0 bg-gray-100 text-gray-600 dark:bg-black dark:text-white ${
							!modalSecondOpen && 'hidden'
						}`}
					>
						<h3 className='font-semibold text-lg'>Tought starters</h3>
						<ul className='list-disc px-5'>
							<li>Where are you based</li>
							<li>What do you for work</li>
							<li>What are your hobbies and interests</li>
							<li>What subjets can you talk about for hours?</li>
							<li>What are some goals you have?</li>
						</ul>
					</div>
				</div>
				<p className='text-muted py-3 text-sm text-gray-600 dark:text-white'>
					How would you like ChatGPT to respond?
				</p>
				<div className='xl:relative'>
					<textarea
						className='w-full	resize-none rounded p-4 border border-gray-200 bg-inherit dark:border-gray-100 dark:bg-gray-800  focus:border-brand-green outline-green-200'
						rows={7}
						name='secondTextBox'
						onChange={handleChangeValue}
						onFocus={handleFocus}
						onBlur={handleBlur}
					></textarea>
					<div className='flex items-center justify-between px-1 text-xs text-gray-400 '>
						<div>0/1500</div>
						<button
							className={`flex items-center gap-1 text-gray-400 ${
								focusedValue !== 'secondTextBox' && 'hidden'
							}
							`}
							onClick={() => setModalSecondOpen((prev) => !prev)}
						>
							Hide tips
							<BsEyeSlash />
						</button>
					</div>
					<div
						className={` w-full xl:max-w-xs rounded-xl py-4 px-5 flex flex-col gap-2 absolute top-1/2 -right-0 xl:-right-[62%] xl:top-0 bg-gray-100 text-gray-600 dark:bg-black dark:text-white ${
							!modalSecondOpen && 'hidden'
						}`}
					>
						<h3 className='font-semibold text-lg'>Tought starters</h3>
						<ul className='list-disc px-5'>
							<li>Where are you based</li>
							<li>What do you for work</li>
							<li>What are your hobbies and interests</li>
							<li>What subjets can you talk about for hours?</li>
							<li>What are some goals you have?</li>
						</ul>
					</div>
				</div>
				<div className='mt-5 sm:mt-4'>
					<div className='flex flex-grow flex-col items-stretch justify-between gap-0 sm:flex-row sm:items-center sm:gap-3'>
						<label className='mt-5 flex cursor-pointer flex-row justify-between gap-2 sm:mt-4'>
							<div className='self-center text-sm text-gray-600'>Enable for new chats</div>
							<SwitchButton isChecked={isChecked} toggleSwitch={toggleSwitch} />
						</label>
						<div className='mt-5 flex flex-col gap-3 sm:mt-4 sm:flex-row-reverse'>
							<button
								className={`${
									textBoxs.firstTextBox !== '' || textBoxs.secondTextBox !== ''
										? ''
										: 'opacity-50 cursor-not-allowed'
								}  py-2 px-3 border rounded bg-[#10a37f] hover:bg-[#10a37edd] text-white`}
							>
								<div className='flex w-full gap-2 items-center justify-center'>Save</div>
							</button>
							<button className='py-2 px-3 bg-gray-500 border border-white rounded text-white'>
								<div className='flex w-full gap-2 items-center justify-center'>Cancel</div>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomInstructionsComponent;
