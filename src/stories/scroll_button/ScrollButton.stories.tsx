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
import ScrollButton from './ScrollButton.component';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof ScrollButton>;

export default {
	title: 'Main/ScrollButton',
	component: ScrollButton,
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
						Scroll button es un componente que sirve para un caso en especifico que es navegarte al
						final de tu pagina sin tener que hacer scroll en ella simplemente con dar un click sobre
						el. Se puede crear este componente utilizando un boton con un icono dentro de el.
					</Description>
					<Canvas />
					<Subtitle>
						Componente <hr className='my-4' />
					</Subtitle>

					<Description>
						El componente maneja funciones para obtener la posicion de la pantalla en eje y, se crea
						una condicion con el scroll en el eje y si se cumple, este componente se muestra, y al
						dar click te navega al final del scroll. Al no recibir parametros este componente no
						maneha controles.
					</Description>
					<Canvas />

					<Subtitle>
						Paleta de colores
						<hr className='my-4' />
					</Subtitle>
					<ColorPalette>
						<ColorItem title='Background light' subtitle='bg-white' colors={{ White: '#fff' }} />
						<ColorItem
							title='Background dark'
							subtitle='bg-[#444654]'
							colors={{ gray: '#444654' }}
						/>
						<ColorItem title='Border' subtitle='Border-gray-200' colors={{ gray: '#E5E7EB' }} />
						<ColorItem
							title='Border dark'
							subtitle='Border-white/10'
							colors={{ White: '#ffffff10' }}
						/>
						<ColorItem title='Text' subtitle='text-gray-600' colors={{ gray: '#4B5563' }} />
						<ColorItem title='Text dark' subtitle='text-white' colors={{ White: '#fff' }} />
					</ColorPalette>

					<Subtitle>
						Iconos
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='icono de flecha hacia abajo'>
							<svg
								stroke='currentColor'
								fill='none'
								strokeWidth='2'
								viewBox='0 0 24 24'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='icon-sm m-1'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<line x1='12' y1='5' x2='12' y2='19'></line>
								<polyline points='19 12 12 19 5 12'></polyline>
							</svg>
						</IconItem>
					</IconGallery>
				</>
			)
		}
	}
} as Meta<typeof ScrollButton>;

export const Base: Story = {};
