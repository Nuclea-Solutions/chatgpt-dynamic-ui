import React, { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { FiTrash2 } from 'react-icons/fi';
import { IoChevronDownSharp } from 'react-icons/io5';
import { LuSettings } from 'react-icons/lu';
import { MdArrowBackIos } from 'react-icons/md';
import { RiShareBoxFill } from 'react-icons/ri';
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

const CustomGPTNewActionSectionComponent = ({
	isActive,
	handleActiveView,
	handleDeleteAction,
	handleAuthTypeModalOpen,
	importFromUrl,
	handleOpenImportFromUrl,
	handleExaplesDropdow,
	examplesDropDow,
	handleExaplesOptions,
	setExamplesDropdown,
	handleCloseImportFromUrl,
	handleTextareaValue,
	schemaValue,
	examplesOptions
}: {
	isActive: string;
	handleActiveView: (activeView: string) => void;
	handleDeleteAction: () => void;
	handleAuthTypeModalOpen: () => void;
	importFromUrl: boolean;
	handleOpenImportFromUrl: () => void;
	handleExaplesDropdow: () => void;
	examplesDropDow: boolean;
	handleExaplesOptions: (value: string) => void;
	setExamplesDropdown: React.Dispatch<React.SetStateAction<boolean>>;
	handleCloseImportFromUrl: () => void;
	handleTextareaValue: (e: ChangeEvent<HTMLTextAreaElement>) => void;
	schemaValue: string;
	examplesOptions: string;
}) => {
	const [menuVisible, setMenuVisible] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setMenuVisible(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside as any);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside as any);
		};
	}, []);

	const handleDivClick = () => {
		setMenuVisible(!menuVisible);
	};

	return (
		<div className={`${isActive !== 'newAction' && 'hidden'} overflow-auto h-full`}>
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
									className='border rounded-[8px] py-1 px-2 dark:border-gray-500 cursor-pointer'
									onClick={handleOpenImportFromUrl}
								>
									Import from URL
								</div>

								<div
									className='border rounded-[8px] py-1 px-4 flex gap-6 items-center dark:border-gray-500 cursor-pointer'
									onClick={handleDivClick}
								>
									{examplesOptions === '' ? 'Examples' : examplesOptions} <IoChevronDownSharp />
								</div>
								<div
									className={`flex flex-col gap-2 absolute bg-gray-500 text-white z-20 px-4 py-2 -right-4 top-1 rounded-[8px] whitespace-nowrap cursor-pointer ${
										!menuVisible && 'hidden'
									}`}
									ref={menuRef}
								>
									<div
										className='flex gap-2 items-center'
										onClick={() => {
											handleExaplesOptions('Examples'), handleDivClick();
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
											handleExaplesOptions('Wheather'), handleDivClick();
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
											handleExaplesOptions('Pet store'), handleDivClick();
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
											handleExaplesOptions('blank'), handleDivClick();
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
								<div className='border rounded-[8px] py-1 px-2 dark:border-gray-500 cursor-pointer'>
									Import
								</div>
								<div
									className='border rounded-[8px] py-1 px-2 dark:border-gray-500 cursor-pointer'
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
		</div>
	);
};

export default CustomGPTNewActionSectionComponent;
