import {
	Canvas,
	ColorItem,
	ColorPalette,
	Description,
	IconGallery,
	IconItem,
	Subtitle,
	Title
} from '@storybook/blocks';
import NavbarSmallScreen from './NavbarSmallScreen.component';
import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Main/NavbarSmallScreen',
	component: NavbarSmallScreen,
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
						Se puede crear este componente utilizando un componente contenedor padre "div", dentro
						de este componente se agregan tres componentes hijo. -boton -h1 -boton, el primero boton
						contendra un icono hamburguesa para desplegar el sidebar, el h1 contiene un texto, y el
						tercer boton contiene un boton con un icono de "+". El componente navbarSmall tiene la
						propiedad sticky para que siempre este presente en la pantalla, y solo se muestra en
						pantallas pequeñas.
					</Description>
					<Canvas />

					<Subtitle>
						Componente <hr className='my-4' />
					</Subtitle>

					<Description>
						El componente de navbarSmall no recibe ningun parametro por lo que no contirne controles
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
							subtitle='bg-gray-700'
							colors={{ gray: '	#374151' }}
						/>
						<ColorItem title='bordes' subtitle='border-white/20' colors={{ white: '#ffffff20' }} />
						<ColorItem title='text dark' subtitle='text-white' colors={{ White: '#fff' }} />
					</ColorPalette>

					<Subtitle>
						Iconos
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='icono de menu'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='icon-md'
							>
								<path
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M3 8C3 7.44772 3.44772 7 4 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H4C3.44772 9 3 8.55228 3 8ZM3 16C3 15.4477 3.44772 15 4 15H14C14.5523 15 15 15.4477 15 16C15 16.5523 14.5523 17 14 17H4C3.44772 17 3 16.5523 3 16Z'
									fill='currentColor'
								></path>
							</svg>
						</IconItem>
						<IconItem name='icono de nuevo chat'>
							<svg
								width='18'
								height='18'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='icon-md'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M16.7929 2.79289C18.0118 1.57394 19.9882 1.57394 21.2071 2.79289C22.4261 4.01184 22.4261 5.98815 21.2071 7.20711L12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16H9C8.44772 16 8 15.5523 8 15V12C8 11.7348 8.10536 11.4804 8.29289 11.2929L16.7929 2.79289ZM19.7929 4.20711C19.355 3.7692 18.645 3.7692 18.2071 4.2071L10 12.4142V14H11.5858L19.7929 5.79289C20.2308 5.35499 20.2308 4.64501 19.7929 4.20711ZM6 5C5.44772 5 5 5.44771 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34314 4.34315 3 6 3H10C10.5523 3 11 3.44771 11 4C11 4.55228 10.5523 5 10 5H6Z'
									fill='currentColor'
								></path>
							</svg>
						</IconItem>
					</IconGallery>
				</>
			)
		}
	}
} as Meta<typeof NavbarSmallScreen>;

type Story = StoryObj<typeof NavbarSmallScreen>;

export const Base: Story = {};
