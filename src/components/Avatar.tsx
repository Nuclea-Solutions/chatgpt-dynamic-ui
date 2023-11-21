import { AssistantAvatar } from './Icons';

const Avatar = ({ author }: { author: 'user' | 'system' | 'function' | string }) => {
	if (author === 'function') return <div className='w-[38px] h-[38px] mx-3'></div>;
	return (
		<div
			className={`rounded-full w-[24px] h-[24px] mx-3 flex items-center justify-center p-1 text-white ${
				author !== 'user' ? 'bg-[#19c37d]' : 'bg-black'
			}`}
		>
			<AssistantAvatar />
		</div>
	);
};

export default Avatar;
