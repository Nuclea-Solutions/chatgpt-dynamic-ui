import Image from 'next/image';
import { AssistantAvatar } from './Icons';
import { useChatGptVersion } from '@/store/useChatGptVersion';

const Avatar = ({ author }: { author: 'user' | 'system' | 'function' | string }) => {
	const publicVersion = useChatGptVersion((state) => state.publicVersion);
	if (author === 'function') return <div className='w-[38px] h-[38px] mx-3'></div>;

	return (
		// <div
		// 	className={`rounded-full w-[24px] h-[24px] mx-3 flex items-center justify-center p-1 text-white ${
		// 		// author !== 'user' ? 'bg-[#19c37d]' : 'bg-black'
		// 		author !== 'user' ? 'bg-white border' : 'bg-black'
		// 	}`}
		// >
		// 	{/* <AssistantAvatar />
		// 	 */}
		// 	<Image src={'/gorillau.png'} alt='gorilla' width={50} height={50} />
		// </div>
		author !== 'user' ? (
			<div
				className={`rounded-full w-[24px] h-[24px] mx-3 flex items-center justify-center p-1 text-white ${
					author !== 'user' && publicVersion ? 'bg-white border' : 'bg-black'
				}`}
			>
				{publicVersion ? (
					<Image src={'/nucleabrand.png'} alt='nucle abrand' width={50} height={50} />
				) : (
					<AssistantAvatar />
				)}
			</div>
		) : (
			<div
				className={`rounded-full w-[24px] h-[24px] mx-3 flex items-center justify-center p-1 border text-white overflow-hidden`}
			>
				<Image src={'/useru.png'} alt='user' width={200} height={200} />
			</div>
		)
	);
};

export default Avatar;
