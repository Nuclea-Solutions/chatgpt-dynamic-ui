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
import Navbar from './Navbar.component';
import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Main/Navbar',
	component: Navbar,
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
						Se puede crear este componente con la siguiente estructura, el componente debe tener un
						contenedor padre "div", este debe contener tres contenedores "div", para el acomodo de
						los contenedores hijos utilizamos flex con la propiedad justify-between y posicion
						relativa. Este componente se muestra condicionalmente, dependiendo si la pagina tiene el
						estado de nuevo chat, con el parametro "isNewChat" si es verdadero el componente
						permanecera oculto.
					</Description>
					<Canvas />

					<Subtitle>
						Componente <hr className='my-4' />
					</Subtitle>

					<Description>
						Al recibir por parametros la propiedad isNewChat en false, este componente se muestra
						como se ve en el siguiente ejemplo
					</Description>

					<Canvas></Canvas>

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
						<ColorItem title='Background light' subtitle='bg-white' colors={{ White: '#fff' }} />
						<ColorItem
							title='Background dark'
							subtitle='bg-gray-800'
							colors={{ gray: '#1f2937' }}
						/>
						<ColorItem title='bordes' subtitle='border-black/10' colors={{ black: '#00000010' }} />
						<ColorItem title='Text' subtitle='text-gray-600' colors={{ gray: '#4B5563' }} />
						<ColorItem title='Text dark' subtitle='text-white' colors={{ White: '#fff' }} />
					</ColorPalette>

					<Subtitle>
						Iconos
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='icono de compartir chat'>
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
								<path d='M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8'></path>
								<polyline points='16 6 12 2 8 6'></polyline>
								<line x1='12' y1='2' x2='12' y2='15'></line>
							</svg>
						</IconItem>
					</IconGallery>
				</>
			)
		}
	}
} as Meta<typeof Navbar>;

type Story = StoryObj<typeof Navbar>;

export const Base: Story = {
	args: {
		isNewChat: false
	}
};
