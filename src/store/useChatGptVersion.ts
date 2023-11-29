import { create } from 'zustand';

interface chatGptVersion {
	publicVersion: boolean;

	setPublicVersion: (value: boolean) => void;
	setPrivateVersion: (value: boolean) => void;
}

export const useChatGptVersion = create<chatGptVersion>((set) => ({
	publicVersion: true,
	setPublicVersion: () =>
		set(() => ({
			publicVersion: true
		})),
	setPrivateVersion: () =>
		set(() => ({
			publicVersion: false
		}))
}));
