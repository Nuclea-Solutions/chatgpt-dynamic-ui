import {
	AddContext,
	Canvas,
	ColorItem,
	ColorPalette,
	Controls,
	Description,
	Subtitle,
	Title,
	IconGallery,
	IconItem
} from '@storybook/blocks';
import AudioComponent from './Audio.component';
import type { Meta, StoryObj } from '@storybook/react';
import { CiPlay1, CiPause1 } from 'react-icons/ci';

export default {
	title: 'Main/Audio',
	component: AudioComponent,
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
						Se puede crear este componente utilizando la api de audio de react para poder reproducir
						audios, asi mismo dando estilos con tailwind y los iconos de la libreria react/icons
					</Description>
					<Canvas>
						<div className='flex gap-2 '>
							<AudioComponent audioSrc='www.audio.com' />
						</div>
					</Canvas>

					<Subtitle>
						Componente con color <hr className='my-4' />
					</Subtitle>

					<Description>
						El componente de audio recibe dos parametros de los cuales uno es la url de el audio a
						utilizar, y el otro parametro que se utiliza es el de el color para poder cambiar el
						aspecto del boton
					</Description>

					<Canvas>
						<AudioComponent audioSrc='www.audio.com' color='#000' />
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
						<ColorItem title='Background' subtitle='bg-white' colors={{ White: '#fff' }} />
						<ColorItem
							title='Background dark'
							subtitle='bg-gray-800'
							colors={{ gray: '#1f2937' }}
						/>
						<ColorItem title='border' subtitle='border' colors={{ gray: '#d1d5db' }} />
						<ColorItem title='Background dark' subtitle='border-white' colors={{ White: '#fff' }} />
					</ColorPalette>

					<Subtitle>
						Iconos
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='icono de pausa'>
							<CiPause1 />
						</IconItem>
						<IconItem name='icono de play'>
							<CiPlay1 />
						</IconItem>
					</IconGallery>
				</>
			)
		}
	}
} as Meta<typeof AudioComponent>;

type Story = StoryObj<typeof AudioComponent>;

export const Base: Story = {
	args: {
		audioSrc: './assets/audioPrueba.ogg',
		color: '#fff'
	}
};
