'use client';
// components
import InputWidthButtonComponent from '@/stories/input_with_button/InputWidthButton.component';
// hooks and store
import useChatCustom from '@/hooks/useChatCustom/useChatCustom';

const InputContainer = () => {
	const { input, handleInputChange, handleSubmit } = useChatCustom();

	return (
		<form
			onSubmit={handleSubmit}
			className='w-full lg:mx-auto lg:max-w-2xl xl:max-w-3xl bg-white dark:bg-[#444654] rounded-large relative'
		>
			<InputWidthButtonComponent value={input} onChange={handleInputChange} />

			{/* Footer */}
			<div className='mt-2 text-center text-sm'>
				{/* <span>ChatGPT can make mistakes. Consider checking important information.</span> */}
				<span>Gú puede cometer errores. Considera checar la información.</span>
			</div>
			{/* <div className='absolute bottom-2 -right-10 xl:-right-20 z-10'>
				<HelpButtonComponent />
			</div> */}
		</form>
	);
};

export default InputContainer;
