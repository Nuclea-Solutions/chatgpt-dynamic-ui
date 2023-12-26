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
import SettingsModal from './SettingsModal.component';
import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Main/SettingsModal',
	component: SettingsModal,
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
						This modal-style component focuses on page settings. The component has two sections. The
						first one is Theme, which is used to switch between light mode and dark mode and clear
						all chats. In the second section, we have 'Data Control,' which is used for sharing
						links, exporting conversation data, and deleting the account.
					</Description>
					<Canvas>
						<Story />
					</Canvas>

					<Subtitle>
						Component <hr className='my-4' />
					</Subtitle>

					<Description>
						The component does not receive parameters, so it does not have a controls section. This
						component functions with a useState that captures the selected tab and conditionally
						displays the content of the tab that the user selects.
					</Description>

					<Canvas>
						<Story />
					</Canvas>

					<Subtitle>
						Colors palette
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
							title='Background tab selected'
							subtitle='bg-gray-100'
							colors={{ gray: '#F3F4F6' }}
						/>
						<ColorItem
							title='Background tab selected dark'
							subtitle='bg-gray-800/30'
							colors={{ gray: '#1F2937' }}
						/>

						<ColorItem title='Text' subtitle='text-gray-700' colors={{ gray: '#374151' }} />
						<ColorItem title='Text dark' subtitle='text-gray-200' colors={{ gray: '#E5E7EB' }} />
						<ColorItem title='Border' subtitle='border-black/10' colors={{ White: '#00000010' }} />
						<ColorItem
							title='Border dark'
							subtitle='border-white/10'
							colors={{ White: '#ffffff10' }}
						/>
						<ColorItem
							title='Buttons delete and clear'
							subtitle='bg-red-600'
							colors={{ red: '#DC2626' }}
						/>
						<ColorItem
							title='Buttons delete and clear hover'
							subtitle='bg-[#b91c1c]'
							colors={{ red: '#b91c1c' }}
						/>
					</ColorPalette>

					<Subtitle>
						Icons
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='Settings icon'>
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth='0'
								viewBox='0 0 20 20'
								className='h-5 w-5 fill-gray-800 group-radix-state-active:fill-white dark:fill-gray-500'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fill-rule='evenodd'
									d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
									clip-rule='evenodd'
								></path>
							</svg>
						</IconItem>
						<IconItem name='data icon'>
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth='0'
								viewBox='0 0 20 20'
								className='h-5 w-5 fill-gray-800 group-radix-state-active:fill-white dark:fill-gray-500'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z'></path>
								<path d='M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z'></path>
								<path d='M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z'></path>
							</svg>
						</IconItem>
					</IconGallery>
				</>
			)
		}
	}
} as Meta<typeof SettingsModal>;

type Story = StoryObj<typeof SettingsModal>;

export const Base: Story = {};
