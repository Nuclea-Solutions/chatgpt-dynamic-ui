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
import FeedbackModal from './FeedbackModal.component';
import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Main/FeedbackModal',
	component: FeedbackModal,
	tags: ['autodocs'],
	parameters: {
		visualViewport: {
			styles: { height: '100vh' }
		},
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
						This modal-style component is designed for leaving comments, featuring an icon, a title,
						an input field for composing comments, and a submit button.
					</Description>
					<Canvas>
						<FeedbackModal like={true} />
					</Canvas>

					<Subtitle>
						Component <hr className='my-4' />
					</Subtitle>

					<Description>
						The component will receive a parameter, isLike, to determine the state of the displayed
						modal. For example, in the following component, it is passed as false to indicate that
						the modal is of the 'dislike' type.
					</Description>

					<Canvas>
						<FeedbackModal like={false} />
					</Canvas>

					<Subtitle>
						Controls
						<hr className='my-4' />
					</Subtitle>
					<Description>
						In the controls section, it displays the variables that the component receives for
						customization
					</Description>
					<Controls />

					<Subtitle>
						Paleta de colores
						<hr className='my-4' />
					</Subtitle>
					<ColorPalette>
						<ColorItem title='Background ' subtitle='bg-white' colors={{ white: '#ffffff' }} />
						<ColorItem
							title='Background dark'
							subtitle='bg-gray-900'
							colors={{ gray: '#111827' }}
						/>
						<ColorItem
							title='Background icon'
							subtitle='bg-green-100'
							colors={{ green: '#DCFCE7' }}
						/>
						<ColorItem title='Like icon' subtitle='bg-green-700' colors={{ green: '#15803D' }} />

						<ColorItem title='Dislike icon' subtitle='bg-red-600' colors={{ red: '#DC2626' }} />
					</ColorPalette>

					<Subtitle>
						Iconos
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='Like icon'>
							<svg
								stroke='currentColor'
								fill='none'
								strokeWidth='2'
								viewBox='0 0 24 24'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='text-green-700 text-2xl'
								aria-hidden='true'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3'></path>
							</svg>
						</IconItem>
						<IconItem name='Dislike icon'>
							<svg
								stroke='currentColor'
								fill='none'
								strokeWidth='2'
								viewBox='0 0 24 24'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='icon-lg text-red-600 text-2xl'
								aria-hidden='true'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17'></path>
							</svg>
						</IconItem>
					</IconGallery>
				</>
			)
		}
	}
} as Meta<typeof FeedbackModal>;

type Story = StoryObj<typeof FeedbackModal>;

export const Base: Story = {};
