import { MessageRole } from './message';

export type ChatHistoryItem = {
	role: MessageRole;
	content: string;
};
