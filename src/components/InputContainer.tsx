'use client';
// components
import InputWidthButtonComponent from '@/stories/input_with_button/InputWidthButton.component';
// hooks and store
import useChatCustom from '@/hooks/useChatCustom/useChatCustom';
import useMessagesStore from '@/store/useMessagesStore';
// utils
import { COMPONENTS_REF } from '@/hooks/useChatCustom/utils';
import HelpButtonComponent from '@/stories/help_button/HelpButton.component';
import { MessageRole } from '@/types/message';

const InputContainer = () => {
	const { input, handleInputChange, handleSubmit, inputType } = useChatCustom();
	const messages = useMessagesStore((state) => state.messages);

	const Component =
		!!messages?.length && messages?.at(-1)?.content?.output?.input_component
			? COMPONENTS_REF[messages?.at(-1)?.content.output.input_component].component
			: COMPONENTS_REF['text_input'].component;

	return (
		<form
			onSubmit={handleSubmit}
			className='w-full lg:mx-auto lg:max-w-2xl xl:max-w-3xl bg-white dark:bg-[#444654] rounded-large relative'
		>
			{!messages?.every((item) => item.role === 'system') && Component && (
				<Component onChange={handleInputChange} value={input} />
			)}
			{messages?.every((item) => item.role === MessageRole.SYSTEM) &&
				inputType === 'text_input' && (
					<InputWidthButtonComponent value={input} onChange={handleInputChange} />
				)}
			{/* Footer */}
			<div className='mt-2 text-center text-sm'>
				<span>ChatGPT can make mistakes. Consider checking important information.</span>
			</div>
			<div className='absolute bottom-2 -right-10 xl:-right-20 z-10'>
				<HelpButtonComponent />
			</div>
		</form>
	);
};

export default InputContainer;
