import { OpenAI } from 'openai';

import { ChatOpenAI } from '@langchain/openai';
import {
	DEFAULT_NAME,
	DEFAULT_DESCRIPTION,
	DEFAULT_MODEL,
	DEFAULT_INSTRUCTIONS
} from '@/config/assistant-config';

const openaiConfig =
	process.env.NODE_ENV === 'production'
		? {
				apiKey: process.env.OPENAI_API_KEY,
				baseURL: 'https://oai.hconeai.com/v1',
				defaultHeaders: {
					'Helicone-Auth': `Bearer ${process.env.HELICONE_API_KEY}`
				}
		  }
		: {
				apiKey: process.env.OPENAI_API_KEY
		  };

// The main difference between this two ways is their input and output schemas
// - The LLM class takes a string as input and outputs a string.
// - The ChatModel class takes a list of messages as input and outputs a message.

const openai = new OpenAI(openaiConfig);

export const chatModel = new ChatOpenAI({
	openAIApiKey: process.env.OPENAI_API_KEY,
	modelName: DEFAULT_MODEL,
	temperature: 0.2,
	maxTokens: 300
});

export default openai;
