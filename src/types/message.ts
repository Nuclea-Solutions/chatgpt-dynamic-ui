export enum MessageRole {
	USER = 'user',
	ASSISTANT = 'assistant',
	TOOL = 'tool',
	SYSTEM = 'system'
}

export interface Message {
	content: any;
	id?: string;
	author: { role: MessageRole };
	tool_calls?: { name: string; arguments: string };
}
