'use client';
import DatePicker from '@/stories/date_picker/DatePicker';
import SelectComponent from '@/stories/select/Select';
import InputWidthButtonComponent from '@/stories/input_with_button/InputWidthButton.component';

/*
Components object with the available components to pick for the assistant
 */
export const COMPONENTS_REF: {
	[key: string]: {
		name: string;
		component: any;
		description: string;
		type: 'input_component' | 'component';
	};
} = {
	select_input: {
		name: 'select_input',
		type: 'input_component',
		component: SelectComponent,
		description:
			'To enter an option. Useful when the user has to choose between several preset options. For example, a country.'
	},
	date_picker: {
		name: 'date_picker',
		type: 'input_component',
		component: DatePicker,
		description: 'To input a date. Usefull when the user has to enter a date.'
	},
	text_input: {
		name: 'text_input',
		type: 'input_component',
		component: InputWidthButtonComponent,
		description: 'To input text. Usefull when the user has to enter text.'
	}
};
