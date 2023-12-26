import InputWidthButton from './InputWidthButton.component';
import type { Meta, StoryObj } from '@storybook/react';
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
import { GoImage } from 'react-icons/go';
export default {
	title: 'Main/InputWidthButton',
	component: InputWidthButton,
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
						<li>Active component</li>
						<li>Controls</li>
						<li>Color Palette</li>
						<li>Icons</li>
					</ul>
					<Subtitle>
						General Description
						<hr className='my-4' />
					</Subtitle>

					<Description>
						This component can be created using a parent 'div' container. Inside the container, you
						can add two buttons and a text area. The first button contains the image icon, which
						serves as the component for uploading images, and the second button is the send message
						button.
					</Description>
					<Canvas />

					<Subtitle>
						Active component
						<hr className='my-4' />
					</Subtitle>

					<Description>
						The component receives two parameters, 'inputValue' and 'setInputValue,' which it uses
						to change the state of the component. For example, as you type, the button changes to
						green, and the component can expand in height up to 200 pixels. This is achieved by
						using a function to capture the value of the text area and update the state of both the
						button and the text area. The button used is a Next UI library component, and you can
						find the official documentation at the following link:
						https://nextui.org/docs/components/button.
					</Description>

					<Canvas of={Active} />

					<Subtitle>
						Controls
						<hr className='my-4' />
					</Subtitle>
					<Description>
						In the controls section, it showcases the variables that the component receives for
						customization.
					</Description>
					<Controls of={Active} />

					<Subtitle>
						Color Palette
						<hr className='my-4' />
					</Subtitle>
					<ColorPalette>
						<ColorItem title='Background white' subtitle='bg-white' colors={{ white: '#fff' }} />
						<ColorItem
							title='Background dark'
							subtitle='bg-[#444654]'
							colors={{ gray: '#444654' }}
						/>
						<ColorItem title='Text dark' subtitle='text-white' colors={{ White: '#fff' }} />
						<ColorItem title='Button' subtitle='bg-black' colors={{ black: '#000' }} />
						<ColorItem
							title='Button inactive'
							subtitle='bg-black opacity-10'
							colors={{ black: '#00000010' }}
						/>
						<ColorItem title='Button dark' subtitle='bg-white' colors={{ white: '#fff' }} />
						<ColorItem
							title='Button inactive dark'
							subtitle='bg-white opacity-10'
							colors={{ white: '#ffffff10' }}
						/>
						<ColorItem title='Icon' subtitle='text-black' colors={{ black: '#000' }} />
						<ColorItem title='Icon dark' subtitle='text-white' colors={{ white: '#fff' }} />
					</ColorPalette>

					<Subtitle>
						Icons
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='Image icon'>
							<GoImage />
						</IconItem>
						<IconItem name='Send icon'>
							<svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
								<path
									d='M7 11L12 6L17 11M12 18V7'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								></path>
							</svg>
						</IconItem>
					</IconGallery>
				</>
			)
		}
	}
} as Meta<typeof InputWidthButton>;

type Story = StoryObj<typeof InputWidthButton>;

export const Base: Story = {};
export const Active: Story = {
	args: {
		value: 'test'
	}
};
