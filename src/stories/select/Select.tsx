import React from 'react';
import { Select, SelectItem } from '@nextui-org/react';

const SelectComponent = ({
	options,
	title
}: {
	options: { value: string; label: string }[];
	title: String;
}) => {
	return (
		<Select variant='bordered' label={title} className='w-full max-w-md'>
			{options.map((option) => (
				<SelectItem key={option.value} value={option.value}>
					{option.label}
				</SelectItem>
			))}
		</Select>
	);
};

export default SelectComponent;
