import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { IoSend } from 'react-icons/io5';

const DatePickerCustom = ({
	readOnly = false,
	disable = false,
	onChange,
	value
}: {
	readOnly?: boolean;
	disable?: boolean;
	onChange: (value: Dayjs | null) => void;
	value: Date;
}) => {
	// const [date, setDate] = useState<Dayjs | null>(dayjs(new Date()));
	return (
		<div className='flex w-full full-width-child items-center'>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DemoContainer components={['DatePicker', 'DatePicker']}>
					<DatePicker
						label='Selecciona un afecha'
						value={value}
						onChange={(newValue) => {
							if (!newValue) return;
							onChange(dayjs(new Date(newValue)));
						}}
						readOnly={readOnly}
						disabled={disable}
					/>
				</DemoContainer>
			</LocalizationProvider>
			<button
				type='submit'
				className={`w-[38px] h-[38px] p-0 mx-2 flex items-center justify-center text-[#ccc] rounded-[8px] ${
					value ? 'bg-[#19c37d]' : 'bg-none'
				}`}
				disabled={!value}
			>
				<IoSend color={value ? 'white' : '#ccc'} size={20} />
			</button>
		</div>
	);
};

export default DatePickerCustom;
