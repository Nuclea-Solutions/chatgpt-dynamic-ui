import useMessagesStore from '@/store/useMessagesStore';
import React, { useState } from 'react';
import { HiOutlineCube } from 'react-icons/hi';
import { PiArrowCounterClockwiseFill } from 'react-icons/pi';
import MessagesList from '@/components/MessagesList';
import InputWidthButtonComponent from '@/stories/input_with_button/InputWidthButton.component';
import useChatCustom from '@/hooks/useChatCustom/useChatCustom';
const CustomGPTPreviewSectionComponent = ({ isActive }: { isActive: string }) => {
	const [previewHovered, setPreviewHovered] = useState(false);
	const messages = useMessagesStore((state) => state.messages);

	const { handleSubmit, input, handleInputChange, configureInput, handleChangeConfigureMessage } =
		useChatCustom({
			customGPT: true
		});
	return (
		<div
			className={`md:flex flex-col  flex-1 border h-full py-8 px-2 ${
				isActive !== 'preview' && 'hidden'
			}`}
		>
			<div className='flex flex-col justify-between h-full'>
				<h4
					className='flex justify-center items-center gap-2 hover:cursor-pointer'
					onMouseEnter={() => setPreviewHovered(true)}
					onMouseLeave={() => setPreviewHovered(false)}
				>
					<div>Preview</div>
					<div className='w-5 h-5'>
						<div className={`${!previewHovered && 'hidden'}`}>
							<PiArrowCounterClockwiseFill />
						</div>
					</div>
				</h4>

				{!messages?.length ? (
					<div className='flex justify-center'>
						<div className='bg-white w-fit rounded-full p-1'>
							<HiOutlineCube size={50} />
						</div>
					</div>
				) : (
					<div className='h-full overflow-auto'>
						<MessagesList />
					</div>
				)}
				<form
					className='w-full lg:mx-auto lg:max-w-2xl xl:max-w-3xl bg-white dark:bg-[#444654] rounded-large relative'
					onSubmit={(e) => handleSubmit(e, 'chat')}
				>
					<InputWidthButtonComponent value={input} onChange={handleInputChange} />
				</form>
			</div>
		</div>
	);
};

export default CustomGPTPreviewSectionComponent;
