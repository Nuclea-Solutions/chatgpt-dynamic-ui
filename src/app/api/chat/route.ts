import { NextResponse } from 'next/server';
import { ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts';
import { chatModel } from '@/config/openai';
import { createOpenAIFunctionsAgent, AgentExecutor } from 'langchain/agents';
import { TOOLS } from './functions';
import { ChatMessageHistory } from 'langchain/stores/message/in_memory';
import { RunnableWithMessageHistory } from '@langchain/core/runnables';
import { nanoid } from '@/utils/utils';

const messageHistory = new ChatMessageHistory();

export async function POST(req: Request) {
	try {
		const json = await req.json();
		const { message, user_id, session_id } = json;
		let sessionId: string | undefined = session_id;
		console.log({ json });

		const template = ChatPromptTemplate.fromMessages([
			['system', 'You are a helpfull assistant.'],
			['user', '{input}'],
			new MessagesPlaceholder('agent_scratchpad')
		]);

		const agent = await createOpenAIFunctionsAgent({
			llm: chatModel,
			tools: TOOLS,
			prompt: template
		});

		const agentExecutor = new AgentExecutor({
			agent,
			tools: TOOLS
		});

		const agentWithChatHistory = new RunnableWithMessageHistory({
			runnable: agentExecutor,
			// This is needed because in most real world scenarios, a session id is needed per user.
			// It isn't really used here because we are using a simple in memory ChatMessageHistory.
			getMessageHistory: (_sessionId) => messageHistory,
			inputMessagesKey: 'input',
			historyMessagesKey: 'chat_history'
		});

		// TODO: session by conversation or by user session?
		// New conversation
		if (!sessionId) {
			sessionId = nanoid();
		}

		const result5 = await agentWithChatHistory.invoke(
			{
				input: message
			},
			{
				// This is needed because in most real world scenarios, a session id is needed per user.
				// It isn't really used here because we are using a simple in memory ChatMessageHistory.
				configurable: {
					sessionId
				}
			}
		);

		console.log({ result5 });

		return NextResponse.json({
			data: result5.output,
			session_id: sessionId
		});
	} catch (error) {
		console.log({ error });
	}
}
