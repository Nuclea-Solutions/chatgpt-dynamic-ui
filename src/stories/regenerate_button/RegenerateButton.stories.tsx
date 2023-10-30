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
import RegenerateButton from './RegenerateButton.component';
import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Main/RegenerateButton',
	component: RegenerateButton,
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
						<li>Componente con color</li>
						<li>Controls</li>
						<li>Paleta de colores</li>
						<li>Iconos</li>
					</ul>
					<Subtitle>
						Descripcion general
						<hr className='my-4' />
					</Subtitle>

					<Description>
						Se puede crear este componente simplemente con un contenedor padre "div", dentros de
						este contenedor agregar un boton que contenga un texto con un icono
					</Description>
					<Canvas>
						<Story of={Base} />
					</Canvas>

					<Subtitle>
						Componente
						<hr className='my-4' />
					</Subtitle>

					<Description>
						El componente consta de dos estados regenerate y stop regenerate como se muestra en la
						siguiente seccion.
					</Description>

					<Canvas>
						<Story of={Base} />
						<Story of={Active} />
					</Canvas>

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
						<ColorItem title='Text' subtitle='text-gray-600' colors={{ gray: '#4B5563' }} />
						<ColorItem title='Text dark' subtitle='text-white' colors={{ white: '#ffffff' }} />
					</ColorPalette>

					<Subtitle>
						Iconos
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='icono de stop'>
							<svg
								stroke='currentColor'
								fill='none'
								strokeWidth='2'
								viewBox='0 0 24 24'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='icon-xs'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<rect x='3' y='3' width='18' height='18' rx='2' ry='2'></rect>
							</svg>
						</IconItem>
						<IconItem name='icono de regenerar'>
							<svg
								stroke='currentColor'
								fill='none'
								strokeWidth='2'
								viewBox='0 0 24 24'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='flex-shrink-0 icon-xs'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<polyline points='1 4 1 10 7 10'></polyline>
								<polyline points='23 20 23 14 17 14'></polyline>
								<path d='M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15'></path>
							</svg>
						</IconItem>
					</IconGallery>
				</>
			)
		}
	}
} as Meta<typeof RegenerateButton>;

type Story = StoryObj<typeof RegenerateButton>;

export const Base: Story = {
	args: {
		isRegenerate: false
	}
};

export const Active: Story = {
	args: {
		isRegenerate: true
	}
};
