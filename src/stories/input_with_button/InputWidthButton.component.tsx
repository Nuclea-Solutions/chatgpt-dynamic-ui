import React, { ChangeEvent } from 'react';
import { IoSend } from 'react-icons/io5';
import { GoImage } from 'react-icons/go';
const InputWidthButtonComponent = ({
	onChange,
	value
}: {
	type?: string;
	onChange: (newValue: any) => void;
	value: any;
}) => {
	const handleChangeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
		e.target.style.height = '56px';
		e.target.style.height = `${Math.min(e.target.scrollHeight, 200)}px`;
	};

	return (
		<div
			className={`flex justify-between items-end w-full text-base rounded-large bg-white px-2 border shadow-[0_0_15px_rgba(0,0,0,.1)] dark:bg-[#40424f] dark:text-white`}
		>
			<button
				className='w-[40px] h-[40px]  p-0 my-2 flex items-center justify-center text-[#ccc] relative group'
				disabled
			>
				<span className=' group-hover:opacity-100 absolute w-max -top-[100%] left-1/2 transform -translate-x-1/2 -mb-3  bg-black text-white rounded-[6px] text-base opacity-0 transition duration-300 ease-in-out'>
					<p className='z-10 py-2 px-3 text-base'>Attach images</p>
					<div className='-z-10 w-[10px] h-[10px] bg-black transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2'></div>
				</span>
				<GoImage size={20} />
			</button>
			<textarea
				className='px-2 resize-none max-h-200 overflow-y-hidden outline-none py-5 w-full'
				value={value}
				style={{ height: '56px' }}
				onChange={(e) => {
					onChange(e);
					handleChangeValue(e);
				}}
				placeholder='Envia un mensaje'
			/>

			<button
				type='submit'
				className={`w-[38px] h-[38px]  p-0 my-2 flex items-center justify-center text-[#ccc] rounded-[8px] ${
					value ? 'bg-[#19c37d]' : 'bg-none'
				}`}
				disabled={!value}
			>
				<IoSend color={value ? 'white' : '#ccc'} size={20} />
			</button>
		</div>
	);
};

export default InputWidthButtonComponent;
