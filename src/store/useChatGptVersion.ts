import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
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

// export const useChatGptVersion = create<chatGptVersion>()(
// 	persist(
// 		(set) => ({
// 			publicVersion: true,
// 			setPublicVersion: () =>
// 				set(() => ({
// 					publicVersion: true
// 				})),
// 			setPrivateVersion: () =>
// 				set(() => ({
// 					publicVersion: false
// 				}))
// 		}),
// 		{ name: 'chatVersion' }
// 	)
// );
