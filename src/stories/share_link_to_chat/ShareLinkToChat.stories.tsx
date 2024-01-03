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
import ShareLinkToChat from './ShareLinkToChat.component';
import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Main/ShareLinkToChatModal',
	component: ShareLinkToChat,
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
						<li>Colors</li>
						<li>Icons</li>
					</ul>
					<Subtitle>
						General description
						<hr className='my-4' />
					</Subtitle>

					<Description>
						You can create this modal-type component using a parent container 'div,' dividing it
						into two sections. In this case, one section is for the title with the close button, and
						the other section is for the content. This component is used to export a conversation by
						copying the conversation link, allowing you to share it with others so they can view the
						conversation through the link.
					</Description>
					<Canvas>
						<Story />
					</Canvas>

					<Subtitle>
						Component <hr className='my-4' />
					</Subtitle>

					<Description>
						The Sidebar component, up to this point, functions only visually and does not have any
						functional interactions. In summary, the 'x' icon is used to close the component, the
						pencil icon is for changing the conversation name, the 'More Info' option redirects to a
						page with documentation about the component, the central component displays the
						conversation, and the green button allows you to copy the conversation link.
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

						<ColorItem title='Text' subtitle='text-white' colors={{ White: '#fff' }} />
						<ColorItem title='Border' subtitle='border-black/10' colors={{ White: '#00000010' }} />
						<ColorItem
							title='Border dark'
							subtitle='border-white/10'
							colors={{ White: '#ffffff10' }}
						/>
						<ColorItem title='Title' subtitle='text-gray-900' colors={{ gray: '#111827' }} />
						<ColorItem title='Title dark' subtitle='text-gray-200' colors={{ gray: '#E5E7EB' }} />
						<ColorItem title='Description' subtitle='text-gray-500' colors={{ gray: '#6B7280' }} />
						<ColorItem
							title='Conversation name'
							subtitle='text-gray-900'
							colors={{ gray: '#111827' }}
						/>
						<ColorItem
							title='Conversation date'
							subtitle='text-gray-500'
							colors={{ gray: '#6B7280' }}
						/>
						<ColorItem
							title='More info text'
							subtitle='text-gray-500'
							colors={{ gray: '#6B7280' }}
						/>
						<ColorItem
							title='More info text hover'
							subtitle='text-gray-600'
							colors={{ gray: '#4B5563' }}
						/>
					</ColorPalette>

					<Subtitle>
						Icons
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='close icon'>
							<svg
								stroke='currentColor'
								fill='none'
								strokeWidth='2'
								viewBox='0 0 24 24'
								strokeLinecap='round'
								strokeLinejoin='round'
								height='20'
								width='20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<line x1='18' y1='6' x2='6' y2='18'></line>
								<line x1='6' y1='6' x2='18' y2='18'></line>
							</svg>
						</IconItem>
						<IconItem name='pencil icon'>
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
								<path d='M12 20h9'></path>
								<path d='M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z'></path>
							</svg>
						</IconItem>
						<IconItem name='Ellipsis icon'>
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth='0'
								viewBox='0 0 20 20'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z'></path>
							</svg>
						</IconItem>
						<IconItem name='Link icon'>
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
								<path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'></path>
								<path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'></path>
							</svg>
						</IconItem>
						<IconItem name='Share icon'>
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
					</IconGallery>
				</>
			)
		}
	}
} as Meta<typeof ShareLinkToChat>;

type Story = StoryObj<typeof ShareLinkToChat>;

export const Base: Story = {};
