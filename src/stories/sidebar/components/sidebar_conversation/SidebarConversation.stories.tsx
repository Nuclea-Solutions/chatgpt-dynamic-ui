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
						Tabla de contenido <hr className='my-4' />
					</Subtitle>
					<ul>
						<li>Descripcion general</li>
						<li>Componente seleccionado</li>
						<li>Controls</li>
						<li>Paleta de colores</li>
						<li>Iconos</li>
					</ul>
					<Subtitle>
						Descripcion general
						<hr className='my-4' />
					</Subtitle>

					<Description>
						Se puede crear este componente utilizando un contenedor padre "div", dentro de este
						contenedor se agrega el primer icono, un div contenedor que contiene el texto y un div
						para difuminar el texto, al final un div contenedor que contiene los iconos de editar y
						eliminar, este ultimo contenedor su visibilidad esta condicionada a si esta conversacion
						esta seleccionada.
					</Description>
					<Canvas>
						<Story of={NoSelected} />
					</Canvas>

					<Subtitle>
						Componente seleccionado
						<hr className='my-4' />
					</Subtitle>

					<Description>
						El componente de Select recibe tres parametros para su correcto funcionamiento, title,
						itemId y isSelected. isSelected recibe el id de la conversacion que esta seleccionada y
						con itemId se valida si la conversacion seleccionada es igual a id de la conversacion
						para asi mostrar o ocultar los botones de editar y eliminar.
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

					<Subtitle>
						Paleta de colores
						<hr className='my-4' />
					</Subtitle>
					<ColorPalette>
						<ColorItem title='Background ' subtitle='bg-[#202123]' colors={{ black: '#202123' }} />
						<ColorItem
							title='Backgorund hover'
							subtitle='hover:bg-gray-700'
							colors={{ gray: '#374151' }}
						/>
						<ColorItem title='Text' subtitle='text-white' colors={{ White: '#fff' }} />
					</ColorPalette>

					<Subtitle>
						Iconos
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='icono de mensaje'>
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
								<path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'></path>
							</svg>
						</IconItem>
						<IconItem name='icono de editar'>
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
						<IconItem name='icono de eliminar'>
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
								<polyline points='3 6 5 6 21 6'></polyline>
								<path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2'></path>
								<line x1='10' y1='11' x2='10' y2='17'></line>
								<line x1='14' y1='11' x2='14' y2='17'></line>
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
