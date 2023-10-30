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
import HelpButton from './HelpButton.component';
import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Main/HelpButton',
	component: HelpButton,
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
						<li>Paleta de colores</li>
						<li>Iconos</li>
					</ul>
					<Subtitle>
						Descripcion general
						<hr className='my-4' />
					</Subtitle>

					<Description>
						Para la creacion de este componente se utilizo la libreria de nextui la cual es una
						libreria de componentes personalizados, el componente utilizado fue un Dropdown para asi
						desplegar un menu al momento de hacer click sobre el, el componente puede personalizar
						solamente el activador del Dropdown que en este caso seria el boton redondo con signo de
						pregunta, este esta compuesto unicamente de un div redondeado con el signo de pregunta
						como children, en el siguiente link se muestra documentacion oficial del componente
						utilizado: https://nextui.org/docs/components/dropdown
					</Description>
					<Canvas />

					<Subtitle>
						Componente con color <hr className='my-4' />
					</Subtitle>

					<Description>
						El componente no recibe ningun parametro como props por lo cual no contiene controles y
						su funcionamiento es interno.
					</Description>

					<Canvas />

					<Subtitle>
						Paleta de colores
						<hr className='my-4' />
					</Subtitle>
					<ColorPalette>
						<ColorItem title='Background light' subtitle='bg-white' colors={{ White: '#fff' }} />
						<ColorItem title='Background dark' subtitle='' colors={{ gray: '#444654' }} />
						<ColorItem title='Bordes' subtitle='border-gray-300' colors={{ gray: '#D1D5DB' }} />
						<ColorItem title='Text' subtitle='text-gray-500' colors={{ gray: '#6B7280' }} />
						<ColorItem title='Text dark' subtitle='text-gray-200' colors={{ gray: '#E5E7EB' }} />
					</ColorPalette>

					<Subtitle>
						Iconos
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='icono de pregunta'>
							<div className='flex items-center justify-center h-6 w-6 p-3 border rounded-full bg-white border-gray-300 text-lg font-semibold text-gray-500 dark:bg-[#444654] dark:text-gray-200 cursor-pointer'>
								?
							</div>
						</IconItem>
						<IconItem name='icono de redirigir'>
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
						<IconItem name='icono de grid'>
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
								<rect x='3' y='3' width='7' height='7'></rect>
								<rect x='14' y='3' width='7' height='7'></rect>
								<rect x='14' y='14' width='7' height='7'></rect>
								<rect x='3' y='14' width='7' height='7'></rect>
							</svg>
						</IconItem>
					</IconGallery>
				</>
			)
		}
	}
} as Meta<typeof HelpButton>;

type Story = StoryObj<typeof HelpButton>;

export const Base: Story = {};
