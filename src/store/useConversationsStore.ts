import { create } from 'zustand';
import { produce } from 'immer';
import { Message } from '@/types/message';
import { Conversation } from '@/types/conversation';
import { nanoid } from '@/utils/utils';
import { ChatHistoryItem } from '@/types/chat';

interface ConversationsStore {
	conversationList: Conversation[];
	setConversationList: (conversations: Conversation[]) => void;
	setNewMessageToConversation: (message: Message, conversationId: string | null) => void;
	currentConversationId: string | null;
	setCurrentConversationId: (conversationId: string | null) => void;
	sessionId: string | null;
	setSessionId: (sessionId: string | null) => void;
	chatHistory: ChatHistoryItem[] | [];
	setChatHistory: (chatHistory: ChatHistoryItem[] | []) => void;
}

const useConversationsStore = create<ConversationsStore>((set) => ({
	conversationList: [],
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
	currentConversationId: null,
	setCurrentConversationId: (conversationId: string | null) =>
		set((state) =>
			produce(state, (draft) => {
				draft.currentConversationId = conversationId;
				// if (conversationId === null) {
				// 	state.setChatHistory([]);
				// 	state.setSessionId(null);
				// }
			})
		),
	sessionId: null,
	setSessionId: (sessionId: string | null) =>
		set((state) =>
			produce(state, (draft) => {
				draft.sessionId = sessionId;
			})
		),
	chatHistory: [],
	setChatHistory: (chatHistory: ChatHistoryItem[] | []) =>
		set((state) =>
			produce(state, (draft) => {
				draft.chatHistory = chatHistory;
			})
		)
}));

export default useConversationsStore;
