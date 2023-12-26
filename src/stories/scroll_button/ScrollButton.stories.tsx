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
import ScrollButton from './ScrollButton.component';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof ScrollButton>;

export default {
	title: 'Main/ScrollButton',
	component: ScrollButton,
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
						<li>Component</li>
						<li>Controls</li>
						<li>Colors palette</li>
						<li>Icons</li>
					</ul>
					<Subtitle>
						General description
						<hr className='my-4' />
					</Subtitle>

					<Description>
						A 'scroll button' is a component intended for a specific purpose, allowing you to
						navigate to the bottom of your page with a single click, eliminating the need for manual
						scrolling. This component can be created using a button with an embedded icon.
					</Description>
					<Canvas />
					<Subtitle>
						Component <hr className='my-4' />
					</Subtitle>

					<Description>
						The component manages functions to determine the screen's Y-axis position. It
						establishes a condition based on the Y-axis scroll position, and when this condition is
						met, the component becomes visible. Clicking on the component allows you to navigate to
						the bottom of the scroll. As it does not receive parameters, this component does not
						handle controls.
					</Description>
					<Canvas />

					<Subtitle>
						Colors palette
						<hr className='my-4' />
					</Subtitle>
					<ColorPalette>
						<ColorItem title='Background light' subtitle='bg-white' colors={{ White: '#fff' }} />
						<ColorItem
							title='Background dark'
							subtitle='bg-[#444654]'
							colors={{ gray: '#444654' }}
						/>
						<ColorItem title='Border' subtitle='Border-gray-200' colors={{ gray: '#E5E7EB' }} />
						<ColorItem
							title='Border dark'
							subtitle='Border-white/10'
							colors={{ White: '#ffffff10' }}
						/>
						<ColorItem title='Text' subtitle='text-gray-600' colors={{ gray: '#4B5563' }} />
						<ColorItem title='Text dark' subtitle='text-white' colors={{ White: '#fff' }} />
					</ColorPalette>

					<Subtitle>
						Icons
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='Down arrow icon'>
							<svg
								stroke='currentColor'
								fill='none'
								stroke-width='2'
								viewBox='0 0 24 24'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='icon-sm m-1'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<line x1='12' y1='5' x2='12' y2='19'></line>
								<polyline points='19 12 12 19 5 12'></polyline>
							</svg>
						</IconItem>
					</IconGallery>
				</>
			)
		}
	}
} as Meta<typeof ScrollButton>;

export const Base: Story = {};
