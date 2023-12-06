import { create } from 'zustand';
import { produce } from 'immer';
import { DEFAULT_NAME, DEFAULT_DESCRIPTION, DEFAULT_INSTRUCTIONS } from '@/config/assistant-config';

interface CustomGTP {
	name: string;
	description: string;
	instructions: string;
	setName: (newName: string) => void;
	setDescription: (newDescription: string) => void;
	setInstructions: (newInstructions: string) => void;
}

const useCustomGPT = create<CustomGTP>((set) => ({
	name: DEFAULT_NAME,
	description: DEFAULT_DESCRIPTION,
	instructions: DEFAULT_INSTRUCTIONS,
	setName: (newName: string) =>
		set((state) =>
			produce(state, (draft) => {
				draft.name = newName;
			})
		),
	setDescription: (newDescription: string) =>
		set((state) =>
			produce(state, (draft) => {
				draft.description = newDescription;
			})
		),
	setInstructions: (newInstructions: string) =>
		set((state) =>
			produce(state, (draft) => {
				draft.instructions = newInstructions;
			})
		)
}));

export default useCustomGPT;
