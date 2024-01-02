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
import CustomInstructions from './CustomInstructions.component';
import type { Meta, StoryObj } from '@storybook/react';
import SwitchComponent from '../switch_button/SwitchButton.component';

export default {
	title: 'Main/CustomInstructionsModal',
	component: CustomInstructions,
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
						<li>Reusable components</li>
						<li>Controls</li>
						<li>Color Palette</li>
						<li>Icons</li>
					</ul>
					<Subtitle>
						General Description
						<hr className='my-4' />
					</Subtitle>

					<Description>
						Is it possible to create this modal-type component using a parent div that wraps all the
						necessary elements that should be included in this modal component, using the "position:
						relative" property and "left-1/2" to center the modal, in addition to the parameter that
						will control the function to show or hide the modal.
					</Description>
					<Canvas>
						<div className='flex gap-2 justify-center '>
							<Story />
						</div>
					</Canvas>

					<Subtitle>
						Reusable components <hr className='my-4' />
					</Subtitle>

					<Description>
						The switch component is a reusable component that receives two parameters, isChecked and
						a function that changes the state of isChecked, and that's how the active and inactive
						states are toggled.
					</Description>

					<Canvas>
						<SwitchComponent isChecked={false} toggleSwitch={() => {}} />
					</Canvas>
					<Canvas>
						<SwitchComponent isChecked={true} toggleSwitch={() => {}} />
					</Canvas>

					<Subtitle>
						Controls
						<hr className='my-4' />
					</Subtitle>
					<Description>
						In the controls section, it shows the variables that the component receives for its
						customization
					</Description>
					<Controls />

					<Subtitle>
						Color Palette
						<hr className='my-4' />
					</Subtitle>
					<ColorPalette>
						<ColorItem title='background light' subtitle='bg-white' colors={{ White: '#fff' }} />
						<ColorItem
							title='background dark'
							subtitle='bg-gray-800'
							colors={{ gray: '#1f2937' }}
						/>
						<ColorItem title='borders' subtitle='border light' colors={{ gray: '#d1d5db' }} />
						<ColorItem title='borders dark' subtitle='border-white' colors={{ White: '#fff' }} />
						<ColorItem title='cancel button' subtitle='bg-gray-500 ' colors={{ gray: '#6B7280' }} />
						<ColorItem title='inactive save button' subtitle='' colors={{ green: '#10a37f50' }} />
						<ColorItem title='active save button' subtitle='' colors={{ green: '#10a37f' }} />
					</ColorPalette>

					<Subtitle>
						Icons
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='Information icon'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 18 18'
								fill='none'
								className='h-6 w-6 flex-shrink-0 text-gray-500'
							>
								<path
									d='M8.4375 8.4375L8.46825 8.4225C8.56442 8.37445 8.67235 8.35497 8.77925 8.36637C8.88615 8.37776 8.98755 8.41955 9.07143 8.48678C9.15532 8.55402 9.21818 8.64388 9.25257 8.74574C9.28697 8.8476 9.29145 8.95717 9.2655 9.0615L8.7345 11.1885C8.70836 11.2929 8.7127 11.4026 8.74702 11.5045C8.78133 11.6065 8.84418 11.6965 8.9281 11.7639C9.01202 11.8312 9.1135 11.8731 9.2205 11.8845C9.32749 11.8959 9.43551 11.8764 9.53175 11.8282L9.5625 11.8125M15.75 9C15.75 9.88642 15.5754 10.7642 15.2362 11.5831C14.897 12.4021 14.3998 13.1462 13.773 13.773C13.1462 14.3998 12.4021 14.897 11.5831 15.2362C10.7642 15.5754 9.88642 15.75 9 15.75C8.11358 15.75 7.23583 15.5754 6.41689 15.2362C5.59794 14.897 4.85382 14.3998 4.22703 13.773C3.60023 13.1462 3.10303 12.4021 2.76381 11.5831C2.42459 10.7642 2.25 9.88642 2.25 9C2.25 7.20979 2.96116 5.4929 4.22703 4.22703C5.4929 2.96116 7.20979 2.25 9 2.25C10.7902 2.25 12.5071 2.96116 13.773 4.22703C15.0388 5.4929 15.75 7.20979 15.75 9ZM9 6.1875H9.006V6.1935H9V6.1875Z'
									stroke='currentColor'
									strokeWidth='1.5'
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
} as Meta<typeof CustomInstructions>;

type Story = StoryObj<typeof CustomInstructions>;

export const Base: Story = {
	args: {
		customInstructionsShow: true
	}
};
