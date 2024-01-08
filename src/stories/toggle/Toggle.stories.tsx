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
import Toggle from './Toggle.component';
import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Main/Toggle',
	component: Toggle,
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
						<li>Selected component</li>
						<li>Controls</li>
						<li>Colors palette</li>
						<li>Icons</li>
					</ul>
					<Subtitle>
						General description
						<hr className='my-4' />
					</Subtitle>

					<Description>
						Can this component be created using a parent container component 'div'? Within the
						parent component, two containers are added for the GPT-3.5 and GPT-4 options containing
						icons with text. These containers for the GPT-3.5 and GPT-4 options are conditioned with
						a style that simulates the selected component
					</Description>
					<Canvas>
						<Story of={Base} />
					</Canvas>

					<Subtitle>
						Component <hr className='my-4' />
					</Subtitle>

					<Description>
						The Toggle component receives a parameter 'isNewChat' of type boolean. Its purpose is to
						hide the component when the state is false, as this component will only be shown when
						the user selects a new chat. Upon hovering over the component, it will display a modal
						beneath it, and the content will depend on whether the hover is over the GPT-3.5 or
						GPT-4 component.
					</Description>

					<Canvas>
						<Story />
					</Canvas>

					<Subtitle>
						Controls
						<hr className='my-4' />
					</Subtitle>
					<Description>
						In the 'Controls' section, it presents the variables that the component receives for
						customization.
					</Description>
					<Controls />

					<Subtitle>
						Colors palette
						<hr className='my-4' />
					</Subtitle>
					<ColorPalette>
						<ColorItem title='Background' subtitle='bg-white' colors={{ White: '#fff' }} />
						<ColorItem
							title='Background dark'
							subtitle='bg-gray-800'
							colors={{ gray: '#1f2937' }}
						/>
						<ColorItem title='Text' subtitle='text-gray-600' colors={{ gray: '#4B5563' }} />
						<ColorItem title='Text dark' subtitle='text-white' colors={{ White: '#fff' }} />
						<ColorItem
							title='Background selected'
							subtitle='bg-gray-100/50'
							colors={{ gray: '#F3F4F650' }}
						/>
						<ColorItem
							title='Background selected dark'
							subtitle='dark:bg-gray-700/50'
							colors={{ gray: '#37415150' }}
						/>
						<ColorItem title='Border' subtitle='border' colors={{ gray: '#d1d5db' }} />
						<ColorItem
							title='Lightning icon active color'
							subtitle=''
							colors={{ green: '#19c37d' }}
						/>
						<ColorItem
							title='Stars icon selected color'
							subtitle=''
							colors={{ purple: '#AB68FF' }}
						/>
					</ColorPalette>

					<Subtitle>
						Icons
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='Lightning icon'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 16 16'
								fill='none'
								className='icon-sm transition-colors'
								width='1.2rem'
								height='1.2rem'
							>
								<path
									d='M9.586 1.526A.6.6 0 0 0 8.553 1l-6.8 7.6a.6.6 0 0 0 .447 1h5.258l-1.044 4.874A.6.6 0 0 0 7.447 15l6.8-7.6a.6.6 0 0 0-.447-1H8.542l1.044-4.874Z'
									fill={'currentColor'}
								></path>
							</svg>
						</IconItem>
						<IconItem name='Information icon'>
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth='0'
								viewBox='0 0 512 512'
								className='icon-sm toggle-item-button-open ml-0.5 text-gray-600 '
								height='1.2rem'
								width='1.2rem'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'></path>
							</svg>
						</IconItem>
						<IconItem name='Stars icon'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 16 16'
								fill='none'
								className='icon-sm transition-colors group-hover/button:text-brand-purple'
								width='16'
								height='16'
							>
								<path
									d='M12.784 1.442a.8.8 0 0 0-1.569 0l-.191.953a.8.8 0 0 1-.628.628l-.953.19a.8.8 0 0 0 0 1.57l.953.19a.8.8 0 0 1 .628.629l.19.953a.8.8 0 0 0 1.57 0l.19-.953a.8.8 0 0 1 .629-.628l.953-.19a.8.8 0 0 0 0-1.57l-.953-.19a.8.8 0 0 1-.628-.629l-.19-.953h-.002ZM5.559 4.546a.8.8 0 0 0-1.519 0l-.546 1.64a.8.8 0 0 1-.507.507l-1.64.546a.8.8 0 0 0 0 1.519l1.64.547a.8.8 0 0 1 .507.505l.546 1.641a.8.8 0 0 0 1.519 0l.546-1.64a.8.8 0 0 1 .506-.507l1.641-.546a.8.8 0 0 0 0-1.519l-1.64-.546a.8.8 0 0 1-.507-.506L5.56 4.546Zm5.6 6.4a.8.8 0 0 0-1.519 0l-.147.44a.8.8 0 0 1-.505.507l-.441.146a.8.8 0 0 0 0 1.519l.44.146a.8.8 0 0 1 .507.506l.146.441a.8.8 0 0 0 1.519 0l.147-.44a.8.8 0 0 1 .506-.507l.44-.146a.8.8 0 0 0 0-1.519l-.44-.147a.8.8 0 0 1-.507-.505l-.146-.441Z'
									fill={'currentColor'}
								></path>
							</svg>
						</IconItem>
						<IconItem name='Padlock icon'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								aria-hidden='true'
								className='icon-sm transition-colors sm:ml-0 group-hover/options:text-gray-500 !text-gray-500 -ml-2 group-hover/button:text-brand-purple w-5'
							>
								<path
									fillRule='evenodd'
									d='M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z'
									clipRule='evenodd'
								></path>
							</svg>
						</IconItem>
					</IconGallery>
				</>
			)
		}
	}
} as Meta<typeof Toggle>;

type Story = StoryObj<typeof Toggle>;

export const Base: Story = {
	args: {
		isNewChat: true
	}
};
