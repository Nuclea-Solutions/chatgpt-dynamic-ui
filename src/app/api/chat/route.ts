import { NextResponse } from 'next/server';
import openai, { chatModel } from '@/config/openai';
import { DEFAULT_NAME, DEFAULT_MODEL, DEFAULT_INSTRUCTIONS } from '@/config/assistant-config';
// import { TOOL_FUNCTIONS } from './functions';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { OpenAIAssistantRunnable } from 'langchain/experimental/openai_assistant';
// import { createOpenAIFnRunnable } from "langchain/chains/openai_functions";

const users: {
	[key: string]: {
		run_id?: string;
		thread_id: string;
		assistant_id: string;
	};
} = {};

export async function POST(req: Request) {
	try {
		const json = await req.json();
		const { message, user_id } = json;

		const outputParser = new StringOutputParser();

		const template = ChatPromptTemplate.fromMessages([
			['system', 'You are a helpfull assistant.'],
			['user', '{input}']
		]);
		const llmChain = template.pipe(chatModel).pipe(outputParser);
		await llmChain.invoke({ input: message });

		// Check if the user exists
		if (!users[user_id]) {
			let assistant;
			try {
				assistant = await OpenAIAssistantRunnable.createAssistant({
					name: json?.name ?? DEFAULT_NAME,
					instructions: json?.instructions ?? DEFAULT_INSTRUCTIONS.replace(/\s+/g, ' '),
					// description: json?.description ?? DEFAULT_DESCRIPTION,
					model: DEFAULT_MODEL
				});
				const assistantResponse = await assistant.getAssistant();

				const assistantInvoke = await assistant?.invoke({
					content: message
				});

				users[user_id] = {
					assistant_id: assistantResponse.id,
					// @ts-ignore
					thread_id: assistantInvoke[0]?.thread_id
				};
				console.log(assistantInvoke);
				// @ts-ignore
				return NextResponse.json(assistantInvoke[0]?.content[0].text.value);
			} catch (error) {
				console.log({ error });
				return error;
			}
		} else {
			const { run_id, thread_id, assistant_id } = users[user_id] || {};

			// const outputParser = new JsonOutputFunctionsParser();

			const assistant = new OpenAIAssistantRunnable({
				assistantId: assistant_id
			});
			const assistantInvoke = await assistant?.invoke({
				content: message
			});

			// const assistantResponse = await handleAssitantRun(
			// 	thread_id,
			// 	// @ts-ignore
			// 	assistantInvoke[0]?.run_id,
			// 	assistant_id
			// );
			// @ts-ignore
			return NextResponse.json(assistantInvoke[0]?.content[0].text.value);
		}

		// 5. Handle the run
		// const assistantResponse = await handleAssitantRun(
		// 	thread_id,
		// 	// @ts-ignore
		// 	assistantInvoke[0]?.run_id,
		// 	assistant_id
		// );

		// return NextResponse.json(assistantResponse);
	} catch (error) {
		console.log({ error });
		return error;
	}
}

async function handleAssitantRun(
	thread_id: string,
	run_id: string,
	assistant_id: string
): Promise<any> {
	// let response = await openai.beta.threads.runs.retrieve(thread_id, run_id);

	const assistant = new OpenAIAssistantRunnable({
		assistantId: assistant_id
	});
	console.log({ assistant });
	// const assistantInvoke = await assistant?.invoke({
	// 	content: message
	// });

	// let waitBackoff = 1150;
	// while (response.status === 'queued' || response.status === 'in_progress') {
	// 	await new Promise((resolve) => setTimeout(resolve, waitBackoff));
	// 	waitBackoff += 200;
	// 	// response = await openai.beta.threads.runs.retrieve(thread_id, run_id);
	// 	response = await OpenAIAssistantRunnable.threads.runs.retrieve(thread_id, run_id);
	// }

	// if (
	// 	response.status === 'failed' ||
	// 	response.status === 'cancelled' ||
	// 	response.status === 'cancelling' ||
	// 	response.status === 'expired'
	// ) {
	// 	return 'Ocurrió un error, por favor intenta de nuevo';
	// }

	// if (response.status === 'completed') {
	// 	// send last messgae
	// 	// const threadMessages = await openai.beta.threads.messages.list(thread_id);
	// 	const threadMessages = await OpenAIAssistantRunnable.threads.messages.list(thread_id);

	// 	const lastMessage = threadMessages.data
	// 		.filter((m: any) => m.run_id === run_id && m.role === 'assistant')
	// 		.pop();

	// 	if (lastMessage) {
	// 		// @ts-ignore
	// 		return lastMessage.content[0].text.value;
	// 	} else {
	// 		return 'Ocurrió un error, por favor intenta de nuevo';
	// 	}
	// }

	// TODO: function calling
	// if (response.status === 'requires_action') {
	// 	const functionNames = response.required_action?.submit_tool_outputs.tool_calls;

	// 	if (!functionNames) {
	// 		return 'Ocurrió un error, por favor intenta de nuevo';
	// 	}

	// 	const functionOutputs: {
	// 		tool_call_id: string;
	// 		output: string;
	// 	}[] = [];

	// 	for (const functionName of functionNames!) {
	// 		if (!TOOL_FUNCTIONS[functionName.function.name]) {
	// 			continue;
	// 		}

	// 		const functionResponse = await TOOL_FUNCTIONS[functionName.function.name](
	// 			functionName.function.arguments
	// 		);

	// 		functionOutputs.push({
	// 			tool_call_id: functionName.id,
	// 			output: functionResponse
	// 		});
	// 	}

	// 	const run = await openai.beta.threads.runs.submitToolOutputs(thread_id, run_id, {
	// 		tool_outputs: functionOutputs
	// 	});
	// 	const run = await OpenAIAssistantRunnable.threads.runs.submitToolOutputs(thread_id, run_id, {
	// 		tool_outputs: functionOutputs
	// 	});
	// 	return await handleAssitantRun(thread_id, run.id, assistant_id);
	// }
}
