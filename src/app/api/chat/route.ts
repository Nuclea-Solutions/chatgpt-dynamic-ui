import { NextResponse } from 'next/server';
import { ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts';
import { chatModel } from '@/config/openai';
import { AgentExecutor } from 'langchain/agents';
import { TOOLS } from './functions';
// import { ChatMessageHistory } from 'langchain/stores/message/in_memory';
import { nanoid } from '@/utils/utils';
import { RunnableSequence } from '@langchain/core/runnables';
import { formatToOpenAIFunctionMessages } from 'langchain/agents/format_scratchpad';
import { OpenAIFunctionsAgentOutputParser } from 'langchain/agents/openai/output_parser';
import { convertToOpenAIFunction } from '@langchain/core/utils/function_calling';
import { HumanMessage, AIMessage } from '@langchain/core/messages';

const MEMORY_KEY = 'chat_history';

const memoryPrompt = ChatPromptTemplate.fromMessages([
	['system', 'You are very powerful assistant.'],
	new MessagesPlaceholder(MEMORY_KEY),
	//['human', '{input}']
	['user', '{input}'],
	new MessagesPlaceholder('agent_scratchpad')
]);

const modelWithFunctions = chatModel.bind({
	functions: TOOLS.map((tool) => convertToOpenAIFunction(tool))
});

const agent = RunnableSequence.from([
	{
		input: (i) => i.input,
		agent_scratchpad: (i) => formatToOpenAIFunctionMessages(i.steps),
		chat_history: (i) => i.chat_history
	},
	memoryPrompt,
	modelWithFunctions,
	new OpenAIFunctionsAgentOutputParser()
]);

const agentExecutor = new AgentExecutor({
	agent,
	tools: TOOLS
});

export async function POST(req: Request) {
	try {
		const json = await req.json();
		const { message, user_id, session_id, chat_history } = json;
		let sessionId: string | undefined = session_id;
		console.log({ json });

		const chatHistory: { role: 'user' | 'assistant'; content: string }[] = chat_history ?? [];

		// // New conversation
		if (!sessionId) {
			sessionId = nanoid();
		}

		const agentExecutor = AgentExecutor.fromAgentAndTools({
			agent,
			tools: TOOLS,
			verbose: true
		});

		const formattedHistory = chatHistory?.map((item) =>
			item.role === 'assistant' ? new AIMessage(item.content) : new HumanMessage(item.content)
		);

		const result5 = await agentExecutor.invoke(
			{
				input: message,
				chat_history: formattedHistory
			},
			{
				// This is needed because in most real world scenarios, a session id is needed per user.
				// It isn't really used here because we are using a simple in memory ChatMessageHistory.
				configurable: {
					sessionId
				}
			}
		);

		// new HumanMessage({ role: 'user', content: message, additional_kwargs: {} })
		chatHistory.push({ role: 'user', content: message });
		chatHistory.push({ role: 'assistant', content: result5.output });

		// console.log({ result5 });

		return NextResponse.json({
			data: result5.output,
			// data: `respuesta a ${message}, con sessionId: ${sessionId}`,
			session_id: sessionId,
			chat_history: chatHistory
		});
	} catch (error) {
		console.log({ error });
	}
}
