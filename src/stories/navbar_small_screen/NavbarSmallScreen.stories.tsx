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

					<Canvas></Canvas>
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
								stroke='currentColor'
								fill='none'
								strokeWidth='2'
								viewBox='0 0 24 24'
								strokeLinecap='round'
								strokeLinejoin='round'
								aria-hidden='true'
								className='icon-lg'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<line x1='3' y1='12' x2='21' y2='12'></line>
								<line x1='3' y1='6' x2='21' y2='6'></line>
								<line x1='3' y1='18' x2='21' y2='18'></line>
							</svg>
						</IconItem>
						<IconItem name='icono de mas'>
							<svg
								stroke='currentColor'
								fill='none'
								strokeWidth='2'
								viewBox='0 0 24 24'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='icon-lg'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<line x1='12' y1='5' x2='12' y2='19'></line>
								<line x1='5' y1='12' x2='19' y2='12'></line>
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
