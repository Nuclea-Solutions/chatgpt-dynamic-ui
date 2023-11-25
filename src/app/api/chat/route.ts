import { functions } from './functions';
import OpenAI from 'openai';
import { nanoid } from 'nanoid';
import { NextResponse } from 'next/server';
import { Message } from '@/types/message';

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
	baseURL: 'https://oai.hconeai.com/v1',
	defaultHeaders: {
		'Helicone-Auth': 'Bearer sk-irneqji-g2ouqqq-trcvghi-6koxzmy'
	}
});

// // IMPORTANT!
export const runtime = 'edge';

export async function POST(req: Request) {
	try {
		const json = await req.json();
		const { data } = json;

		const messagesToSend = data.messages?.map((item: Message) => ({
			role: item.role,
			content: typeof item.content === 'string' ? item.content : JSON.stringify(item.content)
		}));
		const response = await openai.chat.completions.create({
			// model: 'gpt-4-1106-preview',
			model: 'gpt-4',
			// stream: true,
			temperature: 0.1,
			messages: messagesToSend,
			tools: functions,
			tool_choice: { type: 'function', function: { name: 'pick_a_component' } },
			max_tokens: 500
			// response_format: { type: 'json_object' }
		});

		// Tool message
		if (!!response.choices[0]?.message?.tool_calls?.length) {
			const messageContent = JSON.parse(
				response.choices[0]?.message.tool_calls[0].function.arguments
			);

			const message = {
				role: response.choices[0]?.message.role,
				id: response.choices[0]?.message.tool_calls[0].id,
				content: messageContent
			};
			return NextResponse.json(message);

			// Regular message
		} else if (response.choices[0]?.message.content) {
			const messageContent = JSON.parse(response.choices[0]?.message.content);

			const message = {
				role: response.choices[0]?.message.role,
				id: nanoid(),
				content: messageContent
			};
			return NextResponse.json(message);
		}
	} catch (error) {
		console.error(error);
	}
}
