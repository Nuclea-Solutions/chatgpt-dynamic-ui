import { Canvas, Description, Subtitle, Title } from '@storybook/blocks';
import InputGoogleMapsAutoCompleteWithMap from './InputGoogleMapsAutoCompleteWhitMap.component';
import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Main/InputGoogleMapsAutoComplete',
	component: InputGoogleMapsAutoCompleteWithMap,
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
						<li>Componente</li>
						<li>Nota</li>
					</ul>
					<Subtitle>
						Descripcion general
						<hr className='my-4' />
					</Subtitle>

					<Description>
						Para crear este componente se necesita intalar el api de google maps
						@react-google-maps/api para importar los componentes necesarios para su utilizacion, asi
						mismo se debe crear un proyecto en https://developers.google.com, despues de crear el
						proyecto se deben habilitar las api necesarias para el proyecto, para el buscador con
						autocomplete se requiere habilitar la api de "Places API" y para el mapa se habilita
						"Maps JavaScript API". Una vez concluidos los pasos anteriores se tiene que crear la key
						que se utilizara en el proyecto.
					</Description>
					<Canvas />

					<Subtitle>
						Componente
						<hr className='my-4' />
					</Subtitle>

					<Description>
						En este componente se utiliza el input de la libreria nextui en el siguiente link se
						encuentra la documentacion: https://nextui.org/docs/components/input. Para cargar el
						mapa y el autocomplete es necesario importar el componente LoadScript para envolver todo
						nuestros componentes, el mismo que necesita los parametros key e libraries, para su
						correcto funcionamiento. El input debe ir envuelto en un componente padre
						StandaloneSearchBox que se importa de react-google-maps/api para que asi se pueda
						autocompletar el input, por ultimo tenemos que importar GoogleMap de la misma libreria
						para poder mostrar el mapa.
					</Description>

					<Canvas />

					<Subtitle>
						Nota
						<hr className='my-4' />
					</Subtitle>
					<Description>
						El componente no recibe parametros por lo cual carece de controles y los estilos vienen
						predeterminados por las librerias de componentes.
					</Description>
				</>
			)
		}
	}
} as Meta<typeof InputGoogleMapsAutoCompleteWithMap>;

type Story = StoryObj<typeof InputGoogleMapsAutoCompleteWithMap>;

export const Base: Story = {
	args: {}
};
