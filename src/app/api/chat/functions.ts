// @ts-ignorets-
import DynamicTools from '@/utils/dynamic';

const customTool = new DynamicTools.DynamicTool({
	name: 'get_word_length',
	description: 'Returns the length of a word.',
	func: async (input: string) => input.length.toString()
});

/** Define your list of tools. */
export const TOOLS = [customTool];

const FUNCTION_NAMES = {
	getUserPhoneNumber: 'getUserPhoneNumber',
	reactToThankYou: 'reactToTankYou'
};

export const CHATGPT_FUNCTIONS = [
	{
		name: FUNCTION_NAMES.reactToThankYou,
		description: 'Call this function when the user says "thank you"',
		parameters: {
			type: 'object',
			properties: {
				message: {
					type: 'string',
					description: 'the last message sent by the user'
				}
			},
			required: ['message']
		}
	},
	{
		name: FUNCTION_NAMES.getUserPhoneNumber,
		description: 'Call this function when the user ask for some contact',
		parameters: {
			type: 'object',
			properties: {
				name: {
					type: 'string',
					description: 'the name of the contact'
				}
			}
		}
	}
];

export const TOOL_FUNCTIONS: {
	[key: string]: (params: string) => Promise<string>;
} = {};
