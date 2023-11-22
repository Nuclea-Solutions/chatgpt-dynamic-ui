'use client';
// components
import InputWidthButtonComponent from '@/stories/input_with_button/InputWidthButton.component';
// hooks and store
import useChatCustom from '@/hooks/useChatCustom/useChatCustom';
import useMessagesStore from '@/store/useMessagesStore';
// utils
import { COMPONENTS_REF } from '@/hooks/useChatCustom/utils';
import HelpButtonComponent from '@/stories/help_button/HelpButton.component';

const InputContainer = () => {
	const { input, handleInputChange, handleSubmit, inputType } = useChatCustom();
	const [messages, messagesComponents] = useMessagesStore((state) => [
		state.messages,
		state.messagesComponents
	]);

	const Component = !!messagesComponents.length
		? messagesComponents?.at(-1)?.output
			? COMPONENTS_REF[messagesComponents?.at(-1)?.output?.input_component ?? 'text_input']
					.component
			: !messagesComponents?.at(-1)?.output &&
			  messagesComponents?.at(-1)?.content?.output?.input_component
			? COMPONENTS_REF[messagesComponents?.at(-1)?.content?.output?.input_component ?? 'text_input']
					.component
			: COMPONENTS_REF['text_input'].component
		: COMPONENTS_REF['text_input'].component;

	return (
		<form
			onSubmit={handleSubmit}
			className='w-full lg:mx-auto lg:max-w-2xl xl:max-w-3xl bg-white dark:bg-[#444654] rounded-large relative'
		>
			{!!messagesComponents?.length && Component && (
				<Component onChange={handleInputChange} value={input} />
			)}
			{messages?.every((item) => item.role === 'system') && inputType === 'text_input' && (
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
