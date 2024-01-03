'use client';
import React, { useState, useEffect, ChangeEvent } from 'react';
import { HiOutlineCube } from 'react-icons/hi';
import { PiArrowCounterClockwiseFill } from 'react-icons/pi';
import { MdArrowBackIos } from 'react-icons/md';
import { LuSettings } from 'react-icons/lu';
import { RiShareBoxFill } from 'react-icons/ri';
import { IoChevronDownSharp } from 'react-icons/io5';
import { AiOutlineCheck } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';

// components
import InputWidthButtonComponent from '@/stories/input_with_button/InputWidthButton.component';
import ToggleCustomGPT from '@/stories/second_phase/toggle_customGPT/ToggleCustomGPT.component';
// import Avatar from '@/components/Avatar';
// import UploadImageComponent from '@/stories/second_phase/upload_image/UploadImage.component';
import MessagesList from '@/components/MessagesList';
// store and context
// import useCustomGPT from '@/store/useCustomGPT';
import useMessagesStore from '@/store/useMessagesStore';
import useChatCustom from '@/hooks/useChatCustom/useChatCustom';
import HelpButtonComponent from '@/stories/help_button/HelpButton.component';
import AuthModalComponent from '@/stories/second_phase/authentication_modal/AuthModal.component';
import CustomGPTCreateSectionComponent from '@/stories/second_phase/custom_gpt_create_section/CustomGPTCreateSection.component';
import CustomGPTConfigureSectionComponent from '@/stories/second_phase/custom_gpt_configure_section/CustomGPTConfigureSection.component';
import CustomGPTNewActionSectionComponent from '@/stories/second_phase/custom_gpt_newAction_section/CustomGPTNewActionSection.component';

// interface CheckboxState {
// 	webBrowsing: boolean;
// 	dalleImageGeneration: boolean;
// 	codeInterpreter: boolean;
// }

const schemaExamples = [
	{
		openapi: '3.1.0',
		info: {
			title: 'Get weather data',
			description: 'Retrives current weather data for a location.',
			version: 'v1.0.0'
		},
		servers: [
			{
				url: 'https://weather.example.com'
			}
		],
		paths: {
			'/location': {
				get: {
					description: 'Get temperature for a specific location',
					operationId: 'GetCurrentWeather',
					parameters: [
						{
							name: 'location',
							in: 'query',
							description: 'The city and state to retrieve the weather for',
							required: true,
							schema: {
								type: 'string'
							}
						}
					],
					deprecate: false
				}
			}
		},
		components: {
			schemas: {}
		}
	}
];

