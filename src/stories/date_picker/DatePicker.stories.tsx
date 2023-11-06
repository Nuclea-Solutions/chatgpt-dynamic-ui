import { Canvas, Controls, Description, Subtitle, Title } from '@storybook/blocks';
import DatePicker from './DatePicker';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof DatePicker>;

export default {
	title: 'Main/DatePicker',
	component: DatePicker,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
		docs: {
			page: () => (
				<>
					<Title />
					<Subtitle>
						Tabla de contenido <hr className='my-4' />
					</Subtitle>
					<ul>
						<li>Descripcion general</li>
						<li>Componente de solo lectura</li>
						<li>Componente desabilitado</li>
						<li>Controls</li>
						<li>Aviso</li>
					</ul>
					<Subtitle>
						Descripcion general
						<hr className='my-4' />
					</Subtitle>

					<Description>
						Se puede crear este componente de fecha muy facil, simplemente se debe instalar la
						libreria de componentes material ui, ya instalada la libreria se deben inportar los
						componentes necesarios para crear el componente de fechas "Date Picker", el siguiente
						link contiene la documentacion oficial para la correcta utilizacion del componente:
						https://mui.com/x/react-date-pickers/date-picker/
					</Description>
					<Canvas />

					<Subtitle>
						Componente de solo lectura <hr className='my-4' />
					</Subtitle>

					<Description>
						El componente Date Picker recibe una propiedad llamada readOnly que es de tipo boolean,
						al estar esta propiedad en true el componente no podra desplegar el calendario, ya que
						su uso es de solo lectura.
					</Description>

					<Canvas>
						<DatePicker onChange={() => {}} value={new Date()} readOnly={true} disable={false} />
					</Canvas>

					<Subtitle>
						Componente desabilitado <hr className='my-4' />
					</Subtitle>

					<Description>
						El componente Date Picker recibe una propiedad llamada disable que es de tipo boolean,
						al estar esta propiedad en true el componente no podra desplegar el calendario, ya que
						su uso es de solo lectura.
					</Description>

					<Canvas>
						<DatePicker onChange={() => {}} value={new Date()} readOnly={false} disable={true} />
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
						Aviso
						<hr className='my-4' />
					</Subtitle>
					<Description>
						Al ser un componente importado de una libreria de componentes, este ya maneja sus
						colores e iconos predeterminados, por lo cual no es necesario importar iconos o agregar
						la paleta de colores.
					</Description>
				</>
			)
		}
	}
} as Meta<typeof DatePicker>;

export const Base: Story = {
	args: {
		disable: false,
		readOnly: false
	}
};
