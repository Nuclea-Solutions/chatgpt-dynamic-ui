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
						<ColorItem title='Background ' subtitle='bg-black' colors={{ black: '#000' }} />
						<ColorItem
							title='Backgorund hover'
							subtitle='hover:bg-[#202123]'
							colors={{ gray: '#202123' }}
						/>
						<ColorItem title='Text' subtitle='text-white' colors={{ White: '#fff' }} />
					</ColorPalette>

					<Subtitle>
						Iconos
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='icono de elipsis'>
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
