import { create } from 'zustand';

interface shareLinkToChat {
	openShareLinkToChat: boolean;
	setOpenShareLinkToChat: () => void;
	setCloseShareLinkToChat: () => void;
}

export const useshareLinkToChat = create<shareLinkToChat>((set) => ({
	openShareLinkToChat: false,
	setOpenShareLinkToChat: () =>
		set(() => ({
			openShareLinkToChat: true
		})),
	setCloseShareLinkToChat: () =>
		set(() => ({
			openShareLinkToChat: false
		}))
}));
