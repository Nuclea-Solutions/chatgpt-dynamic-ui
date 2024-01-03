'use client';
import Avatar from '@/components/Avatar';
import MessagesList from '@/components/MessagesList';
import useChatCustom from '@/hooks/useChatCustom/useChatCustom';
import useCustomGPT from '@/store/useCustomGPT';
import InputWidthButtonComponent from '@/stories/input_with_button/InputWidthButton.component';
import React, { useEffect, useState } from 'react';

const CustomGPTCreateSectionComponent = ({ isActive }: { isActive: string }) => {
	const [configurationMessages] = useCustomGPT((state) => [state.configurationMessages]);
	const { handleSubmit, input, handleInputChange, configureInput, handleChangeConfigureMessage } =
		useChatCustom({
			customGPT: true
		});
	const [windowWidth, setWindowWidth] = useState<number>(0);
	useEffect(() => {
		if (typeof window !== 'undefined') {
			setWindowWidth(window.innerWidth);
			const handleResize = () => {
				setWindowWidth(window.innerWidth);
			};

			window.addEventListener('resize', handleResize);

			return () => {
				window.removeEventListener('resize', handleResize);
			};
		}
	}, []);
	return (
		<div
			className={`${
				isActive !== 'create' && 'hidden'
			} overflow-y-auto flex flex-col py-8 px-2 justify-between h-full dark:text-white/70`}
			style={windowWidth > 768 ? { height: 'calc(100% - 58px)' } : {}}
		>
			<div className='h-full overflow-auto'>
				{!configurationMessages?.length ? (
					<div className='flex gap-1'>
						<div>
							<Avatar author='assistant' />
						</div>
						<div>
							<p className='font-semibold dark:text-white'>GPT Builder</p>
							<p>
								Hi! I'll help you build a new GPT. You can say something like, "make a creative who
								helpps generate visuals for new products" or "make a software engineer who helps
								format my code." <br />
								<br />
								What would your like to make?
							</p>
						</div>
					</div>
				) : (
					<div className='overflow-auto'>
						<MessagesList messages={configurationMessages} />
					</div>
				)}
			</div>

			<form
				className='bg-white dark:bg-[#444654] rounded-large relative'
				onSubmit={(e) => handleSubmit(e, 'configure')}
			>
				<InputWidthButtonComponent value={configureInput} onChange={handleChangeConfigureMessage} />
			</form>
		</div>
	);
};

export default CustomGPTCreateSectionComponent;
