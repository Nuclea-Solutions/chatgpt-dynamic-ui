import { create } from 'zustand';
import { produce } from 'immer';
import { Message } from '@/types/message';

interface MessagesStore {
	messages: Message[];
	setNewMessage: (message: Message) => void;
	setMessages: (messages: Message[]) => void;
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
		)
}));

export default useMessagesStore;
