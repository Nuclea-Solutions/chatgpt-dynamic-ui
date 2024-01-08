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
						Index <hr className='my-4' />
					</Subtitle>
					<ul>
						<li>General description</li>
						<li>Component</li>
						<li>Note</li>
					</ul>
					<Subtitle>
						General description
						<hr className='my-4' />
					</Subtitle>

					<Description>
						To create this component, you need to install the Google Maps API @react-google-maps/api
						to import the necessary components for its use. Additionally, you must create a project
						on https://developers.google.com. After creating the project, you need to enable the
						necessary APIs for the project. To use the autocomplete search, you should enable the
						"Places API," and for the map, enable "Maps JavaScript API." Once you've completed the
						previous steps, you need to generate the API key that will be used in the project.
					</Description>
					<Canvas />

					<Subtitle>
						Component
						<hr className='my-4' />
					</Subtitle>

					<Description>
						In this component, the input from the Next UI library is used. You can find the
						documentation at the following link: https://nextui.org/docs/components/input. To load
						the map and enable autocomplete, it's necessary to import the LoadScript component to
						wrap all your components. This component requires the parameters key and libraries for
						proper functionality. The input should be wrapped in a parent component
						StandaloneSearchBox imported from react-google-maps/api to enable autocomplete for the
						input. Finally, you need to import GoogleMap from the same library to display the map.
					</Description>

					<Canvas />

					<Subtitle>
						Note
						<hr className='my-4' />
					</Subtitle>
					<Description>
						In this component, the input from the Next UI library is used. You can find the
						documentation at the following link: https://nextui.org/docs/components/input. To load
						the map and enable autocomplete, it's necessary to import the LoadScript component to
						wrap all your components. This component requires the parameters key and libraries for
						proper functionality. The input should be wrapped in a parent component
						StandaloneSearchBox imported from react-google-maps/api to enable autocomplete for the
						input. Finally, you need to import GoogleMap from the same library to display the map
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
