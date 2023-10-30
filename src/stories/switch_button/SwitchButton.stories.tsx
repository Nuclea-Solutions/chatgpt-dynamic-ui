import {
	Canvas,
	ColorItem,
	ColorPalette,
	Controls,
	Description,
	Story,
	Subtitle,
	Title
} from '@storybook/blocks';
import SwitchButton from './SwitchButton.component';
import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Main/SwitchButton',
	component: SwitchButton,
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
						<li>Componente activado</li>
						<li>Controls</li>
						<li>Paleta de colores</li>
						<li>Iconos</li>
					</ul>
					<Subtitle>
						Descripcion general
						<hr className='my-4' />
					</Subtitle>

					<Description>
						Switch es un componente que recibe dos parametros para su correcto funcionamiento, el
						primer parametro "isChecked" que es un parametro boolean para el estado de componente, y
						"toggleSwitch" es un parametro de tipo funcion que sirve para el funcionamiento del
						switch.
					</Description>
					<Canvas>
						<Story of={Inactive} />
					</Canvas>

					<Subtitle>
						Componente activado
						<hr className='my-4' />
					</Subtitle>

					<Description>
						El componente de Switch al recibir el parametro isChecked en true el componente se
						mostrara como en el siguiente ejemplo.
					</Description>

					<Canvas>
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
						<ColorItem title='Background' subtitle='bg-white' colors={{ White: '#fff' }} />
						<ColorItem
							title='Background active'
							subtitle='bg-[#10a37f]'
							colors={{ black: '#10a37f' }}
						/>
					</ColorPalette>
				</>
			)
		}
	}
} as Meta<typeof SwitchButton>;

type Story = StoryObj<typeof SwitchButton>;

export const Inactive: Story = {
	args: {
		isChecked: false
	}
};

export const Active: Story = {
	args: {
		isChecked: true
	}
};
