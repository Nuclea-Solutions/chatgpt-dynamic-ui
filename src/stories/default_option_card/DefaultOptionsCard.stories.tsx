import {
	Canvas,
	ColorItem,
	ColorPalette,
	Controls,
	Description,
	IconGallery,
	IconItem,
	Subtitle,
	Title
} from '@storybook/blocks';
import DefaultOptionCard from './DefaultOptionCard.component';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof DefaultOptionCard>;

export default {
	title: 'Main/DefaulOptionsCard',
	component: DefaultOptionCard,
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
						Se puede crear este componente tipo carta utilizando un contenedor padre que contenga
						dos contenedores, el primer contenedor debera tener el titulo y la descripcion de la
						carta y el segundo contenedor contendra el icono, para cambiar el color y que aparezca
						el icono el hacer hover, se requiere utilizar los metodos onMouseEnter y onMouseLeave en
						el componente padre, acompañado de un useEffect para poder cambiar el estado del
						componente.
					</Description>
					<Canvas>
						<div className='flex gap-2 '>
							<DefaultOptionCard title='Tell me a fun fact' content='about the Roman Empire' />
						</div>
					</Canvas>

					<Subtitle>
						Componente
						<hr className='my-4' />
					</Subtitle>

					<Description>
						El componente de Default option recibe dos parametros de los cuales el primero es el
						titulo de la carta, y el otro parametro es la descripcion de la carta.
					</Description>

					<Canvas>
						<DefaultOptionCard
							title='Design a database schema'
							content='for an online merch store'
						/>
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
						<ColorItem title='Background light' subtitle='bg-white' colors={{ White: '#fff' }} />
						<ColorItem
							title='Background dark'
							subtitle='bg-slate-700'
							colors={{ gray: '#334155' }}
						/>
						<ColorItem title='Hover' subtitle='bg-gray-100/50' colors={{ gray: '#F3F4F650' }} />
						<ColorItem
							title='Hover dark'
							subtitle='bg-slate-700/50'
							colors={{ White: '#33415550' }}
						/>
						<ColorItem title='Text' subtitle='text-gray-700' colors={{ gray: '#374151' }} />
						<ColorItem title='Text dark' subtitle='text-gray-300' colors={{ gray: '#D1D5DB' }} />
						<ColorItem title='Border' subtitle='border' colors={{ gray: '#d1d5db' }} />
						<ColorItem title='Icon' subtitle='' colors={{ slate700: '#334155' }} />
					</ColorPalette>

					<Subtitle>
						Iconos
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='icono de enviar'>
							<svg
								width='18'
								height='18'
								viewBox='0 0 24 24'
								fill='none'
								className='icon-sm text-token-text-primary'
							>
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
} as Meta<typeof DefaultOptionCard>;

export const Base: Story = {
	args: {
		title: 'Tell me a fun fact',
		content: 'about the Roman Empire'
	}
};
