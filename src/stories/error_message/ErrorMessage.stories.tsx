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
import ErrorMessageComponent from '../../components/ErrorMessage';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof ErrorMessageComponent>;

export default {
	title: 'Main/ErrorMessage',
	component: ErrorMessageComponent,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<Subtitle>
						Tabla de contenido <hr className='my-4' />
					</Subtitle>
					<ul>
						<li>General Description</li>
						<li>Component</li>
						<li>Controls</li>
						<li>Color Palette</li>
					</ul>
					<Subtitle>
						General Description
						<hr className='my-4' />
					</Subtitle>

					<Description>
						For the creation of this component, only a parent component 'div' is required that
						contains the message. Styles are applied to this div to give the appearance of an error
						message.
					</Description>
					<Canvas />

					<Subtitle>
						Component <hr className='my-4' />
					</Subtitle>

					<Description>
						The component receives a parameter 'content' which represents the content displayed in
						the component.
					</Description>

					<Canvas />

					<Subtitle>
						Controls
						<hr className='my-4' />
					</Subtitle>
					<Controls />

					<Subtitle>
						Color Palette
						<hr className='my-4' />
					</Subtitle>
					<ColorPalette>
						<ColorItem title='Background' subtitle='' colors={{ red: '#f4e6e6' }} />
						<ColorItem title='border color' subtitle='' colors={{ red: '#cf999a' }} />
					</ColorPalette>
				</>
			)
		}
	}
} as Meta<typeof ErrorMessageComponent>;

export const Base: Story = {
	args: {
		content: 'An error acurred. Try again later'
	}
};
