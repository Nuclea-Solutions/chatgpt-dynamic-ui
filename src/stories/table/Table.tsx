import React from 'react';
import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
	getKeyValue
} from '@nextui-org/react';

export const TableComponent = ({ rows, columns }: { rows: any[]; columns: any[] }) => {
	return (
		<Table
			removeWrapper
			aria-label='Example static collection table'
			className='w-full max-w-md shadow-md'
		>
			<TableHeader columns={columns}>
				{(column) => <TableColumn key={column.id}>{column.title}</TableColumn>}
			</TableHeader>
			<TableBody items={rows} emptyContent={'No hay informacion por mostrar'}>
				{(row) => (
					<TableRow key={row.label}>
						{(columnKey) => <TableCell>{getKeyValue(row ?? '--', columnKey)}</TableCell>}
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
};
