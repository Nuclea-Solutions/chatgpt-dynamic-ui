import { ChatCompletionFunctions } from 'openai-edge/types/api';
import { COMPONENTS_REF } from '@/hooks/useChatCustom/utils';

export const functions: ChatCompletionFunctions[] = [
	{
		name: 'pick_a_component',
		description: `
		Following the list of available components that I am going to give you, you must choose the component that you need for the user to enter information. You will choose from the options and return the name of the component chosen for the input_component property.
		You can also choose a component to display data with the message. This is optional.
		In both cases, you have to choose from the list of components based on the description and type of each element, and you will have to return the exact name.The name of the component you return has to be the same as the name it has in the list. If the component is not on the list is because you don't need it. If no special component is needed for the user input, you should choose the text_input.
		This is the list of available components: ${JSON.stringify(COMPONENTS_REF)}.
		If you need to display lists, bolder text, a table, or code, just return text using markdown. 
		Do not use any other format than the one indicated.`,
		parameters: {
			type: 'object',
			properties: {
				output: {
					type: 'object',
					properties: {
						message: {
							type: 'object',
							properties: {
								component: {
									type: 'string',
									description:
										'Optional. The name of the choosen component as it is in the list of available components.'
								},
								content: { type: 'string', description: 'The content of the message.' }
							}
						},
						input_component: {
							type: 'string',
							description:
								'The name of the choosen input component as it is in the list of available components. Default is text_input'
						}
					}
				}
			},
			required: ['output', 'output.message', 'output.input_component']
		}
	},
	{
		name: 'form_data',
		description:
			'To fill the form information about the user, step by step: name; if he/she works in any area of software development, and if so, which one; origin country; date of birth and email. When you finish, show the user the information that he/she provided in a table using markdown.',
		parameters: {
			type: 'object',
			properties: {
				user_data: {
					name: { type: 'text', description: 'User name', input_component: 'text_input' },
					origin: {
						type: 'text',
						description: 'User origin country',
						input_component: 'text_input'
					},
					birthdate: {
						type: 'text',
						description: 'User date of birth',
						input_component: 'date_picker'
					},
					email: { type: 'text', description: 'User email address', input_component: 'text_input' },
					is_developer: {
						type: 'text',
						description: 'If the user works in any area of software development',
						input_component: 'select_input'
					},
					development_area: {
						type: 'text',
						description: 'Software development area in which the user works.',
						input_component: 'select_input'
					}
				}
			}
		}
	}
];
