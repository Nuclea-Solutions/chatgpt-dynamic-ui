import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { functions } from './functions';

const config = new Configuration({
	apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(config);

// IMPORTANT!
export const runtime = 'edge';

export async function POST(req: Request) {
	try {
		const json = await req.json();

		const { messages } = json;
		const response = await openai.createChatCompletion({
			model: 'gpt-4',
			stream: true,
			temperature: 0.1,
			messages,
			functions,
			function_call: { name: 'pick_a_component' }
		});

		// Convert the response into a friendly text-stream
		const stream = OpenAIStream(response, {
			// onStart: async () => {
			// 	// save user message to db
			// },
			// onCompletion: async (completion: any) => {
			// 	// save assistant response to db (exclude responses from function calls)
			// 	// const jsonCompletion = JSON.parse(completion);
			// },
			experimental_onFunctionCall: async (
				{ name, arguments: args },
				createFunctionCallMessages
			) => {
				if (name === 'pick_a_component') {
					// @ts-ignore
					const newMessage = createFunctionCallMessages(args);

					return await openai.createChatCompletion({
						messages: [...messages, ...newMessage],
						stream: true,
						model: 'gpt-4',
						functions
					});
				}
				if (name === 'form_data') {
					// @ts-ignore
					const newMessage = createFunctionCallMessages({
						content: 'null',
						role: 'assistant',
						function_call: {
							name,
							arguments: args
						}
					});

					return await openai.createChatCompletion({
						messages: [...messages, ...newMessage],
						stream: true,
						model: 'gpt-4',
						functions
					});
				}
			}
		});

		// Respond with the stream
		return new StreamingTextResponse(stream);
	} catch (error) {
		return new Error('error');
	}
}
