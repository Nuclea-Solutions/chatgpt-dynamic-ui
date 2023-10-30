import React from 'react';

interface Props {
	toggleSwitch: () => void;
	isChecked: boolean;
}
const SwitchButton = ({ toggleSwitch, isChecked }: Props) => {
	return (
		<div className='flex items-center'>
			<label htmlFor='toggleSwitch' className='flex items-center cursor-pointer'>
				<div
					className={`w-[48px] h-[25px] ${
						isChecked ? 'bg-[#10a37f]' : 'bg-gray-100'
					} rounded-full flex items-center p-1`}
				>
					<div
						className={` bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
							isChecked ? 'translate-x-full' : ''
						}`}
					></div>
				</div>
			</label>
			<input
				type='checkbox'
				id='toggleSwitch'
				name='toggleSwitch'
				checked={isChecked}
				onChange={toggleSwitch}
				className='sr-only'
			/>
		</div>
	);
};

export default SwitchButton;
