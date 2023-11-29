const FUNCTION_NAMES = {
	getUserPhoneNumber: 'getUserPhoneNumber',
	reactToTankYou: 'reactToTankYou'
};

export const CHATGPT_FUNCTIONS = [
	{
		name: FUNCTION_NAMES.reactToTankYou,
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
