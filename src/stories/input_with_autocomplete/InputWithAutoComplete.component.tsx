import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

type Options = {
	label: string;
	year: number;
};

interface InputProps {
	options: Array<Options>;
	labelName: string;
}

export const InputWidthAutoCompleteComponent = ({ options, labelName }: InputProps) => {
	return (
		<Autocomplete
			disablePortal
			id='combo-box-demo'
			options={options}
			sx={{ width: '100%', maxWidth: 400 }}
			renderInput={(params) => (
				<TextField {...params} placeholder={labelName} className='rounded-3xl' variant='outlined' />
			)}
		/>
	);
};
