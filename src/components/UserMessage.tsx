import { useState } from 'react';
import { TbPencil } from 'react-icons/tb';

const UserMessage = ({ content }: { content: string }) => {
	const [showIconInUserMessage, setShowIconInUserMessage] = useState(false);

	return (
		<div
			className='flex-1 md:max-w-[80%]'
			onMouseEnter={() => setShowIconInUserMessage(true)}
			onMouseLeave={() => setShowIconInUserMessage(false)}
		>
			<p className='font-semibold text-sm mb-1'>You</p>
			<p className='m-0'>{content}</p>
			<div
				className={`mt-2 text-gray-400 hover:text-black hover:cursor-pointer w-0 ${
					!showIconInUserMessage && 'opacity-0'
				}`}
			>
				<TbPencil size={16} />
			</div>
		</div>
	);
};

export default UserMessage;
