import { AssistantAvatar } from './Icons';

const Avatar = ({ author }: { author: 'user' | 'system' | 'function' | string }) => {
	if (author === 'function') return <div className='w-[38px] h-[38px] mx-3'></div>;
	return (
		<div
			className={`rounded w-[38px] h-[38px] mx-3 flex items-center justify-center text-white ${
				author !== 'user' ? 'bg-[#19c37d]' : 'bg-black'
			}`}
		>
			<AssistantAvatar />
		</div>
	);
};

export default Avatar;
