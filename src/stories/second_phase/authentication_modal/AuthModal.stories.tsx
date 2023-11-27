import {
	Canvas,
	ColorItem,
	ColorPalette,
	Controls,
	Description,
	IconGallery,
	IconItem,
	Story,
	Subtitle,
	Title
} from '@storybook/blocks';
import AuthModal from './AuthModal.component';
import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Main/AuthModal',
	component: AuthModal,
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
						<li>General Description</li>
						<li>Component</li>
						<li>Color Palette</li>
						<li>Controls</li>
					</ul>
					<Subtitle>
						General Description
						<hr className='my-4' />
					</Subtitle>

					<Description>
						To create this component, you only need to use HTML and Tailwind. This component changes
						based on the options selected in the radio buttons, so it contains conditionals that
						render blocks of code depending on the selected option.
					</Description>
					<Canvas />

					<Subtitle>
						Component
						<hr className='my-4' />
					</Subtitle>

					<Description>
						This component receives four parameters: authenticationType, setAuthenticationType,
						authType, and setAuthType, which are used to manage the component's states and render
						the corresponding code block based on the selected option.
					</Description>

					<Subtitle>
						<h3 className='py-4'>None option</h3>
						<hr className='my-4' />
					</Subtitle>

					<Story of={AuthenticationNone} />

					<Subtitle>
						<h3 className='py-4'>API Key options</h3>
						<hr className='my-4' />
					</Subtitle>

					<Story of={AuthenticationApiKey} />

					<Subtitle>
						<h3 className='py-4'>API Key custom options</h3>
						<hr className='my-4' />
					</Subtitle>

					<Story of={AuthenticationApiKeyCustom} />

					<Subtitle>
						<h3 className='py-4'>OAuth options</h3>
						<hr className='my-4' />
					</Subtitle>

					<Story of={AuthenticationApiKey} />

					<Subtitle>
						<h3 className='py-4'>Controls</h3>
						<hr className='my-4' />
					</Subtitle>

					<Controls />

					<Subtitle>
						Color Palette
						<hr className='my-4' />
					</Subtitle>
					<ColorPalette>
						<ColorItem title='Background' subtitle='text-white' colors={{ white: '#ffffff' }} />
						<ColorItem
							title='Background dark'
							subtitle='bg-[#202123]'
							colors={{ black: '#202123' }}
						/>
						<ColorItem title='Text dark' subtitle='text-white' colors={{ white: '#ffffff' }} />
						<ColorItem
							title='Input background'
							subtitle='bg-[#353541]'
							colors={{ gray: '#353541' }}
						/>
					</ColorPalette>
				</>
			)
		}
	}
} as Meta<typeof AuthModal>;

type Story = StoryObj<typeof AuthModal>;

export const AuthenticationNone: Story = {
	args: {
		authenticationType: 'none',
		handleAuthenticationType: () => {},
		handleAuthType: () => {}
	}
};
export const AuthenticationApiKey: Story = {
	args: {
		authenticationType: 'apikey',
		authType: 'basic',
		handleAuthenticationType: () => {},
		handleAuthType: () => {}
	}
};
export const AuthenticationApiKeyCustom: Story = {
	args: {
		authenticationType: 'apikey',
		authType: 'custom',
		handleAuthenticationType: () => {},
		handleAuthType: () => {}
	}
};
export const AuthenticationOAuth: Story = {
	args: {
		authenticationType: 'oauth',
		handleAuthenticationType: () => {},
		handleAuthType: () => {}
	}
};
