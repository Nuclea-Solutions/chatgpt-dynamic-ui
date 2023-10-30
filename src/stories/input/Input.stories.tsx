import { InputComponent } from './Input';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof InputComponent>;

export default {
	title: 'Main/Input',
	component: InputComponent,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered'
	}
} as Meta<typeof InputComponent>;

export const Base: Story = {
	args: {
		type: 'text',
		className:
			'flex h-9 w-full rounded border border-input bg-transparent px-3 py-2 text-sm shadow-xl ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
	}
};

// export const BaseWithBtn: Story = {
//   args: {
//     type: "text",
//     className:
//       "flex h-9 w-full rounded border border-input bg-transparent px-3 py-2 text-sm shadow-xl ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
//     actions: {
//       position: "start",
//       iconButton: "plus",
//     },
//   },
// };

// export const Dark: Story = {
//   args: {
//     type: "text",
//     className:
//       "flex h-9 w-full rounded border border-white text-white border-input bg-transparent px-3 py-2 text-sm shadow-xl ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
//   },
// };
