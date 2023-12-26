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
						Index <hr className='my-4' />
					</Subtitle>
					<ul>
						<li>General Description</li>
						<li>Color Component</li>
						<li>Controls</li>
						<li>Color Palette</li>
						<li>Icons</li>
					</ul>
					<Subtitle>
						General Description <hr className='my-4' />
					</Subtitle>

					<Description>
						Is it possible to create this component using the React audio API to play audio, while
						also styling it with Tailwind CSS and using icons from the React/Icons library
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
						Controls
						<hr className='my-4' />
					</Subtitle>
					<Description>
						In the controls section, it shows the variables that the component receives for
						customization
					</Description>
					<Controls />

					<Subtitle>
						Color Palette
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
						Icons
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='Pause icon'>
							<CiPause1 />
						</IconItem>
						<IconItem name='Play icon'>
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
