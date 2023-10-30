import FeedbackModal from './FeedbackModal.component';
import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Main/FeedbackModal',
	component: FeedbackModal,
	tags: ['autodocs'],
	parameters: {
		visualViewport: {
			styles: { height: '100vh' }
		}
	}
} as Meta<typeof FeedbackModal>;

type Story = StoryObj<typeof FeedbackModal>;

export const Base: Story = {};
