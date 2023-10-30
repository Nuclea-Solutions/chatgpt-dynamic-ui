import { Canvas, Controls, Description, Subtitle, Title } from '@storybook/blocks';
import Select from './Select';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Select>;

export default {
	title: 'Main/Select',
	component: Select,
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
						<li>Controls</li>
						<li>Paleta de colores</li>
						<li>Iconos</li>
					</ul>
					<Subtitle>
						Descripcion general
						<hr className='my-4' />
					</Subtitle>

					<Description>
						Se puede crear este componente utilizando la libreria de componentes nextui, este
						componente solamente recibe dos parametros options y title, la documentacion oficial de
						este componente en el siguiente link: https://nextui.org/docs/components/select
					</Description>
					<Canvas />

					<Subtitle>
						Componente <hr className='my-4' />
					</Subtitle>

					<Description>
						El componente de Select recibe dos parametros title y las opciones que el componente va
						a renderizar, el titulo es tipo cadena de texto y el componente recibe las opciones a
						renderizar como arreglo de obtjetos, los colores de el componente viene predeterminado
						por la libreria de componentes.
					</Description>

					<Canvas />

					<Subtitle>
						Controles
						<hr className='my-4' />
					</Subtitle>
					<Description>
						En el apartado de controles nos muestra las variables que recibe el componente para su
						personalizacion
					</Description>
					<Controls />
				</>
			)
		}
	}
} as Meta<typeof Select>;

export const Base: Story = {
	args: {
		options: [
			{ label: 'Opción 1', value: 'opcion 1' },
			{ label: 'Opción 2', value: 'opcion 2' },
			{ label: 'Opción 3', value: 'opcion 3' }
		],
		title: 'Selecciona una opcion'
	}
};
