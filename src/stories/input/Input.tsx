import * as React from 'react';
import { Plus } from '../../components/Icons';
import { Input } from '@nextui-org/react';
type IconRefIndex = {
	[key: string]: React.JSX.Element;
};

const ICONS_REF: IconRefIndex = {
	// @ts-ignore
	plus: Plus
};

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	actions?: {
		position: 'start' | 'end';
		iconButton: string;
	};
}

const InputComponent = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type = 'text', actions, ...props }, ref) => {
		return (
			<div>
				{actions && actions.position === 'start' && ICONS_REF[actions.iconButton]}
				{/* <input
          type={type}
          className={
            className ??
            "w-[45vw] border-0 p-2 mb-8 bg-inherit text-gray-50 text-xl"
          }
          ref={ref}
          {...props}
        /> */}

				<Input
					type={type}
					variant='bordered'
					ref={ref}
					placeholder='Enviar un mensaje...'
					size='lg'
					className='w-full max-w-md'
				/>
				{actions && actions.position === 'end' && ICONS_REF[actions.iconButton]}
			</div>
		);
	}
);
Input.displayName = 'Input';

export { InputComponent };
