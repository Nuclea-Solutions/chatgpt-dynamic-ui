import React, { useState } from 'react';
import UploadImageComponent from '../upload_image/UploadImage.component';
import useCustomGPT from '@/store/useCustomGPT';

interface CheckboxState {
	webBrowsing: boolean;
	dalleImageGeneration: boolean;
	codeInterpreter: boolean;
}
const CustomGPTConfigureSectionComponent = ({
	isActive,
	setIsActive
}: {
	isActive: string;
	setIsActive: React.Dispatch<React.SetStateAction<string>>;
}) => {
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

	const [inputs, setInputs] = useState([{ id: 'input_1', value: '' }]);

	const handleInputChanges = (id: any, value: any) => {
		const newInputs = inputs.map((input) => (input.id === id ? { ...input, value } : input));

		if (id === inputs[inputs.length - 1].id) {
			newInputs.push({ id: `input_${inputs.length + 1}`, value: '' });
			// newInputs.push({ id: uuidv4(), value: '' });
		}

		setInputs(newInputs);
	};

	const handleInputDelete = (id: any) => {
		const newInputs = inputs.filter((input) => input.id !== id);
		setInputs(newInputs);
	};

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

	const handleActiveView = (activeView: string) => {
		setIsActive(activeView);
	};

	return (
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
		</div>
	);
};

export default CustomGPTConfigureSectionComponent;
