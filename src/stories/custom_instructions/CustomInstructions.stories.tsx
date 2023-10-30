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
import CustomInstructions from './CustomInstructions.component';
import type { Meta, StoryObj } from '@storybook/react';
import SwitchComponent from '../switch_button/SwitchButton.component';

export default {
	title: 'Main/CustomInstructionsModal',
	component: CustomInstructions,
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
						<li>Componentes reutilizables</li>
						<li>Controles</li>
						<li>Paleta de colores</li>
						<li>Iconos</li>
					</ul>
					<Subtitle>
						Descripcion general
						<hr className='my-4' />
					</Subtitle>

					<Description>
						Se puede crear este componente tipo modal utilizando un div padre que envuelve todos los
						elementos necesarios que debera incluir este componente modal, utilizando la propiedad
						position relative y left-1/2 para poder centrar el modal ademas de el parametro que
						tendra la funcion de mostrar o esconder el modal.
					</Description>
					<Canvas>
						<div className='flex gap-2 justify-center '>
							<Story />
						</div>
					</Canvas>

					<Subtitle>
						Componentes reutilizables <hr className='my-4' />
					</Subtitle>

					<Description>
						El componente de switch es un componente reutilizable que recibe dos parametros,
						isChecked y una funcion que cambia el estado de isChecked y asi es como se cambia el
						estado de activo e inactivo.
					</Description>

					<Canvas>
						<SwitchComponent isChecked={false} toggleSwitch={() => {}} />
					</Canvas>
					<Canvas>
						<SwitchComponent isChecked={true} toggleSwitch={() => {}} />
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
						<ColorItem title='background light' subtitle='bg-white' colors={{ White: '#fff' }} />
						<ColorItem
							title='background dark'
							subtitle='bg-gray-800'
							colors={{ gray: '#1f2937' }}
						/>
						<ColorItem title='borders' subtitle='border light' colors={{ gray: '#d1d5db' }} />
						<ColorItem title='borders dark' subtitle='border-white' colors={{ White: '#fff' }} />
						<ColorItem title='cancel button' subtitle='bg-gray-500 ' colors={{ gray: '#6B7280' }} />
						<ColorItem title='inactive save button' subtitle='' colors={{ green: '#10a37f50' }} />
						<ColorItem title='active save button' subtitle='' colors={{ green: '#10a37f' }} />
					</ColorPalette>

					<Subtitle>
						Iconos
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='icono de mas informacion'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 18 18'
								fill='none'
								className='h-6 w-6 flex-shrink-0 text-gray-500'
							>
								<path
									d='M8.4375 8.4375L8.46825 8.4225C8.56442 8.37445 8.67235 8.35497 8.77925 8.36637C8.88615 8.37776 8.98755 8.41955 9.07143 8.48678C9.15532 8.55402 9.21818 8.64388 9.25257 8.74574C9.28697 8.8476 9.29145 8.95717 9.2655 9.0615L8.7345 11.1885C8.70836 11.2929 8.7127 11.4026 8.74702 11.5045C8.78133 11.6065 8.84418 11.6965 8.9281 11.7639C9.01202 11.8312 9.1135 11.8731 9.2205 11.8845C9.32749 11.8959 9.43551 11.8764 9.53175 11.8282L9.5625 11.8125M15.75 9C15.75 9.88642 15.5754 10.7642 15.2362 11.5831C14.897 12.4021 14.3998 13.1462 13.773 13.773C13.1462 14.3998 12.4021 14.897 11.5831 15.2362C10.7642 15.5754 9.88642 15.75 9 15.75C8.11358 15.75 7.23583 15.5754 6.41689 15.2362C5.59794 14.897 4.85382 14.3998 4.22703 13.773C3.60023 13.1462 3.10303 12.4021 2.76381 11.5831C2.42459 10.7642 2.25 9.88642 2.25 9C2.25 7.20979 2.96116 5.4929 4.22703 4.22703C5.4929 2.96116 7.20979 2.25 9 2.25C10.7902 2.25 12.5071 2.96116 13.773 4.22703C15.0388 5.4929 15.75 7.20979 15.75 9ZM9 6.1875H9.006V6.1935H9V6.1875Z'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
								></path>
							</svg>
						</IconItem>
					</IconGallery>
				</>
			)
		}
	}
} as Meta<typeof CustomInstructions>;

type Story = StoryObj<typeof CustomInstructions>;

export const Base: Story = {
	args: {
		customInstructionsShow: true
	}
};
