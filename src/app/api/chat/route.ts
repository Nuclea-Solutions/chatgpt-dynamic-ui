import { NextResponse } from 'next/server';
import openai from '@/config/openai';
import { TOOL_FUNCTIONS } from './functions';

const users: {
	[key: string]: {
		run_id?: string;
		thread_id: string;
		assistant_id: string;
	};
} = {};

const instructions = `

`;

export async function POST(req: Request) {
	try {
		const json = await req.json();
		const { message, user_id } = json;

		// Check if the user exists
		if (!users[user_id]) {
			try {
				const assistant = await openai.beta.assistants.create({
					name: 'Chat Dynamic UI Assitant',
					instructions: instructions.replace(/\s+/g, ' '),
					description: 'Chat Dynamic UI Assitant',
					model: 'gpt-4-1106-preview'
				});
				const emptyThread = await openai.beta.threads.create({});

				users[user_id] = {
					assistant_id: assistant.id,
					thread_id: emptyThread.id
				};
			} catch (error) {
				console.log({ error });
				return error;
			}
		}

		const { run_id, thread_id, assistant_id } = users[user_id] || {};

		// Continue the assistant
		if (run_id) {
			const firstRunCheck = await openai.beta.threads.runs.retrieve(thread_id, run_id);

			if (firstRunCheck.status === 'in_progress') {
				return NextResponse.json('ok');
			}
		}

		// else no run we can continue
		await openai.beta.threads.messages.create(thread_id, {
			role: 'user',
			content: message
		});

		const run = await openai.beta.threads.runs.create(thread_id, {
			assistant_id: assistant_id
		});
		users[user_id].run_id = run.id;

		// 5. Handle the run
		const assistantResponse = await handleAssitantRun(thread_id, run.id);

		return NextResponse.json(assistantResponse);
	} catch (error) {
		console.log({ error });
		return error;
	}
}

async function handleAssitantRun(thread_id: string, run_id: string): Promise<any> {
	let response = await openai.beta.threads.runs.retrieve(thread_id, run_id);

	let waitBackoff = 1150;
	while (response.status === 'queued' || response.status === 'in_progress') {
		await new Promise((resolve) => setTimeout(resolve, waitBackoff));
		waitBackoff += 200;
		response = await openai.beta.threads.runs.retrieve(thread_id, run_id);
	}

	if (
		response.status === 'failed' ||
		response.status === 'cancelled' ||
		response.status === 'cancelling' ||
		response.status === 'expired'
	) {
		return 'Ocurrió un error, por favor intenta de nuevo';
	}

	if (response.status === 'completed') {
		// send last messgae
		const threadMessages = await openai.beta.threads.messages.list(thread_id);

		const lastMessage = threadMessages.data
			.filter((m) => m.run_id === run_id && m.role === 'assistant')
			.pop();

		if (lastMessage) {
			// @ts-ignore
			return lastMessage.content[0].text.value;
		} else {
			return 'Ocurrió un error, por favor intenta de nuevo';
		}
	}

	if (response.status === 'requires_action') {
		const functionNames = response.required_action?.submit_tool_outputs.tool_calls;

		if (!functionNames) {
			return 'Ocurrió un error, por favor intenta de nuevo';
		}

		const functionOutputs: {
			tool_call_id: string;
			output: string;
		}[] = [];

		for (const functionName of functionNames!) {
			if (!TOOL_FUNCTIONS[functionName.function.name]) {
				continue;
			}

			const functionResponse = await TOOL_FUNCTIONS[functionName.function.name](
				functionName.function.arguments
			);

			functionOutputs.push({
				tool_call_id: functionName.id,
				output: functionResponse
			});
		}

		const run = await openai.beta.threads.runs.submitToolOutputs(thread_id, run_id, {
			tool_outputs: functionOutputs
		});
		return await handleAssitantRun(thread_id, run.id);
	}
}
