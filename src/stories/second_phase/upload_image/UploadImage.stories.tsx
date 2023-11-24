import {
	Canvas,
	ColorItem,
	ColorPalette,
	Description,
	IconGallery,
	IconItem,
	Subtitle,
	Title
} from '@storybook/blocks';
import UploadImage from './UploadImage.component';
import type { Meta, StoryObj } from '@storybook/react';
import { FaPlus } from 'react-icons/fa';

export default {
	title: 'Main/UploadImage',
	component: UploadImage,
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
						To create this component, you only need to use HTML and Tailwind. Create a parent
						container that will have the plus icon to add the image and the dropdown menu containing
						options to upload a photo.
					</Description>
					<Canvas />

					<Subtitle>
						Component
						<hr className='my-4' />
					</Subtitle>

					<Description>
						The component does not accept any props as parameters, and as such, it does not include
						controls. Its functionality is self-contained.
					</Description>

					<Canvas />

					<Subtitle>
						Color Palette
						<hr className='my-4' />
					</Subtitle>
					<ColorPalette>
						<ColorItem title='Icon color' subtitle='text-gray-700' colors={{ gray: '#374151' }} />
						<ColorItem
							title='Icon color dark'
							subtitle='text-white'
							colors={{ white: '#ffffff' }}
						/>
						<ColorItem title='Border' subtitle='border-gray-300' colors={{ gray: '#D1D5DB' }} />
						<ColorItem
							title='Menu background'
							subtitle='bg-gray-200'
							colors={{ gray: '#E5E7EB' }}
						/>
						<ColorItem
							title='Menu background dark'
							subtitle='bg-[#202123]'
							colors={{ dark: '#202123' }}
						/>
						<ColorItem
							title='Menu background hover'
							subtitle='bg-gray-200'
							colors={{ gray: '#E5E7EB10' }}
						/>
						<ColorItem
							title='Menu background hover dark'
							subtitle='bg-[#20212310]'
							colors={{ dark: '#20212390' }}
						/>
						<ColorItem
							title='Menu item border'
							subtitle='border-[#9ecdff]'
							colors={{ blue: '#9ecdff' }}
						/>
					</ColorPalette>

					<Subtitle>
						Icons
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='Plus icon'>
							<FaPlus size={30} />
						</IconItem>
					</IconGallery>
				</>
			)
		}
	}
} as Meta<typeof UploadImage>;

type Story = StoryObj<typeof UploadImage>;

export const Base: Story = {};
