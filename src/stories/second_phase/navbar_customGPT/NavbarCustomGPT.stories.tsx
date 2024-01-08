import type { StoryObj, Meta } from '@storybook/react';
import NavbarCustomGPT from './NavbarCustomGPT.componentstory';
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
	title: 'Main/NavbarCustomGPT',
	component: NavbarCustomGPT,
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
						This component is composed of a parent container containing three sections. The first
						section includes the image with the title and description, the second section contains
						the status, and the third section contains buttons that perform the actions of editing
						and deleting the card.
					</Description>
					<Canvas />

					<Subtitle>
						Component
						<hr className='my-4' />
					</Subtitle>
					<Description>
						This component receives three parameters, all of type string. The first one takes the
						image path, the second parameter is the title, and the third one is the description.
					</Description>
					<Controls />
					<Subtitle>
						Color Palette
						<hr className='my-4' />
					</Subtitle>
					<ColorPalette>
						<ColorItem
							title='Background hover'
							subtitle='bg-gray-200'
							colors={{ gray: '#E5E7EB' }}
						/>
						<ColorItem
							title='Text second seccion'
							subtitle='text-gray-500'
							colors={{ gray: '#6B7280' }}
						/>
						<ColorItem
							title='Tooltip background'
							subtitle='text-black'
							colors={{ black: '#000' }}
						/>
						<ColorItem title='Tooltip text' subtitle='text-white' colors={{ white: '#fff' }} />
					</ColorPalette>

					<Subtitle>
						Icons
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='Pathlock icon'>
							<RiLockLine />
						</IconItem>
						<IconItem name='Pencil icon'>
							<TbPencil />
						</IconItem>
						<IconItem name='Elipsis icon'>
							<BiDotsHorizontalRounded />
						</IconItem>
						<IconItem name='Trash icon'>
							<TbTrash size={24} />
						</IconItem>
					</IconGallery>
				</>
			)
		}
	}
} as Meta<typeof NavbarCustomGPT>;

type Story = StoryObj<typeof NavbarCustomGPT>;

export const Base: Story = {
	parameters: {
		nextjs: {
			appDirectory: true
		}
	}
};
