import { create } from 'zustand';
import { produce } from 'immer';
import { Message } from '@/types/message';
import { Conversation } from '@/types/conversation';
import { nanoid } from '@/utils/utils';

interface ConversationsStore {
	conversationList: Conversation[];
	setConversationList: (conversations: Conversation[]) => void;
	setNewMessageToConversation: (message: Message, conversationId: string | null) => void;
	currentConversationId: string | null;
	setCurrentConversationId: (conversationId: string | null) => void;
}

const useConversationsStore = create<ConversationsStore>((set) => ({
	conversationList: [],
	currentConversationId: null,
	setConversationList: (conversations: Conversation[]) =>
		set((state) =>
			produce(state, (draft) => {
				draft.conversationList = conversations;
			})
		),
	setNewMessageToConversation: (message: Message, conversationId: string | null) =>
		set((state) =>
			produce(state, (draft) => {
				const converID = conversationId
					? conversationId
					: state.conversationList[state.conversationList.length - 1]?.id;

				draft.conversationList = draft.conversationList.map((item) =>
					item.id === converID
						? {
								...item,
								mapping: {
									...item.mapping,
									[message.id ?? nanoid()]: { message: message, id: message.id ?? nanoid() }
								}
						  }
						: item
				);
			})
		),
	setCurrentConversationId: (conversationId: string | null) =>
		set((state) => ({ currentConversationId: conversationId }))
}));

export default useConversationsStore;
