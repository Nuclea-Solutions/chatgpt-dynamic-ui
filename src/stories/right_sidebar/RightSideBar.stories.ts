import RightSideBar from './RightSideBar.component';
import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Main/RightSideBar',
	component: RightSideBar,
	tags: ['autodocs'],
	parameters: {
		visualViewport: {
			styles: { height: '100vh' }
		}
	}
} as Meta<typeof RightSideBar>;

type Story = StoryObj<typeof RightSideBar>;

export const Base: Story = {};
