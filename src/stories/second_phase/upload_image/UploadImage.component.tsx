import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

const UploadImageComponent = () => {
	const [showPhotoDropdown, setShowDropdown] = useState(false);

	return (
		<div className='flex flex-col items-center gap-2 '>
			<div
				onClick={() => setShowDropdown((state) => !state)}
				className={`flex justify-center items-center border-3 border-dashed rounded-full w-20 h-20 text-gray-700 dark:text-white hover:cursor-pointer`}
			>
				<FaPlus size={30} />
			</div>
			<div
				className={`border p-1 rounded-2xl bg-gray-200 dark:bg-[#202123] ${
					!showPhotoDropdown && 'hidden'
				}`}
			>
				<div className='py-4 px-8 rounded-[8px]  border-2 border-transparent hover:border-[#9ecdff] hover:bg-gray-200/10 dark:hover:bg-[#20212310] dark-text-white cursor-pointer'>
					Upload Photo
				</div>
				<div className='py-4 px-8 rounded-[8px]  border-2 border-transparent hover:border-[#9ecdff] hover:bg-gray-200/10 dark:hover:bg-[#20212310] dark-text-white cursor-pointer'>
					Use DALL·E
				</div>
			</div>
		</div>
	);
};

export default UploadImageComponent;
