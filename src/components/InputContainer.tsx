'use client';
// components
import InputWidthButtonComponent from '@/stories/input_with_button/InputWidthButton.component';
// hooks and store
import useChatCustom from '@/hooks/useChatCustom/useChatCustom';
import useMessagesStore from '@/store/useMessagesStore';
// utils
import { COMPONENTS_REF } from '@/hooks/useChatCustom/utils';
import DatePickerCustom from '@/stories/date_picker/DatePicker';

const InputContainer = () => {
	const { input, handleInputChange, handleSubmit, inputType } = useChatCustom();
	const [messages, messagesComponents] = useMessagesStore((state) => [
		state.messages,
		state.messagesComponents
	]);

	const Component = !!messagesComponents.length
		? messagesComponents?.at(-1)?.output
			? messagesComponents?.at(-1)?.output?.input_component === 'calendar_button'
				? COMPONENTS_REF['text_input'].component
				: COMPONENTS_REF[messagesComponents?.at(-1)?.output?.input_component ?? 'text_input']
			: !messagesComponents?.at(-1)?.output &&
			  messagesComponents?.at(-1)?.content?.output?.input_component
			? COMPONENTS_REF[messagesComponents?.at(-1)?.content?.output?.input_component ?? 'text_input']
					.component
			: COMPONENTS_REF['text_input'].component
		: COMPONENTS_REF['text_input'].component;

	return (
		<form onSubmit={handleSubmit} className='mt-8 px-10 w-full'>
			{!!messagesComponents?.length && Component && (
				<Component onChange={handleInputChange} value={input} />
			)}
			{messages?.every((item) => item.role === 'system') && inputType === 'text_input' && (
				<InputWidthButtonComponent value={input} onChange={handleInputChange} />
			)}

			{/* Footer */}
			<div className='mt-2'>
				<span>
					Free Research Preview. ChatGPT may produce inaccurate information about people, places, or
					facts.
					<span className='underline'>ChatGPT September 25 Version</span>
				</span>
			</div>
		</form>
	);
};

export default InputContainer;
