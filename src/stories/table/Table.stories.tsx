import { Canvas, Controls, Description, Story, Subtitle, Title } from '@storybook/blocks';
import { TableComponent } from './Table';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof TableComponent>;

export default {
	title: 'Main/Table',
	component: TableComponent,
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
						<li>Componente vacio</li>
						<li>Controls</li>
						<li>Paleta de colores</li>
						<li>Iconos</li>
					</ul>
					<Subtitle>
						Descripcion general
						<hr className='my-4' />
					</Subtitle>

					<Description>
						Se puede crear este componente utilizando la libreria de de nextui table. Este
						componente recibe dos parametros del que son de tipo arreglo de objetos, el primer
						parametro es para las columnas y el segundo para las filas, la documentacion oficial
						para crear la tabla en el siguiente link: https://nextui.org/docs/components/table
					</Description>
					<Canvas>
						<Story of={Base} />
					</Canvas>

					<Subtitle>
						Componente vacio <hr className='my-4' />
					</Subtitle>

					<Description>
						El componente de table al no recibir datos en el parametro row, tiene la funcion de
						mostrar un mensaje para avisar al usuario que la tabla esta vacia. Este componente viene
						con los colores predeterminados por la libreria nextui.
					</Description>

					<Canvas>
						<Story of={BaseEmpty} />
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
				</>
			)
		}
	}
} as Meta<typeof TableComponent>;

export const Base: Story = {
	args: {
		rows: [
			{ name: 'Jack', age: 28, address: 'some where', key: '1' },
			{ name: 'Rose', age: 36, address: 'some where', key: '2' }
		],
		columns: [
			{
				title: 'Name',
				dataIndex: 'name',
				key: 'name',
				width: 100,
				className: 'text-left px-2 py-2 border-2 border-white'
			},
			{
				title: 'Age',
				dataIndex: 'age',
				key: 'age',
				width: 100,
				className: 'text-left px-2 py-2 border-2 border-white'
			},
			{
				title: 'Address',
				dataIndex: 'address',
				key: 'address',
				width: 200,
				className: 'text-left px-2 py-2 border-2 border-white'
			},
			{
				title: 'Operations',
				dataIndex: '',
				key: 'operations',
				//render: () => <a href="#">Delete</a>,
				className: 'text-left px-2 py-2 border-2 border-white',
				width: 200
			}
		]
	}
};

export const BaseEmpty: Story = {
	args: {
		...Base.args,
		rows: []
	}
};