const page = () => {
	const [isActive, setIsActive] = useState('create');
	// const [
	// 	name,
	// 	description,
	// 	instructions,
	// 	setName,
	// 	setDescription,
	// 	setInstructions,
	// 	configurationMessages
	// ] = useCustomGPT((state) => [
	// 	state.name,
	// 	state.description,
	// 	state.instructions,
	// 	state.setName,
	// 	state.setDescription,
	// 	state.setInstructions,
	// 	state.configurationMessages
	// ]);
	const { handleSubmit, input, handleInputChange, configureInput, handleChangeConfigureMessage } =
		useChatCustom({
			customGPT: true
		});
	const messages = useMessagesStore((state) => state.messages);

	const handleActiveView = (activeView: string) => {
		setIsActive(activeView);
	};

	// const [windowWidth, setWindowWidth] = useState<number>(0);
	const [previewHovered, setPreviewHovered] = useState(false);

	// const [checkboxes, setCheckboxes] = useState<CheckboxState>({
	// 	webBrowsing: false,
	// 	dalleImageGeneration: false,
	// 	codeInterpreter: false
	// });

	const [examplesDropDow, setExamplesDropdown] = useState(false);
	const [examplesOptions, setExamplesOptions] = useState('');

	const [authTypeOpen, setAuthTypeOpen] = useState(false);
	const [authenticationType, setAuthenticationType] = useState('none');
	const [authType, setAuthType] = useState('basic');
	const [importFromUrl, setImportFromUrl] = useState(false);
	const [schemaValue, setSchemaValue] = useState('');

	// const [inputs, setInputs] = useState([{ id: 'input_1', value: '' }]);

	// const handleInputChanges = (id: any, value: any) => {
	// 	const newInputs = inputs.map((input) => (input.id === id ? { ...input, value } : input));

	// 	if (id === inputs[inputs.length - 1].id) {
	// 		newInputs.push({ id: `input_${inputs.length + 1}`, value: '' });

	// 	}

	// 	setInputs(newInputs);
	// };

	// const handleInputDelete = (id: any) => {
	// 	const newInputs = inputs.filter((input) => input.id !== id);
	// 	setInputs(newInputs);
	// };

	const handleOpenImportFromUrl = () => setImportFromUrl(true);
	const handleCloseImportFromUrl = () => setImportFromUrl(false);

	const handleDeleteAction = () => {
		const confirmation = window.confirm('Are you sure you want to delete this action?');
		if (confirmation) handleActiveView('configure');
	};

	const handleTextareaValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setSchemaValue(e.currentTarget.value);
	};

	const handleAuthTypeModalOpen = () => {
		setAuthTypeOpen((prev) => !prev);
	};

	const handleAuthenticationType = (e: ChangeEvent<HTMLInputElement>) => {
		setAuthenticationType(e.target.value);
	};

	const handleAuthType = (e: ChangeEvent<HTMLInputElement>) => {
		setAuthType(e.target.value);
	};

	const handleExaplesDropdow = () => {
		setExamplesDropdown((prev) => !prev);
	};

	const handleExaplesOptions = (value: string) => {
		setExamplesOptions(value);
	};

	// const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	const { name, checked } = event.target;
	// 	setCheckboxes({
	// 		...checkboxes,
	// 		[name]: checked
	// 	});
	// };

	// useEffect(() => {
	// 	if (typeof window !== 'undefined') {
	// 		setWindowWidth(window.innerWidth);
	// 		const handleResize = () => {
	// 			setWindowWidth(window.innerWidth);
	// 		};

	// 		window.addEventListener('resize', handleResize);

	// 		return () => {
	// 			window.removeEventListener('resize', handleResize);
	// 		};
	// 	}
	// }, []);

	return (
		<div className={`w-full relative dark:bg-[#444654] dark:text-white`}>
			<section
				className={`flex flex-col md:flex-row z-10`}
				style={{ height: 'calc(100vh - 64px)' }}
			>
				<div className={` ${isActive === 'newAction' ? 'hidden' : 'md:hidden'} `}>
					<ToggleCustomGPT handleActiveView={handleActiveView} isActive={isActive} />
				</div>
				<div className={`md:block flex-1 md:border `}>
					<div className={` ${isActive === 'newAction' ? 'hidden' : 'hidden md:block'} `}>
						<ToggleCustomGPT handleActiveView={handleActiveView} isActive={isActive} />
					</div>

					{/* <div
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
					</div> */}
					<CustomGPTCreateSectionComponent isActive={isActive} />

					{/* <div
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
									className='p-2 border rounded-[8px] bg-inherit dark:text-gray-500 dark:border-gray-500'
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
									className='p-2 border rounded-[8px] bg-inherit dark:text-gray-500 dark:border-gray-500'
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
									className='border rounded-[8px] outline-none p-2 bg-inherit dark:text-gray-500 dark:border-gray-500'
									value={instructions}
									onChange={(e) => setInstructions(e.target.value)}
								/>
							</div>

							<div className='flex flex-col gap-1'>
								<label>Conversation starters</label>
								{inputs.map((input) => (
									<div className='w-full  flex' key={input.id}>
										<input
											value={input.value}
											onChange={(e) => handleInputChanges(input.id, e.target.value)}
											type='text'
											id=''
											className='p-2 border rounded-l-[8px] w-full bg-inherit text-gray-500 dark:border-gray-500'
										/>
										<div
											className='inline py-2 px-3 border rounded-r-[8px] border-l-0  dark:border-gray-500 cursor-pointer'
											onClick={() => handleInputDelete(input.id)}
										>
											X
										</div>
									</div>
								))}
							</div>

							<div className='flex flex-col gap-1'>
								<h4>Knowledge</h4>
								<div className='px-4 py-2 rounded-[8px] border w-fit hover:bg-gray-200 dark:border-gray-500'>
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
								<div
									className='px-4 py-2 rounded-[8px] border w-fit hover:bg-gray-200 cursor-pointer dark:border-gray-500'
									onClick={() => handleActiveView('newAction')}
								>
									Create new action
								</div>
							</div>
						</form>
					</div> */}
					<CustomGPTConfigureSectionComponent isActive={isActive} setIsActive={setIsActive} />

					{/* <div className={`${isActive !== 'newAction' && 'hidden'} overflow-auto h-full`}>
						<div className='flex px-4 pt-6 '>
							<div
								className='border rounded-[8px] h-fit px-3 py-3 flex justify-center cursor-pointer dark:border-gray-500'
								onClick={() => handleActiveView('configure')}
							>
								<MdArrowBackIos size={16} />
							</div>
							<div className='flex flex-col items-center w-full'>
								<h2 className='font-bold'>Add actions</h2>
								<p className='text-gray-400 text-sm'>
									Let your GPT information or take actions outside of ChatGPT.
								</p>
								<p className='text-gray-400 text-sm'>Learn more.</p>
							</div>
							<div
								className={`border rounded-[8px] h-fit px-3 py-3 flex justify-center cursor-pointer dark:border-gray-500 ${
									examplesOptions !== 'Examples' && 'hidden'
								}`}
								onClick={handleDeleteAction}
							>
								<FiTrash2 size={16} />
							</div>
						</div>
						<form className='px-6 pt-6 flex flex-col gap-6 pb-4'>
							<div className='flex flex-col gap-1'>
								<label htmlFor='authentication'>Authentication</label>
								<div className='flex cursor-pointer' onClick={handleAuthTypeModalOpen}>
									<div className='p-2 border rounded-l-[8px] w-full outline-none dark:border-gray-500'>
										None
									</div>
									<div className='py-2 px-3 flex items-center justify-center border border-l-0 rounded-r-[8px] dark:border-gray-500'>
										<LuSettings />
									</div>
								</div>
							</div>
							<div className='flex flex-col gap-1'>
								<div className='flex justify-between'>
									<p>Schema</p>
									{!importFromUrl ? (
										<div className='flex gap-4 relative'>
											<div
												className='border rounded-[8px] py-1 px-2 dark:border-gray-500'
												onClick={handleOpenImportFromUrl}
											>
												Import from URL
											</div>
											<div
												className='border rounded-[8px] py-1 px-4 flex gap-6 items-center dark:border-gray-500'
												onClick={handleExaplesDropdow}
											>
												{examplesOptions === '' ? 'Examples' : examplesOptions}{' '}
												<IoChevronDownSharp />
											</div>
											<div
												className={`flex flex-col gap-2 absolute bg-gray-500 text-white z-20 px-4 py-2 -right-4 top-1 rounded-[8px] whitespace-nowrap ${
													!examplesDropDow && 'hidden'
												}`}
											>
												<div
													className='flex gap-2 items-center'
													onClick={() => {
														handleExaplesOptions('Examples'), setExamplesDropdown(false);
													}}
												>
													<div className={`${examplesOptions !== 'Examples' && 'invisible'}`}>
														<AiOutlineCheck />
													</div>
													Examples
												</div>
												<div
													className='flex gap-2 items-center'
													onClick={() => {
														handleExaplesOptions('Wheather'), setExamplesDropdown(false);
													}}
												>
													<div className={`${examplesOptions !== 'Wheather' && 'invisible'}`}>
														<AiOutlineCheck />
													</div>
													Wheather (JSON)
												</div>
												<div
													className={`flex gap-2 items-center`}
													onClick={() => {
														handleExaplesOptions('Pet store'), setExamplesDropdown(false);
													}}
												>
													<div className={`${examplesOptions !== 'Pet store' && 'invisible'}`}>
														<AiOutlineCheck />
													</div>
													Pet Store (YAML)
												</div>
												<div
													className={`flex gap-2 items-center`}
													onClick={() => {
														handleExaplesOptions('blank'), setExamplesDropdown(false);
													}}
												>
													<div className={`${examplesOptions !== 'Blank Template' && 'invisible'}`}>
														<AiOutlineCheck />
													</div>
													Blank Template
												</div>
											</div>
										</div>
									) : (
										<div className='flex gap-2'>
											<input
												type='text'
												name='importURL'
												id=''
												placeholder='https://'
												className='p-2 border rounded-[8px] w-full outline-blue-500 bg-transparent dark:border-gray-500'
											/>
											<div className='border rounded-[8px] py-1 px-2 dark:border-gray-500'>
												Import{' '}
											</div>
											<div
												className='border rounded-[8px] py-1 px-2 dark:border-gray-500'
												onClick={handleCloseImportFromUrl}
											>
												Cancel
											</div>
										</div>
									)}
								</div>
								<div className='relative flex flex-col gap-2'>
									<textarea
										name='schema'
										id=''
										cols={30}
										rows={15}
										className='w-full outline-none border rounded-[8px] p-1 text-sm bg-transparent dark:border-gray-500'
										placeholder='Enter your OpenAPI schema here'
										onChange={handleTextareaValue}
										value={
											examplesOptions === 'Examples'
												? JSON.stringify(schemaExamples[0], null, 2)
												: schemaValue
										}
									></textarea>
									<div className='border rounded-[8px] py-1 px-2 font-bold text-sm w-fit  absolute bottom-2 right-2 dark:border-gray-500 hover:cursor-pointer hover:bg-gray-100'>
										{examplesOptions === '' ? (
											<p className='flex items-center gap-2'>
												Get help from ActionsGPT <RiShareBoxFill size={14} />
											</p>
										) : (
											<p>Format</p>
										)}
									</div>
								</div>

								<table
									className={`w-full  text-gray-200 dark:text-white   ${
										examplesOptions !== 'Examples' && 'hidden'
									}`}
								>
									<thead className='text-xs border-b dark:border-gray-500 text-gray-700 uppercase text-left  dark:text-gray-400'>
										<tr>
											<th scope='col' className='py-3'>
												Name
											</th>
											<th scope='col' className='py-3'>
												Method
											</th>
											<th scope='col' className='py-3'>
												Path
											</th>
											<th scope='col' className='py-3'></th>
										</tr>
									</thead>
									<tbody>
										<tr className='bg-inherit border-b dark:border-gray-500'>
											<td className='py-4'>Get current weather</td>
											<td className='py-4'>GET</td>
											<td className='py-4'>/location</td>
											<td className='py-4'>
												<div className='border rounded-[8px] py-2 px-4 w-fit cursor-pointer hover:bg-gray-100 hover:border-blue-300 dark:border-gray-500'>
													Test
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div>
								<label htmlFor='policy'>Privacy policy</label>
								<input
									type='text'
									name='policy'
									id=''
									placeholder='https://api.example-weather-app.com/privacy'
									className='p-2 border rounded-[8px] w-full outline-none bg-transparent dark:border-gray-500'
								/>
							</div>
						</form>
					</div> */}

					<CustomGPTNewActionSectionComponent
						examplesDropDow={examplesDropDow}
						handleActiveView={handleActiveView}
						handleAuthTypeModalOpen={handleAuthTypeModalOpen}
						handleCloseImportFromUrl={handleCloseImportFromUrl}
						handleDeleteAction={handleDeleteAction}
						handleExaplesDropdow={handleExaplesDropdow}
						handleExaplesOptions={handleExaplesOptions}
						handleOpenImportFromUrl={handleOpenImportFromUrl}
						handleTextareaValue={handleTextareaValue}
						importFromUrl={importFromUrl}
						isActive={isActive}
						schemaValue={schemaValue}
						setExamplesDropdown={setExamplesDropdown}
					/>
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
							<div className='flex justify-center'>
								<div className='bg-white w-fit rounded-full p-1'>
									<HiOutlineCube size={50} />
								</div>
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

			<div
				className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
					!authTypeOpen && 'hidden'
				} `}
			>
				<AuthModalComponent
					authType={authType}
					authenticationType={authenticationType}
					handleAuthType={handleAuthType}
					handleAuthenticationType={handleAuthenticationType}
					handleAuthTypeModalOpen={handleAuthTypeModalOpen}
				/>
			</div>
		</div>
	);
};

export default page;
