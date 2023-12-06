import { create } from 'zustand';

interface sidebar {
	openSidebar: boolean;
	setOpenSidebar: () => void;
	setHandleToggleSidebar: () => void;
}

export const usesidebar = create<sidebar>((set) => ({
	openSidebar: true,
	setOpenSidebar: () =>
		set(() => ({
			openSidebar: true,
			like: true
		})),

	setHandleToggleSidebar: () =>
		set((state) => ({
			openSidebar: !state.openSidebar
		}))
}));
