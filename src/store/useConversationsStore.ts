import { create } from 'zustand';
import { produce } from 'immer';

interface ConversationsStore {
	conversationList: Conversation[];
	setConversationList: (conversations: Conversation[]) => void;
}

const useConversationsStore = create<ConversationsStore>((set) => ({
	conversationList: [],
	setConversationList: (conversations: Conversation[]) =>
		set((state) =>
			produce(state, (draft) => {
				draft.conversationList = conversations;
			})
		)
}));

export default useConversationsStore;
