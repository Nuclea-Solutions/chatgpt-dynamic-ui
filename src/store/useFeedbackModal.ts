import { create } from 'zustand';

interface feedbackModal {
	like: boolean;
	openModal: boolean;
	setOpenModalLike: (value: boolean) => void;
	setOpenModalDislike: (value: boolean) => void;

	setCloseModal: (value: boolean) => void;
}

export const useFeedbackModal = create<feedbackModal>((set) => ({
	like: false,
	openModal: false,
	setOpenModalLike: () =>
		set(() => ({
			openModal: true,
			like: true
		})),
	setOpenModalDislike: () =>
		set(() => ({
			openModal: true,
			like: false
		})),
	setCloseModal: () =>
		set(() => ({
			openModal: false
		}))
}));
