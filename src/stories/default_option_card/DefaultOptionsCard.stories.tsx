import {
	Canvas,
	ColorItem,
	ColorPalette,
	Controls,
	Description,
	IconGallery,
	IconItem,
	Subtitle,
	Title
} from '@storybook/blocks';
import DefaultOptionCard from './DefaultOptionCard.component';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof DefaultOptionCard>;

export default {
	title: 'Main/DefaulOptionsCard',
	component: DefaultOptionCard,
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
						You can create this card-type component by using a parent container that contains two
						containers. The first container should have the title and description of the card, and
						the second container will hold the icon. To change the color and make the icon appear on
						hover, you need to use the onMouseEnter and onMouseLeave methods in the parent
						component, along with a useEffect to change the component's state.
					</Description>
					<Canvas>
						<div className='flex gap-2 '>
							<DefaultOptionCard title='Tell me a fun fact' content='about the Roman Empire' />
						</div>
					</Canvas>

					<Subtitle>
						Component
						<hr className='my-4' />
					</Subtitle>

					<Description>
						The Default Option component receives two parameters, where the first one is the title
						of the card, and the other parameter is the card description.
					</Description>

					<Canvas>
						<DefaultOptionCard
							title='Design a database schema'
							content='for an online merch store'
						/>
					</Canvas>

					<Subtitle>
						Controls
						<hr className='my-4' />
					</Subtitle>
					<Description>
						In the controls section, it displays the variables that the component receives for its
						customization.
					</Description>
					<Controls />

					<Subtitle>
						Color Palette
						<hr className='my-4' />
					</Subtitle>
					<ColorPalette>
						<ColorItem title='Background light' subtitle='bg-white' colors={{ White: '#fff' }} />
						<ColorItem
							title='Background dark'
							subtitle='bg-slate-700'
							colors={{ gray: '#334155' }}
						/>
						<ColorItem title='Hover' subtitle='bg-gray-100/50' colors={{ gray: '#F3F4F650' }} />
						<ColorItem
							title='Hover dark'
							subtitle='bg-slate-700/50'
							colors={{ White: '#33415550' }}
						/>
						<ColorItem title='Text' subtitle='text-gray-700' colors={{ gray: '#374151' }} />
						<ColorItem title='Text dark' subtitle='text-gray-300' colors={{ gray: '#D1D5DB' }} />
						<ColorItem title='Border' subtitle='border' colors={{ gray: '#d1d5db' }} />
						<ColorItem title='Icon' subtitle='' colors={{ slate700: '#334155' }} />
					</ColorPalette>

					<Subtitle>
						Icons
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='Send icon'>
							<svg
								width='18'
								height='18'
								viewBox='0 0 24 24'
								fill='none'
								className='icon-sm text-token-text-primary'
							>
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
} as Meta<typeof DefaultOptionCard>;

export const Base: Story = {
	args: {
		title: 'Tell me a fun fact',
		content: 'about the Roman Empire'
	}
};
