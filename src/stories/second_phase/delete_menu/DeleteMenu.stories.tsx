import type { StoryObj, Meta } from '@storybook/react';
import DeleteMenu from './DeleteMenu.component';
import {
	Canvas,
	ColorItem,
	ColorPalette,
	Description,
	IconGallery,
	IconItem,
	Story,
	Subtitle,
	Title
} from '@storybook/blocks';
import { TbTrash } from 'react-icons/tb';
export default {
	title: 'Main/DeleteMenu',
	component: DeleteMenu,
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
						<li>Color Palette</li>
						<li>Icons</li>
					</ul>
					<Subtitle>
						General Description
						<hr className='my-4' />
					</Subtitle>
					<Description>
						To create this component, you only need to use HTML and Tailwind. This component is
						composed solely of a parent container that contains a trash icon from the React-icons
						library and a text.
					</Description>
					<Canvas />
					<Subtitle>
						Component
						<hr className='my-4' />
					</Subtitle>
					<Description>
						This component does not receive parameters, therefore, the controls section does not
						exist.
					</Description>

					<Subtitle>
						Color Palette
						<hr className='my-4' />
					</Subtitle>
					<ColorPalette>
						<ColorItem title='Background' subtitle='bg-gray-200' colors={{ gray: '#E5E7EB' }} />
						<ColorItem title='Text' subtitle='text-red-500' colors={{ red: '#EF4444' }} />
					</ColorPalette>

					<Subtitle>
						Icons
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='Trash icon'>
							<TbTrash size={24} />
						</IconItem>
					</IconGallery>
				</>
			)
		}
	}
} as Meta<typeof DeleteMenu>;

type Story = StoryObj<typeof DeleteMenu>;

export const Base: Story = {};
