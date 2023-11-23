import React, { ChangeEvent } from 'react';
import { GoImage } from 'react-icons/go';
const InputWidthButtonComponent = ({
	onChange,
	value
}: {
	type?: string;
	onChange: (newValue: any) => void;
	value: any;
}) => {
	// const [inputHeight, setInputHeight] = useState(0);
	const handleChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
		e.target.style.height = '56px';
		e.target.style.height = `${Math.min(e.target.scrollHeight, 200)}px`;
	};

	return (
		<div
			className={`flex justify-between items-end w-full text-base rounded-large pl-2 border overflow-hidden border-black/20 dark:border-gray-900/50 dark:bg-[#444654] dark:text-white`}
		>
			{/* <button
				className='w-[40px] h-[40px]  p-0 my-2 flex items-center justify-center text-[#ccc] relative group'
				disabled
			>
				<span className=' group-hover:opacity-100 absolute w-max -top-[100%] left-1/2 transform -translate-x-1/2 -mb-3  bg-black text-white rounded-[6px] text-base opacity-0 transition duration-300 ease-in-out'>
					<p className='z-10 py-2 px-3 text-base'>Attach images</p>
					<div className='-z-10 w-[10px] h-[10px] bg-black transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2'></div>
				</span>
				<GoImage size={20} />
			</button> */}
			<textarea
				className='pr-14 resize-none max-h-200  outline-none py-4 w-full pl-2'
				value={value}
				style={{ height: '56px' }}
				onChange={(e) => {
					onChange(e);
					handleChangeValue(e);
				}}
				// placeholder='Message ChatGPT...'
				placeholder='Envía un mensaje a Gú'
			/>

			<button
				type='submit'
				className={`w-[38px] h-[34px]  p-0 mb-[10px] flex items-center justify-center rounded-[8px] absolute right-4 ${
					value ? 'bg-black' : 'bg-black opacity-10 dark:bg-white'
				}`}
				disabled={!value}
			>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					className='text-white dark:text-black'
				>
					<path
						d='M7 11L12 6L17 11M12 18V7'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					></path>
				</svg>
			</button>
		</div>
	);
};

export default InputWidthButtonComponent;
