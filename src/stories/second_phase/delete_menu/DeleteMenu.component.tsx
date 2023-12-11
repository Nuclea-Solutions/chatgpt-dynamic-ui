import React from 'react';
import { TbTrash } from 'react-icons/tb';
const DeleteMenuComponent = () => {
	return (
		<div className='flex items-center gap-2 p-4 bg-gray-200 rounded-[8px] text-red-500 border border-gray-300'>
			<TbTrash size={24} />
			<div className='whitespace-nowrap'>Delete GPT</div>
		</div>
	);
};

export default DeleteMenuComponent;
