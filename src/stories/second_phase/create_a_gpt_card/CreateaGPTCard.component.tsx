'use client';
import useMessagesStore from '@/store/useMessagesStore';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaPlus } from 'react-icons/fa6';

const CreateaGPTCardComponent = () => {
	const router = useRouter();
	const setMessages = useMessagesStore((state) => state.setMessages);
	return (
		<div
			className='flex gap-10 ml-2 text-sm hover:cursor-pointer hover:bg-gray-200 rounded-[8px] h-16 cursor-pointer'
			onClick={() => {
				setMessages([]);
				router.push('/custom_gpt');
			}}
		>
			<div className='flex items-center gap-4 ml-2'>
				<div className='flex items-center justify-center h-[40px] w-[40px] rounded-full overflow-hidden border-1 border-dashed bg-gray-100/50'>
					<FaPlus size={16} />
				</div>
				<div>
					<p className='font-semibold '>
						Create a GPT
						<span className='rounded-full bg-blue-100 px-2 py-[2px] text-xs font-thin text-blue-400'>
							Beta
						</span>
					</p>
					<p className=' w-[400px]'>Customize a version of ChatGPT for a spesific purpose</p>
				</div>
			</div>
		</div>
	);
};

export default CreateaGPTCardComponent;
