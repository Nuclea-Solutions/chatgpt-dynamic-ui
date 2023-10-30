import {
	Canvas,
	ColorItem,
	ColorPalette,
	Description,
	IconGallery,
	IconItem,
	Story,
	Subtitle,
	Title
} from '@storybook/blocks';
import ShareLinkToChat from './ShareLinkToChat.component';
import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Main/ShareLinkToChatModal',
	component: ShareLinkToChat,
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
						Se puede crear este componente tipo modal utilizando un comtenedor padre "div",
						dividirlo en dos secciones que en este caso Seria la parte del titulo con el boton de
						cerrar y la otra parte seria la parte del contenido, este componente sirve para exportar
						una conversacion al copiar el link de la conversacion se puede compartir con mas
						personas para que asi puedan ver la conversacion que les pases por medio del link.
					</Description>
					<Canvas>
						<Story />
					</Canvas>

					<Subtitle>
						Componente <hr className='my-4' />
					</Subtitle>

					<Description>
						El componente de Sidebar hasta el momento solo funciona de modo visual, no tiene ningun
						funcionamiento, pero a resumidas cuentas, el icono de la "x" servida para cerrar el
						componente, el icono del lapiz servira para cambiar el nombre de la conversacion, en
						more info te rediccionara a una pagina con documentacion sobre el componente, en el
						componente central se mostrara la conversacion y por ultimo el boton verde permitira
						copiar el link de la conversacion.
					</Description>

					<Canvas>
						<Story />
					</Canvas>

					<Subtitle>
						Paleta de colores
						<hr className='my-4' />
					</Subtitle>
					<ColorPalette>
						<ColorItem title='Background ' subtitle='bg-white' colors={{ white: '#ffffff' }} />
						<ColorItem
							title='Background dark'
							subtitle='bg-gray-900'
							colors={{ gray: '#111827' }}
						/>

						<ColorItem title='Text' subtitle='text-white' colors={{ White: '#fff' }} />
						<ColorItem title='Border' subtitle='border-black/10' colors={{ White: '#00000010' }} />
						<ColorItem
							title='Border dark'
							subtitle='border-white/10'
							colors={{ White: '#ffffff10' }}
						/>
						<ColorItem title='Title' subtitle='text-gray-900' colors={{ gray: '#111827' }} />
						<ColorItem title='Title dark' subtitle='text-gray-200' colors={{ gray: '#E5E7EB' }} />
						<ColorItem title='Description' subtitle='text-gray-500' colors={{ gray: '#6B7280' }} />
						<ColorItem
							title='Conversation name'
							subtitle='text-gray-900'
							colors={{ gray: '#111827' }}
						/>
						<ColorItem
							title='Conversation date'
							subtitle='text-gray-500'
							colors={{ gray: '#6B7280' }}
						/>
						<ColorItem
							title='More info text'
							subtitle='text-gray-500'
							colors={{ gray: '#6B7280' }}
						/>
						<ColorItem
							title='More info text hover'
							subtitle='text-gray-600'
							colors={{ gray: '#4B5563' }}
						/>
					</ColorPalette>

					<Subtitle>
						Iconos
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='icono de cerrar'>
							<svg
								stroke='currentColor'
								fill='none'
								strokeWidth='2'
								viewBox='0 0 24 24'
								strokeLinecap='round'
								strokeLinejoin='round'
								height='20'
								width='20'
								xmlns='http://www.w3.org/2000/svg'
							>
								<line x1='18' y1='6' x2='6' y2='18'></line>
								<line x1='6' y1='6' x2='18' y2='18'></line>
							</svg>
						</IconItem>
						<IconItem name='icono de lapiz'>
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
								<path d='M12 20h9'></path>
								<path d='M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z'></path>
							</svg>
						</IconItem>
						<IconItem name='icono de tres puntos'>
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth='0'
								viewBox='0 0 20 20'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z'></path>
							</svg>
						</IconItem>
						<IconItem name='icono de link'>
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
								<path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'></path>
								<path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'></path>
							</svg>
						</IconItem>
						<IconItem name='icono de compartir'>
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
					</IconGallery>
				</>
			)
		}
	}
} as Meta<typeof ShareLinkToChat>;

type Story = StoryObj<typeof ShareLinkToChat>;

export const Base: Story = {};
