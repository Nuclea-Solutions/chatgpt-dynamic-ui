import { Canvas, Controls, Description, Subtitle, Title } from '@storybook/blocks';
import Select from './Select';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Select>;

export default {
	title: 'Main/Select',
	component: Select,
	tags: ['autodocs'],
	parameters: {
		docs: {
			page: () => (
				<>
					<Title />
					<Subtitle>
						Index
						<hr className='my-4' />
					</Subtitle>
					<ul>
						<li>General description</li>
						<li>Component</li>
						<li>Controls</li>
						<li>Colors palette</li>
						<li>Icons</li>
					</ul>
					<Subtitle>
						General description
						<hr className='my-4' />
					</Subtitle>

					<Description>
						This component can be created using the Next UI component library. It only accepts two
						parameters, 'options' and 'title.' You can find the official documentation for this
						component at the following link: https://nextui.org/docs/components/select.
					</Description>
					<Canvas />

					<Subtitle>
						Component <hr className='my-4' />
					</Subtitle>

					<Description>
						The Select component accepts two parameters, 'title' and the options that the component
						will render. 'Title' is a text string, and the component receives the rendering options
						as an array of objects. The component's colors are predefined by the component library.
					</Description>

					<Canvas />

					<Subtitle>
						Controls
						<hr className='my-4' />
					</Subtitle>
					<Description>
						In the controls section, it showcases the variables that the component receives for
						customization.
					</Description>
					<Controls />
				</>
			)
		}
	}
} as Meta<typeof Select>;

export const Base: Story = {
	args: {
		options: [
			{ label: 'Opción 1', value: 'opcion 1' },
			{ label: 'Opción 2', value: 'opcion 2' },
			{ label: 'Opción 3', value: 'opcion 3' }
		],
		title: 'Selecciona una opcion'
	}
};
