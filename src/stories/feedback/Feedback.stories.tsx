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
import FeedbackComponent from './Feedback.component';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof FeedbackComponent>;

export default {
	title: 'Main/Feedback',
	component: FeedbackComponent,
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
						Para la creacion de este componente solamente es necesario un componente padre "div",
						que contenga un boton para el icono de copiar y otro contenedor que contenga dos
						botones, para los iconos de like y dislike.
					</Description>
					<Canvas />

					<Subtitle>
						Componente <hr className='my-4' />
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
						<ColorItem title='Icons color' subtitle='text-gray-400' colors={{ gray: '#9CA3AF' }} />
						<ColorItem
							title='Icons color hover'
							subtitle='text-gray-700'
							colors={{ gray: '#374151' }}
						/>
						<ColorItem
							title='Icons color hover dark'
							subtitle='text-gray-200'
							colors={{ gray: '#E5E7EB' }}
						/>
						<ColorItem
							title='Background hover'
							subtitle='bg-gray-200'
							colors={{ gray: '#E5E7EB' }}
						/>
						<ColorItem
							title='Background hover dark'
							subtitle='bg-gray-700'
							colors={{ gray: '	#374151' }}
						/>
					</ColorPalette>

					<Subtitle>
						Iconos
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='icono de copiar'>
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
								<path d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'></path>
								<rect x='8' y='2' width='8' height='4' rx='1' ry='1'></rect>
							</svg>
						</IconItem>
						<IconItem name='icono de like'>
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
								<path d='M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3'></path>
							</svg>
						</IconItem>
						<IconItem name='icono de dislike'>
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
								<path d='M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17'></path>
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
} as Meta<typeof FeedbackComponent>;

export const Base: Story = {};
