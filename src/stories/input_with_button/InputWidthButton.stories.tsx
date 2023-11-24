import InputWidthButton from './InputWidthButton.component';
import type { Meta, StoryObj } from '@storybook/react';
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
import { GoImage } from 'react-icons/go';
export default {
	title: 'Main/InputWidthButton',
	component: InputWidthButton,
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
						<li>Componente activo</li>
						<li>Controls</li>
						<li>Paleta de colores</li>
						<li>Iconos</li>
					</ul>
					<Subtitle>
						Descripcion general
						<hr className='my-4' />
					</Subtitle>

					<Description>
						Se puede crear este componente utilizando un componente padre "div" como contenedor,
						dentro del contenedor se agrega un dos botones y un text area, el primer boton contiene
						el icono de imagen que es el componente que servira para subir imagenes, el segundo
						boton es el boton para enviar el mensaje.
					</Description>
					<Canvas />

					<Subtitle>
						Componente activo
						<hr className='my-4' />
					</Subtitle>

					<Description>
						El componente recibe dos parametros que utiliza para cambiar el estado del componente
						"inputValue y setInputValue", por ejemplo al escribir el boton cambia a un color verde,
						asi mismo el componente crece en altura de hasta 200 px, utilizando una funcion que para
						capturar el valor del text area, y asi mismo cambiar el estado del boton y del mismo
						text area. El boton utilizado es un boton de la libreria nextui, la documentacion
						oficial en el siguiente link: https://nextui.org/docs/components/button.
					</Description>

					<Canvas of={Active} />

					<Subtitle>
						Controles
						<hr className='my-4' />
					</Subtitle>
					<Description>
						En el apartado de controles nos muestra las variables que recibe el componente para su
						personalizacion
					</Description>
					<Controls of={Active} />

					<Subtitle>
						Paleta de colores
						<hr className='my-4' />
					</Subtitle>
					<ColorPalette>
						<ColorItem title='Background white' subtitle='bg-white' colors={{ white: '#fff' }} />
						<ColorItem
							title='Background dark'
							subtitle='bg-[#444654]'
							colors={{ gray: '#444654' }}
						/>
						<ColorItem title='Text dark' subtitle='text-white' colors={{ White: '#fff' }} />
						<ColorItem title='Button' subtitle='bg-black' colors={{ black: '#000' }} />
						<ColorItem
							title='Button inactive'
							subtitle='bg-black opacity-10'
							colors={{ black: '#00000010' }}
						/>
						<ColorItem title='Button dark' subtitle='bg-white' colors={{ white: '#fff' }} />
						<ColorItem
							title='Button inactive dark'
							subtitle='bg-white opacity-10'
							colors={{ white: '#ffffff10' }}
						/>
						<ColorItem title='Icon' subtitle='text-black' colors={{ black: '#000' }} />
						<ColorItem title='Icon dark' subtitle='text-white' colors={{ white: '#fff' }} />
					</ColorPalette>

					<Subtitle>
						Iconos
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='icono de imagen'>
							<GoImage />
						</IconItem>
						<IconItem name='icono de enviar'>
							<svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
								<path
									d='M7 11L12 6L17 11M12 18V7'
									stroke='currentColor'
									strokeWidth='2'
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
} as Meta<typeof InputWidthButton>;

type Story = StoryObj<typeof InputWidthButton>;

export const Base: Story = {};
export const Active: Story = {
	args: {
		value: 'test'
	}
};
