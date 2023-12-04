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
						<li>Descripcion general</li>
						<li>Componente</li>
						<li>Controles</li>
						<li>Paleta de colores</li>
					</ul>
					<Subtitle>
						Descripcion general
						<hr className='my-4' />
					</Subtitle>

					<Description>
						Para la creacion de este componente solamente es necesario un componente padre "div",
						que contenga el mensaje, a este div se le aplican estilos para que de la vista de un
						mesaje de error.
					</Description>
					<Canvas />

					<Subtitle>
						Componente <hr className='my-4' />
					</Subtitle>

					<Description>
						El componente recibe un paramaetro "content" que que es lo que es el contenido que se
						muestra en el componente.
					</Description>

					<Canvas />

					<Subtitle>
						Controles
						<hr className='my-4' />
					</Subtitle>
					<Controls />

					<Subtitle>
						Paleta de colores
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
