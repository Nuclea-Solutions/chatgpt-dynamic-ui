import type { StoryObj, Meta } from '@storybook/react';
import ToggleCustomGPT from './ToggleCustomGPT.component';
import {
	Canvas,
	ColorItem,
	ColorPalette,
	Controls,
	Description,
	IconGallery,
	IconItem,
	Story,
	Subtitle,
	Title
} from '@storybook/blocks';

export default {
	title: 'Main/ToggleCustomGPT',
	component: ToggleCustomGPT,
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
						<li>General Description</li>
						<li>Component</li>
						<li>Controls</li>
						<li>Color Palette</li>
					</ul>
					<Subtitle>
						General Description
						<hr className='my-4' />
					</Subtitle>
					<Description>
						Can this component be created using a parent container component 'div'? Within the
						parent component, two containers are added for the Create and Configure options
						containing text. These containers for the Create and Configure options are conditioned
						with a style that simulates the selected component
					</Description>
					<Canvas />
					<Subtitle>
						Component
						<hr className='my-4' />
					</Subtitle>
					<Description>
						The Toggle component receives a parameter 'isActive' of type string. Its purpose is to
						display a view depending on the selected option. The options to be passed are 'create'
						and 'configure'. Depending on the selected option, the view of either creating or
						configuring will be shown. Below is the component shown in its active states.
					</Description>

					<Subtitle>
						<h4 className='my-4'>Component with active in create</h4>
					</Subtitle>

					<Story of={CreateActive} />

					<Subtitle>
						<h4 className='my-4'>Component with active in configure</h4>
					</Subtitle>

					<Story of={ConfigureActive} />

					<Subtitle>
						Cotrols
						<hr className='my-4' />
					</Subtitle>

					<Controls of={CreateActive} />

					<Subtitle>
						<h4 className='my-4'>Color palette</h4>
					</Subtitle>
					<ColorPalette>
						<ColorItem title='Background' subtitle='bg-gray-200' colors={{ gray: '#E5E7EB' }} />
						<ColorItem
							title='Background dark'
							subtitle='bg-[#545467]'
							colors={{ gray: '#545467' }}
						/>
						<ColorItem title='Text' subtitle='text-gray-600' colors={{ gray: '#4B5563' }} />
						<ColorItem title='Text dark' subtitle='text-white' colors={{ white: '#ffffff' }} />
						<ColorItem
							title='Background active color'
							subtitle='bg-white'
							colors={{ white: '#ffffff' }}
						/>
						<ColorItem
							title='Background active color dark'
							subtitle='bg-[#353541]'
							colors={{ gray: '#353541' }}
						/>
					</ColorPalette>

					<Subtitle>
						Icons
						<hr className='my-4' />
					</Subtitle>
				</>
			)
		}
	}
} as Meta<typeof ToggleCustomGPT>;

type Story = StoryObj<typeof ToggleCustomGPT>;

export const Base: Story = {};
export const CreateActive: Story = {
	args: {
		isActive: 'create'
	}
};
export const ConfigureActive: Story = {
	args: {
		isActive: 'configure'
	}
};
