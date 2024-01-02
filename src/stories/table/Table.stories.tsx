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
						Index <hr className='my-4' />
					</Subtitle>
					<ul>
						<li>General description</li>
						<li>Empty component</li>
						<li>Controls</li>
					</ul>
					<Subtitle>
						General description
						<hr className='my-4' />
					</Subtitle>

					<Description>
						This component can be created using the Next UI table library. The component receives
						two parameters, both of which are arrays of objects. The first parameter is for defining
						the columns, and the second parameter is for specifying the rows. You can find the
						official documentation for creating the table at the following link:
						https://nextui.org/docs/components/table
					</Description>
					<Canvas>
						<Story of={Base} />
					</Canvas>

					<Subtitle>
						Empty component <hr className='my-4' />
					</Subtitle>

					<Description>
						When the 'Table' component doesn't receive any data in the 'row' parameter, its purpose
						is to display a message notifying the user that the table is empty. This component uses
						the default colors provided by the Next UI library.
					</Description>

					<Canvas>
						<Story of={BaseEmpty} />
					</Canvas>

					<Subtitle>
						Controls
						<hr className='my-4' />
					</Subtitle>
					<Description>
						In the 'Controls' section, it showcases the variables that the component receives for
						customization.
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
