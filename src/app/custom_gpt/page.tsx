'use client';
// libraries
import React, { useState, useEffect } from 'react';
import { HiOutlineCube } from 'react-icons/hi';
import { PiArrowCounterClockwiseFill } from 'react-icons/pi';
// components
import InputWidthButtonComponent from '@/stories/input_with_button/InputWidthButton.component';
import ToggleCustomGPT from '@/stories/second_phase/toggle_customGPT/ToggleCustomGPT.component';
import Avatar from '@/components/Avatar';
import UploadImageComponent from '@/stories/second_phase/upload_image/UploadImage.component';
import MessagesList from '@/components/MessagesList';
// store and context
import useCustomGPT from '@/store/useCustomGPT';
import useMessagesStore from '@/store/useMessagesStore';
import useChatCustom from '@/hooks/useChatCustom/useChatCustom';
import HelpButtonComponent from '@/stories/help_button/HelpButton.component';

interface CheckboxState {
	webBrowsing: boolean;
	dalleImageGeneration: boolean;
	codeInterpreter: boolean;
}

const page = () => {
	const [isActive, setIsActive] = useState('create');
	const [
		name,
		description,
		instructions,
		setName,
		setDescription,
		setInstructions,
		configurationMessages
	] = useCustomGPT((state) => [
		state.name,
		state.description,
		state.instructions,
		state.setName,
		state.setDescription,
		state.setInstructions,
		state.configurationMessages
	]);
	const { handleSubmit, input, handleInputChange, configureInput, handleChangeConfigureMessage } =
		useChatCustom({
			customGPT: true
		});
	const messages = useMessagesStore((state) => state.messages);

	const handleActiveView = (activeView: string) => {
		setIsActive(activeView);
	};

	const [windowWidth, setWindowWidth] = useState<number>(0);
	const [previewHovered, setPreviewHovered] = useState(false);

	const [checkboxes, setCheckboxes] = useState<CheckboxState>({
		webBrowsing: false,
		dalleImageGeneration: false,
		codeInterpreter: false
	});

	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, checked } = event.target;
		setCheckboxes({
			...checkboxes,
			[name]: checked
		});
	};

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
		<div className=' w-full relative'>
			<section
				className={`flex flex-col md:flex-row z-10`}
				style={{ height: 'calc(100vh - 64px)' }}
			>
				<div className='md:hidden'>
					<ToggleCustomGPT handleActiveView={handleActiveView} isActive={isActive} />
				</div>
				<div className={`md:block flex-1 md:border ${isActive === 'preview' && 'hidden'}`}>
					<div className='hidden md:block'>
						<ToggleCustomGPT handleActiveView={handleActiveView} isActive={isActive} />
					</div>

					<div
						className={`${
							isActive !== 'create' && 'hidden'
						} overflow-y-auto flex flex-col py-8 px-2 justify-between h-full`}
						style={windowWidth > 768 ? { height: 'calc(100% - 58px)' } : {}}
					>
						<div className='h-full overflow-auto'>
							{!configurationMessages?.length ? (
								<div className='flex gap-1'>
									<div>
										<Avatar author='assistant' />
									</div>
									<div>
										<p className='font-semibold'>GPT Builder</p>
										<p>
											Hi! I'll help you build a new GPT. You can say something like, "make a
											creative who helpps generate visuals for new products" or "make a software
											engineer who helps format my code." <br />
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
							<InputWidthButtonComponent
								value={configureInput}
								onChange={handleChangeConfigureMessage}
							/>
						</form>
					</div>

					<div
						className={`${isActive !== 'configure' && 'hidden'} py-3 px-2 overflow-auto`}
						style={{ height: 'calc(100% - 58px)' }}
					>
						<div>
							<UploadImageComponent />
						</div>
						<form className='flex flex-col gap-8'>
							<div className='flex flex-col gap-1'>
								<label htmlFor='name'>Name</label>
								<input
									type='text'
									name='name'
									id=''
									placeholder='Name your GPT'
									className='p-2 border rounded-[8px]'
									value={name}
									onChange={(e) => setName(e.target.value)}
								/>
							</div>

							<div className='flex flex-col gap-1'>
								<label htmlFor='description'>Description</label>
								<input
									type='text'
									name='description'
									id=''
									placeholder='Add a shor description about what this GPT does'
									className='p-2 border rounded-[8px]'
									value={description}
									onChange={(e) => setDescription(e.target.value)}
								/>
							</div>

							<div className='flex flex-col gap-1'>
								<label htmlFor='instructions'>Instructions</label>
								<textarea
									placeholder='What does this GPT do? How does it behave? What should it avoid doing?'
									rows={4} // Número de filas que se muestran
									cols={50} // Número de columnas que se muestran
									style={{ resize: 'vertical' }} // Permite redimensionar verticalmente
									className='border rounded-[8px] outline-none p-2'
									value={instructions}
									onChange={(e) => setInstructions(e.target.value)}
								/>
							</div>

							<div className='flex flex-col gap-1'>
								<label htmlFor='conversationStarter'>Conversation starters</label>
								<div className='w-full  flex'>
									<input
										type='text'
										name='conversationStarter'
										id=''
										className='p-2 border rounded-l-[8px] w-full'
									/>
									<div className='inline py-2 px-3 border rounded-r-[8px] border-l-none'>X</div>
								</div>
							</div>

							<div className='flex flex-col gap-1'>
								<h4>Knowledge</h4>
								<div className='px-4 py-2 rounded-[8px] border w-fit hover:bg-gray-200'>
									Upload files
								</div>
							</div>

							<div className='flex flex-col gap-1'>
								<h4>Compatibilities</h4>
								<div className='flex flex-col gap-2'>
									<div>
										<input
											type='checkbox'
											name='webBrowsing'
											checked={checkboxes.webBrowsing}
											onChange={handleCheckboxChange}
										/>
										<label className='ml-2'>Web Browsing</label>
									</div>

									<div>
										<input
											type='checkbox'
											name='dalleImageGeneration'
											checked={checkboxes.dalleImageGeneration}
											onChange={handleCheckboxChange}
										/>
										<label className='ml-2'>DALL E Image Generation</label>
									</div>

									<div>
										<input
											type='checkbox'
											name='codeInterpreter'
											checked={checkboxes.codeInterpreter}
											onChange={handleCheckboxChange}
										/>
										<label className='ml-2'>Code Interpreter</label>
									</div>
								</div>
							</div>

							<div className='flex flex-col gap-1'>
								<h4>Actions</h4>
								<div className='px-4 py-2 rounded-[8px] border w-fit hover:bg-gray-200'>
									Create new action
								</div>
							</div>
						</form>
					</div>
				</div>

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
							<div className='flex justify-center '>
								<HiOutlineCube size={50} />
							</div>
						) : (
							<div className='h-full overflow-auto'>
								<MessagesList messages={messages} />
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
			</section>
			<div className='fixed bottom-2 right-4'>
				<HelpButtonComponent />
			</div>
		</div>
	);
};

export default page;
