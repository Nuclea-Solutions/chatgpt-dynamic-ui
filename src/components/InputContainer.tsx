'use client';
// components
import InputWidthButtonComponent from '@/stories/input_with_button/InputWidthButton.component';
// hooks and store
import useChatCustom from '@/hooks/useChatCustom/useChatCustom';
import { useChatGptVersion } from '@/store/useChatGptVersion';

const InputContainer = () => {
	const { input, handleInputChange, handleSubmit } = useChatCustom();
	const publicVersion = useChatGptVersion((state) => state.publicVersion);
	return (
		<form
			onSubmit={handleSubmit}
			className='w-full lg:mx-auto lg:max-w-2xl xl:max-w-3xl bg-white dark:bg-[#444654] rounded-large relative'
		>
			<InputWidthButtonComponent value={input} onChange={handleInputChange} />

			{/* Footer */}
			<div className='mt-2 text-center text-sm'>
				{publicVersion ? (
					<span>Nuclea puede cometer errores. Considera checar la información.</span>
				) : (
					<span>ChatGPT can make mistakes. Consider checking important information.</span>
				)}
			</div>
		</form>
	);
};

export default InputContainer;
