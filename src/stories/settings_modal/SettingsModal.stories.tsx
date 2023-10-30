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
import SettingsModal from './SettingsModal.component';
import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Main/SettingsModal',
	component: SettingsModal,
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
						Este componente estilo modal se enfoca en las configuraciones de la pagina, este
						componentecuenta con dos secciones la primera seria Theme que sirve para cambiar de modo
						claro a modo obscuro y limpiar todos los chat, en la segunda seccion tenemos el control
						de datos, esta seccion sirve para compartir los links, exportar los datos de las
						conversaciones y borrar la cuenta.
					</Description>
					<Canvas>
						<Story />
					</Canvas>

					<Subtitle>
						Componente <hr className='my-4' />
					</Subtitle>

					<Description>
						El componente de no recibe parametros por lo que no cuenta con el apartado de controles,
						este componente funciona simplemente con un useState que captura la tab seleccionada y
						condicionalmente muestra el contenido de la tab que el usuario selecciona.
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
						<ColorItem
							title='Background tab selected'
							subtitle='bg-gray-100'
							colors={{ gray: '#F3F4F6' }}
						/>
						<ColorItem
							title='Background tab selected dark'
							subtitle='bg-gray-800/30'
							colors={{ gray: '#1F2937' }}
						/>

						<ColorItem title='Text' subtitle='text-gray-700' colors={{ gray: '#374151' }} />
						<ColorItem title='Text dark' subtitle='text-gray-200' colors={{ gray: '#E5E7EB' }} />
						<ColorItem title='Border' subtitle='border-black/10' colors={{ White: '#00000010' }} />
						<ColorItem
							title='Border dark'
							subtitle='border-white/10'
							colors={{ White: '#ffffff10' }}
						/>
						<ColorItem
							title='Buttons delete and clear'
							subtitle='bg-red-600'
							colors={{ red: '#DC2626' }}
						/>
						<ColorItem
							title='Buttons delete and clear hover'
							subtitle='bg-[#b91c1c]'
							colors={{ red: '#b91c1c' }}
						/>
					</ColorPalette>

					<Subtitle>
						Iconos
						<hr className='my-4' />
					</Subtitle>
					<IconGallery>
						<IconItem name='icono de configuracion'>
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth='0'
								viewBox='0 0 20 20'
								className='h-5 w-5 fill-gray-800 group-radix-state-active:fill-white dark:fill-gray-500'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
									clipRule='evenodd'
								></path>
							</svg>
						</IconItem>
						<IconItem name='icono de datos'>
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth='0'
								viewBox='0 0 20 20'
								className='h-5 w-5 fill-gray-800 group-radix-state-active:fill-white dark:fill-gray-500'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z'></path>
								<path d='M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z'></path>
								<path d='M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z'></path>
							</svg>
						</IconItem>
					</IconGallery>
				</>
			)
		}
	}
} as Meta<typeof SettingsModal>;

type Story = StoryObj<typeof SettingsModal>;

export const Base: Story = {};
