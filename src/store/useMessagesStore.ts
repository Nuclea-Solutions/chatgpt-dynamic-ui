import { create } from 'zustand';
import { produce } from 'immer';
import { Message } from '@/types/message';

interface MessagesStore {
	messages: Message[] | null;
	setNewMessage: (message: Message) => void;
	setMessages: (messages: Message[] | null) => void;
	messagesComponents: any[];
	setNewMessageComponent: (message: any) => void;
	setMessagesComponents: (messagesComponents: any[]) => void;
}

const useMessagesStore = create<MessagesStore>((set) => ({
	messages: [],
	setNewMessage: (message: Message) =>
		set((state) =>
			produce(state, (draft) => {
				draft.messages?.push(message);
			})
		),
	setMessages: (messages: Message[] | null) => {
		set((state) =>
			produce(state, (draft) => {
				draft.messages = messages;
			})
		);
	},
	messagesComponents: [],
	setNewMessageComponent: (message: Message) =>
		set((state) =>
			produce(state, (draft) => {
				draft.messagesComponents = [...draft.messagesComponents, message];
			})
		),
	setMessagesComponents: (messagesComponents: any[]) =>
		set((state) =>
			produce(state, (draft) => {
				draft.messagesComponents = messagesComponents;
			})
		)
}));

export default useMessagesStore;
