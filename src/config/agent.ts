import { createOpenAIFunctionsAgent, AgentExecutor } from 'langchain/agents';
import { ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts';
import { chatModel } from './openai';
import { TOOLS } from '@/app/api/chat/functions';

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

export default agent;
