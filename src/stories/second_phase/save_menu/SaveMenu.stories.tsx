import type { StoryObj, Meta } from '@storybook/react';
import SaveMenu from './SaveMenu.component';
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
import { RiLockLine } from 'react-icons/ri';
import { TbPencil, TbTrash } from 'react-icons/tb';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

export default {
	title: 'Main/SaveMenu',
	component: SaveMenu,
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
						<li>Icons</li>
					</ul>
					<Subtitle>
						General Description
						<hr className='my-4' />
					</Subtitle>
					<Description>
						This component is composed of a parent container containing two sections. The first
						section is an option indicating who can view the publication, consisting of three radio
						buttons with the options: 'Only me', 'Anyone with a link', and 'Public'. Only one option
						can be selected, In the second section, there's a GPT card that is editable, followed by
						a button used to confirm the changes.
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
						<ColorItem title='Card background' subtitle='bg-white' colors={{ white: '#ffffff' }} />
						<ColorItem
							title='Botton background'
							subtitle='bg-green-500'
							colors={{ green: '#22C55E' }}
						/>
					</ColorPalette>

					<Subtitle>
						Icons
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='Pencil icon'>
							<TbPencil />
						</IconItem>
					</IconGallery>
				</>
			)
		}
	}
} as Meta<typeof SaveMenu>;

type Story = StoryObj<typeof SaveMenu>;

export const Base: Story = {};
