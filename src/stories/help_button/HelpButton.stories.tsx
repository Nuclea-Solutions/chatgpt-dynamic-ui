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
import HelpButton from './HelpButton.component';
import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Main/HelpButton',
	component: HelpButton,
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
						To create this component, the Next UI library was used, which is a library of custom
						components. The component used was a Dropdown to display a menu when clicked. The
						component can only customize the Dropdown trigger, which in this case is the round
						button with a question mark. It consists solely of a rounded div with the question mark
						as its children. You can find official documentation for the used component at the
						following link: https://nextui.org/docs/components/dropdown.
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
						<ColorItem title='Background light' subtitle='bg-white' colors={{ White: '#fff' }} />
						<ColorItem title='Background dark' subtitle='' colors={{ gray: '#444654' }} />
						<ColorItem title='Bordes' subtitle='border-gray-300' colors={{ gray: '#D1D5DB' }} />
						<ColorItem title='Text' subtitle='text-gray-500' colors={{ gray: '#6B7280' }} />
						<ColorItem title='Text dark' subtitle='text-gray-200' colors={{ gray: '#E5E7EB' }} />
					</ColorPalette>

					<Subtitle>
						Icons
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='Question icon'>
							<div className='flex items-center justify-center h-6 w-6 p-3 border rounded-full bg-white border-gray-300 text-lg font-semibold text-gray-500 dark:bg-[#444654] dark:text-gray-200 cursor-pointer'>
								?
							</div>
						</IconItem>
						<IconItem name='Redirect icon'>
							<svg
								stroke='currentColor'
								fill='none'
								strokeWidth='2'
								viewBox='0 0 24 24'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='icon-sm'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
								<polyline points='15 3 21 3 21 9'></polyline>
								<line x1='10' y1='14' x2='21' y2='3'></line>
							</svg>
						</IconItem>
						<IconItem name='Grid icon'>
							<svg
								stroke='currentColor'
								fill='none'
								strokeWidth='2'
								viewBox='0 0 24 24'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='icon-sm'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<rect x='3' y='3' width='7' height='7'></rect>
								<rect x='14' y='3' width='7' height='7'></rect>
								<rect x='14' y='14' width='7' height='7'></rect>
								<rect x='3' y='14' width='7' height='7'></rect>
							</svg>
						</IconItem>
					</IconGallery>
				</>
			)
		}
	}
} as Meta<typeof HelpButton>;

type Story = StoryObj<typeof HelpButton>;

export const Base: Story = {};
