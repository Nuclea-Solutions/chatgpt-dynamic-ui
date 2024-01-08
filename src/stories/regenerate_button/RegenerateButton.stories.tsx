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
import RegenerateButton from './RegenerateButton.component';
import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Main/RegenerateButton',
	component: RegenerateButton,
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
						This component can be created with just a parent container 'div.' Inside this container,
						add a button that includes text with an icon.
					</Description>
					<Canvas>
						<Story of={Base} />
					</Canvas>

					<Subtitle>
						Component
						<hr className='my-4' />
					</Subtitle>

					<Description>
						The component consists of two states, 'regenerate' and 'stop regenerate,' as shown in
						the following section.
					</Description>

					<Canvas>
						<Story of={Base} />
						<Story of={Active} />
					</Canvas>

					<Subtitle>
						Controls
						<hr className='my-4' />
					</Subtitle>
					<Description>
						In the controls section, it showcases the variables that the component receives for
						customization.
					</Description>
					<Controls />

					<Subtitle>
						Colors palette
						<hr className='my-4' />
					</Subtitle>
					<ColorPalette>
						<ColorItem title='Text' subtitle='text-gray-600' colors={{ gray: '#4B5563' }} />
						<ColorItem title='Text dark' subtitle='text-white' colors={{ white: '#ffffff' }} />
					</ColorPalette>

					<Subtitle>
						Icons
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='Stop icon'>
							<svg
								stroke='currentColor'
								fill='none'
								strokeWidth='2'
								viewBox='0 0 24 24'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='icon-xs'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<rect x='3' y='3' width='18' height='18' rx='2' ry='2'></rect>
							</svg>
						</IconItem>
						<IconItem name='Regenerate icon'>
							<svg
								stroke='currentColor'
								fill='none'
								strokeWidth='2'
								viewBox='0 0 24 24'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='flex-shrink-0 icon-xs'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<polyline points='1 4 1 10 7 10'></polyline>
								<polyline points='23 20 23 14 17 14'></polyline>
								<path d='M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15'></path>
							</svg>
						</IconItem>
					</IconGallery>
				</>
			)
		}
	}
} as Meta<typeof RegenerateButton>;

type Story = StoryObj<typeof RegenerateButton>;

export const Base: Story = {
	args: {
		isRegenerate: false
	}
};

export const Active: Story = {
	args: {
		isRegenerate: true
	}
};
