import { create } from 'zustand';
import { produce } from 'immer';
import { Message } from '@/types/message';
import { Conversation } from '@/types/conversation';
import { nanoid } from 'nanoid';

interface ConversationsStore {
	conversationList: Conversation[];
	setConversationList: (conversations: Conversation[]) => void;
	setNewMessageToConversation: (message: Message, conversationId: string) => void;
}

const useConversationsStore = create<ConversationsStore>((set) => ({
	conversationList: [],
	setConversationList: (conversations: Conversation[]) =>
		set((state) =>
			produce(state, (draft) => {
				draft.conversationList = conversations;
			})
		),
	setNewMessageToConversation: (message: Message, conversationId: string) =>
		set((state) =>
			produce(state, (draft) => {
				const converIndex = draft.conversationList.findIndex((item) => item.id === conversationId);
				draft.conversationList[converIndex].mapping[message.id ?? nanoid()] = {
					message: message,
					id: message.id ?? nanoid()
				};
			})
		)
}));

export default useConversationsStore;
