import {
	Canvas,
	ColorItem,
	ColorPalette,
	Controls,
	Description,
	Story,
	Subtitle,
	Title
} from '@storybook/blocks';
import SwitchButton from './SwitchButton.component';
import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Main/SwitchButton',
	component: SwitchButton,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<Subtitle>
						Index <hr className='my-4' />
					</Subtitle>
					<ul>
						<li>General description</li>
						<li>Active component</li>
						<li>Controls</li>
						<li>Colors palette</li>
					</ul>
					<Subtitle>
						General description
						<hr className='my-4' />
					</Subtitle>

					<Description>
						The 'Switch' component receives two parameters for its proper functioning. The first
						parameter is 'isChecked,' which is a boolean parameter representing the component's
						state, and 'toggleSwitch' is a function parameter responsible for the switch's
						functionality.
					</Description>
					<Canvas>
						<Story of={Inactive} />
					</Canvas>

					<Subtitle>
						Active component
						<hr className='my-4' />
					</Subtitle>

					<Description>
						When the 'Switch' component receives the 'isChecked' parameter as true, the component
						will appear as in the following example.
					</Description>

					<Canvas>
						<Story of={Active} />
					</Canvas>

					<Subtitle>
						Controls
						<hr className='my-4' />
					</Subtitle>
					<Description>
						In the 'Controls' section, it showcases the variables that the component receives for
						customization.
					</Description>
					<Controls />

					<Subtitle>
						Colors palette
						<hr className='my-4' />
					</Subtitle>
					<ColorPalette>
						<ColorItem title='Background' subtitle='bg-white' colors={{ White: '#fff' }} />
						<ColorItem
							title='Background active'
							subtitle='bg-[#10a37f]'
							colors={{ black: '#10a37f' }}
						/>
					</ColorPalette>
				</>
			)
		}
	}
} as Meta<typeof SwitchButton>;

type Story = StoryObj<typeof SwitchButton>;

export const Inactive: Story = {
	args: {
		isChecked: false
	}
};

export const Active: Story = {
	args: {
		isChecked: true
	}
};
