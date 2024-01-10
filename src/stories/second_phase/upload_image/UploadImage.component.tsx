import React, { useEffect, useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

const UploadImageComponent = () => {
	const [menuUploadImageVisible, setMenuUploadImageVisible] = useState(false);
	const menuUploadImageRef = useRef<HTMLDivElement>(null);
	const buttonUploadImageRef = useRef<HTMLDivElement>(null);

	const handleOpenMenu = () => {
		setMenuUploadImageVisible((prev) => !prev);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				menuUploadImageRef.current &&
				!menuUploadImageRef.current.contains(event.target as Node) &&
				buttonUploadImageRef.current &&
				!buttonUploadImageRef.current.contains(event.target as Node)
			) {
				setMenuUploadImageVisible(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside as any);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside as any);
		};
	}, []);

	return (
		<div className='flex flex-col items-center gap-2 relative'>
			<div
				onClick={handleOpenMenu}
				className={`flex justify-center items-center border-3 border-dashed rounded-full w-20 h-20 text-gray-700 dark:text-white hover:cursor-pointer`}
				ref={buttonUploadImageRef}
			>
				<FaPlus size={30} />
			</div>

			<div
				className={`border p-1 rounded-2xl bg-gray-200 dark:bg-[#202123] absolute -bottom-[138px] ${
					!menuUploadImageVisible && 'hidden'
				}`}
				ref={menuUploadImageRef}
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
