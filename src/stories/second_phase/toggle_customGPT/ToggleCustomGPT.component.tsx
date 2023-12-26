'use client';
import React, { useState, useEffect } from 'react';

const ToggleCustomGPT = ({
	handleActiveView,
	isActive
}: {
	handleActiveView: (activeView: string) => void;
	isActive: string;
}) => {
	// const [isActive, setIsActive] = useState('create');

	const [clickedOption, setClickedOption] = useState(false);

	const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
		handleActiveView(event.currentTarget.name);
	};

	return (
		<div
			className={`flex flex-col justify-center w-full mt-2 px-2 md:px-0 sm:items-center md:p-0 overflow-hidden`}
		>
			<div className='flex gap-1 p-1 rounded-xl h-[50px] relative bg-gray-200 text-gray-600 dark:bg-[#545467] dark:text-white'>
				<button
					name='create'
					onClick={toggle}
					className={`${
						isActive === 'create'
							? 'border dark:border-none bg-white dark:bg-[#353541]'
							: 'text-gray-400/90'
					}  rounded-xl w-full outline-none px-6`}
				>
					<div className='flex justify-center gap-2 '>
						<span className='truncate text-sm font-medium pr-1.5'>Create</span>

						<div
							className='flex items-center'
							onClick={() => setClickedOption((prev) => !prev)}
						></div>
					</div>
				</button>

				<button
					name='configure'
					onClick={toggle}
					className={`${
						isActive == 'configure'
							? 'border dark:border-none bg-white dark:bg-[#353541]'
							: 'text-gray-400/90'
					} px-6 rounded-xl w-full outline-none`}
				>
					<div className='flex justify-center gap-2 items-center'>
						<span className='truncate text-sm font-medium md:pr-1.5 pr-1.5'>Configure</span>
					</div>
				</button>

				<button
					name='preview'
					onClick={toggle}
					className={`md:hidden ${
						isActive == 'preview' ? 'border bg-white dark:bg-gray-700/50' : 'text-gray-400/90'
					} px-6 rounded-xl w-full outline-none`}
				>
					<div className='flex justify-center gap-2 items-center'>
						<span className='truncate text-sm font-medium md:pr-1.5 pr-1.5'>Preview</span>
					</div>
				</button>
			</div>
		</div>
	);
};

export default ToggleCustomGPT;
