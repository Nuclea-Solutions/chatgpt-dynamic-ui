'use client';
import React, { useState, useEffect } from 'react';

const ToggleComponent = ({ isNewChat = true }: { isNewChat: Boolean }) => {
	const [isActive, setIsActive] = useState('button1');
	const [windowWidth, setWindowWidth] = useState<number>();
	const [hoveredOptionOne, setHoveredOptionOne] = useState(false);
	const [hoveredOptionOneTooltip, setHoveredOptionOneTooltip] = useState(false);
	const [hoveredOptionTwoTooltip, setHoveredOptionTwoTooltip] = useState(false);
	const [hoveredOptionTwo, setHoveredOptionTwo] = useState(false);
	const [clickedOption, setClickedOption] = useState(false);

	const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
		setIsActive(event.currentTarget.name);
	};

	const handleMouseEnterOptionOne = () => {
		setHoveredOptionOne(true);
	};
	const handleMouseLeaveOptionOne = () => {
		setTimeout(() => {
			setHoveredOptionOne(false);
		}, 200);
	};
	const handleMouseEnterOptionOneTooltip = () => {
		setHoveredOptionOneTooltip(true);
	};
	const handleLeaveOptionOneTooltip = () => {
		setTimeout(() => {
			setHoveredOptionOneTooltip(false);
		}, 200);
	};
	const handleMouseEnterOptionTwo = () => {
		setHoveredOptionTwo(true);
	};
	const handleMouseLeaveOptionTwo = () => {
		setTimeout(() => {
			setHoveredOptionTwo(false);
		}, 200);
	};
	const handleMouseEnterOptionTwoTooltip = () => {
		setHoveredOptionTwoTooltip(true);
	};
	const handleLeaveOptionTwoTooltip = () => {
		setTimeout(() => {
			setHoveredOptionTwoTooltip(false);
		}, 200);
	};

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div
			className={`flex flex-col justify-center w-full mt-6 sm:items-center md:p-0 md:mt-6 overflow-hidden ${
				!isNewChat && 'hidden'
			}`}
		>
			<div className='flex gap-1 p-1 rounded-xl sm:w-[308px] h-[50px] relative bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-white'>
				<button
					name='button1'
					onClick={toggle}
					className={`${
						isActive === 'button1' ? 'border bg-white dark:bg-gray-700/50' : 'text-gray-400/90'
					}  rounded-xl w-full outline-none px-6`}
					onMouseEnter={handleMouseEnterOptionOne}
					onMouseLeave={handleMouseLeaveOptionOne}
				>
					<div className='flex justify-center gap-2 '>
						<span className='relative flex items-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 16 16'
								fill='none'
								className='icon-sm transition-colors'
								width='1.2rem'
								height='1.2rem'
							>
								<path
									d='M9.586 1.526A.6.6 0 0 0 8.553 1l-6.8 7.6a.6.6 0 0 0 .447 1h5.258l-1.044 4.874A.6.6 0 0 0 7.447 15l6.8-7.6a.6.6 0 0 0-.447-1H8.542l1.044-4.874Z'
									fill={isActive == 'button1' || hoveredOptionOne ? '#19c37d' : 'currentColor'}
								></path>
							</svg>
						</span>
						<span className='truncate text-sm font-medium pr-1.5'>GPT-3.5</span>

						<div className='flex items-center' onClick={() => setClickedOption((prev) => !prev)}>
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth='0'
								viewBox='0 0 512 512'
								className='icon-sm toggle-item-button-open ml-0.5 text-gray-600 sm:hidden'
								height='1.2rem'
								width='1.2rem'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'></path>
							</svg>
						</div>
					</div>
				</button>

				<button
					name='button2'
					onClick={toggle}
					className={`${
						isActive == 'button2' ? 'border bg-white dark:bg-gray-700/50' : 'text-gray-400/90'
					} px-6 rounded-xl w-full outline-none`}
					onMouseEnter={handleMouseEnterOptionTwo}
					onMouseLeave={handleMouseLeaveOptionTwo}
				>
					<div className='flex justify-center gap-2 items-center'>
						<span className='max-[370px]:hidden relative'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 16 16'
								fill='none'
								className='icon-sm transition-colors group-hover/button:text-brand-purple'
								width='16'
								height='16'
							>
								<path
									d='M12.784 1.442a.8.8 0 0 0-1.569 0l-.191.953a.8.8 0 0 1-.628.628l-.953.19a.8.8 0 0 0 0 1.57l.953.19a.8.8 0 0 1 .628.629l.19.953a.8.8 0 0 0 1.57 0l.19-.953a.8.8 0 0 1 .629-.628l.953-.19a.8.8 0 0 0 0-1.57l-.953-.19a.8.8 0 0 1-.628-.629l-.19-.953h-.002ZM5.559 4.546a.8.8 0 0 0-1.519 0l-.546 1.64a.8.8 0 0 1-.507.507l-1.64.546a.8.8 0 0 0 0 1.519l1.64.547a.8.8 0 0 1 .507.505l.546 1.641a.8.8 0 0 0 1.519 0l.546-1.64a.8.8 0 0 1 .506-.507l1.641-.546a.8.8 0 0 0 0-1.519l-1.64-.546a.8.8 0 0 1-.507-.506L5.56 4.546Zm5.6 6.4a.8.8 0 0 0-1.519 0l-.147.44a.8.8 0 0 1-.505.507l-.441.146a.8.8 0 0 0 0 1.519l.44.146a.8.8 0 0 1 .507.506l.146.441a.8.8 0 0 0 1.519 0l.147-.44a.8.8 0 0 1 .506-.507l.44-.146a.8.8 0 0 0 0-1.519l-.44-.147a.8.8 0 0 1-.507-.505l-.146-.441Z'
									fill={isActive == 'button2' || hoveredOptionTwo ? '#AB68FF' : 'currentColor'}
								></path>
							</svg>
						</span>
						<span className='truncate text-sm font-medium md:pr-1.5 pr-1.5'>GPT-4</span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							aria-hidden='true'
							className='icon-sm transition-colors sm:ml-0 -ml-2 group-hover/button:text-brand-purple w-5'
						>
							<path
								fillRule='evenodd'
								d='M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z'
								clipRule='evenodd'
							></path>
						</svg>
					</div>
				</button>

				<div
					className={`${
						hoveredOptionOne || hoveredOptionOneTooltip
							? 'flex flex-col gap-3 p-4 max-w-xs absolute -bottom-[138px] border text-left rounded-xl bg-white dark:bg-gray-800'
							: 'hidden'
					}
					${windowWidth && windowWidth < 640 && 'hidden'}
					`}
					onMouseEnter={handleMouseEnterOptionOneTooltip}
					onMouseLeave={handleLeaveOptionOneTooltip}
				>
					<h3 className='text-lg font-semibold'>
						Our fastest model, great for most everday tasks.
					</h3>
					<p className='text-sm font-medium text-gray-400'>Avalible to Free and Plus users</p>
				</div>

				<div
					className={`${
						clickedOption
							? 'flex flex-col gap-3 p-4 max-w-xs absolute -bottom-[138px] border text-left rounded-xl bg-white dark:bg-gray-800'
							: 'hidden'
					}`}
				>
					<h3 className='text-lg font-semibold'>Our fastest model, great for most everday tasks</h3>
					<p className='text-sm font-medium text-gray-400'>Avalible to Free and Plus users</p>
				</div>

				<div
					className={`${
						hoveredOptionTwo || hoveredOptionTwoTooltip
							? 'flex flex-col gap-3 p-4 max-w-xs absolute -bottom-[283px] rounded-xl border text-left bg-white dark:bg-gray-800'
							: 'hidden'
					}
					${windowWidth && windowWidth < 640 && 'hidden'}
					`}
					onMouseEnter={handleMouseEnterOptionTwoTooltip}
					onMouseLeave={handleLeaveOptionTwoTooltip}
				>
					<h3 className='text-lg font-semibold'>
						Our most capable model, great for tasks that require creatibity and advanced reasoning.
					</h3>
					<p className='text-sm font-medium text-gray-400 '>Avalible to Free and Plus users</p>
					<p className='text-sm font-medium text-gray-400 '>
						GPT-4 currently has a cap of 25 messages every 3 hours.
					</p>
					<button className=' w-full text-sm py-4 font-semibold bg-[#AB68FF] rounded-[6px] text-white tracking-wide outline-none'>
						{' '}
						Upgrade to ChatGPT Plus
					</button>
				</div>
			</div>
		</div>
	);
};

export default ToggleComponent;
