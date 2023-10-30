import LayoutScreen from './LayoutScreen';
import type { Meta, StoryObj } from '@storybook/react';
import {
	Title,
	Description,
	Subtitle,
	Primary as PrimaryDocBlock,
	Controls,
	Canvas,
	Story
} from '@storybook/blocks';

export default {
	title: 'Main/LayoutScreen',
	component: LayoutScreen,
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
						<li>Controls</li>
						<li>Lista de componentes utilizados en el priyecto</li>
					</ul>
					<Subtitle>
						Descripcion general
						<hr className='my-4' />
					</Subtitle>

					<Description>
						Este componente es el layout de la pagina principal y es un conjunto de varios
						componentes prediseñados en este mismo proyecto, sirve para mostrar el resultado final
						del proyecto y solo recibe un parametro que es el estado "isNewChat" que sirve para
						pasarlo como parametro a los componentes hijos que requieren este parametro.
					</Description>
					<Canvas>
						<Story />
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
						Lista de componentes utilizados en esta story
						<hr className='my-4' />
					</Subtitle>
					<Description>
						En este apartado se muestran los componentes utilizados para crear este componente, los
						componentes se encuentran en este mismo proyecto.
					</Description>
					<ul>
						<li>Sidebar</li>
						<li>SideBarButton</li>
						<li>Nabvar</li>
						<li>NavbarSmallScreen</li>
						<li>RihtSidebar</li>
						<li>InputWithButton</li>
						<li>Toggle</li>
						<li>ScrollButton</li>
						<li>RegenerateButton</li>
						<li>HelpButton</li>
						<li>DefaultOptionsCard</li>
					</ul>
				</>
			)
		}
	}
} as Meta<typeof LayoutScreen>;

type Story = StoryObj<typeof LayoutScreen>;

export const Base: Story = {
	args: {
		isNewChat: false
	}
};
export const NewChat: Story = {
	args: {
		isNewChat: true
	}
};
