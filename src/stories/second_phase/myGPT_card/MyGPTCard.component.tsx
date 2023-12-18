import Image from 'next/image';
import React, { useState } from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { RiLockLine } from 'react-icons/ri';
import { TbPencil, TbTrash } from 'react-icons/tb';
import DeleteMenuComponent from '../delete_menu/DeleteMenu.component';

interface MyGPTCard {
	image: string;
	title: string;
	description?: string;
}

const MyGPTCardComponent = ({ image, title, description }: MyGPTCard) => {
	const [editHover, setEditHover] = useState(false);
	const [clickMoreOptions, setClickMoreOptions] = useState(false);

	const handleMoreOptions = () => setClickMoreOptions((state) => !state);
	return (
		<div className='flex items-center justify-between gap-10 text-sm hover:cursor-pointer hover:bg-gray-200 rounded-[8px] h-16 py-2  pr-4 relative'>
			<div className='flex gap-10'>
				<div className='flex items-center gap-4 ml-2'>
					<div className='flex items-center justify-center h-[40px] w-[40px] rounded-full overflow-hidden border'>
						<Image alt='gpt image' src={image} width={28} height={28} />
					</div>

					<div>
						<div className='flex items-center  gap-2'>
							<p className='font-semibold '>{title}</p>

							<div className='w-1 h-1 rounded-full bg-gray-400'></div>
						</div>
						<p className=' w-[400px]'>{description}</p>
					</div>
				</div>

				<div className='flex items-center gap-1 text-gray-500'>
					<RiLockLine />
					Only me
				</div>
			</div>
			<div className='flex gap-6'>
				<div onMouseEnter={() => setEditHover(true)} onMouseLeave={() => setEditHover(false)}>
					<TbPencil />
					<div
						className={`bg-black text-white p-4 absolute -top-14 right-4 rounded-[8px] whitespace-nowrap ${
							!editHover && 'hidden'
						}`}
					>
						Edit GPT{' '}
						<div className={`h-4 w-4 bg-black absolute -bottom-1 left-[40%] -rotate-45`}></div>
					</div>
				</div>
				<div onClick={handleMoreOptions}>
					<BiDotsHorizontalRounded />
					<div className={` absolute -top-14 right-0 ${!clickMoreOptions && 'hidden'}`}>
						<div className='flex items-center gap-2 py-4 pr-16 pl-4 bg-gray-200 rounded-[8px] text-red-500 border border-gray-300'>
							<TbTrash size={24} />
							<div className='whitespace-nowrap'>Delete GPT</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyGPTCardComponent;
