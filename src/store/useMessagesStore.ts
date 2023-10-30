import { create } from 'zustand';
import { Message } from 'ai';
import { produce } from 'immer';

interface MessagesStore {
	messages: Message[];
	setNewMessage: (message: Message) => void;
	setMessages: (messages: Message[]) => void;
	messagesComponents: any[];
	setNewMessageComponent: (message: any) => void;
	setMessagesComponents: (messagesComponents: any[]) => void;
}

const useMessagesStore = create<MessagesStore>((set) => ({
	messages: [],
	setNewMessage: (message: Message) =>
		set((state) =>
			produce(state, (draft) => {
				draft.messages.push(message);
			})
		),
	setMessages: (messages: Message[]) =>
		set((state) =>
			produce(state, (draft) => {
				draft.messages = messages;
			})
		),
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
