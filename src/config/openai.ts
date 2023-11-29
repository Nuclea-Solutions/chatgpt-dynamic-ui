import { OpenAI } from 'openai';

const openaiConfig =
	process.env.NODE_ENV === 'development'
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

const openai = new OpenAI(openaiConfig);

export default openai;
