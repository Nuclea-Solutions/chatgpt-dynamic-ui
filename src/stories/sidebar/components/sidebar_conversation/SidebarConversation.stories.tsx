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
import SidebarConversation from './SidebarConversation.component';
import type { Meta, StoryObj } from '@storybook/react';
type Story = StoryObj<typeof SidebarConversation>;

export default {
	title: 'Main/SidebarConversation',
	component: SidebarConversation,
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
						You can create this component using a parent container 'div.' Inside this container, you
						add the first icon, a div container that holds the text, and another div to blur the
						text. Finally, there's a div container that contains the edit and delete icons. The
						visibility of the delete icon container is conditioned on whether this conversation is
						selected.
					</Description>
					<Canvas>
						<Story of={NoSelected} />
					</Canvas>

					<Subtitle>
						Selected component
						<hr className='my-4' />
					</Subtitle>

					<Description>
						The Select component receives three parameters for its proper functioning: title,
						itemId, and isSelected. isSelected receives the ID of the selected conversation, and
						with itemId, it checks whether the selected conversation's ID matches the conversation's
						ID to determine whether to display or hide the edit and delete buttons.
					</Description>

					<Canvas />

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
						<ColorItem title='Background ' subtitle='bg-black' colors={{ black: '#000' }} />
						<ColorItem
							title='Backgorund hover'
							subtitle='hover:bg-[#202123]'
							colors={{ gray: '#202123' }}
						/>
						<ColorItem title='Text' subtitle='text-white' colors={{ White: '#fff' }} />
					</ColorPalette>

					<Subtitle>
						Icons
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='Elipsis icon'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='icon-md relative'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z'
									fill='currentColor'
								></path>
							</svg>
						</IconItem>
					</IconGallery>
				</>
			)
		}
	}
} as Meta<typeof SidebarConversation>;

export const Base: Story = {
	args: {
		title: 'Prueba de texto para conversaciones',
		isSelected: 1,
		itemId: 1
	}
};

export const NoSelected: Story = {
	args: {
		title: 'Prueba de texto para conversaciones',
		isSelected: 1,
		itemId: 2
	}
};
