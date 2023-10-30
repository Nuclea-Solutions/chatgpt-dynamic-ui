'use client';
import Link from 'next/link';

export default function CalendarLink() {
	return (
		<div className='w-full mb-2'>
			<Link
				href={process.env.NEXT_PUBLIC_CALENDAR_URL ?? ''}
				target='_blank'
				className='p-2 lg:px-4 mx-2 border border-solid text-gray-900 bg-white hover:bg-gray-100 border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2'
			>
				<svg xmlns='http://www.w3.org/2000/svg' width={24} height={24}>
					<g
						fill='none'
						stroke='#9ca3af'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
					>
						<rect width={18} height={18} x={3} y={4} rx={2} ry={2} />
						<path d='M16 2v4M8 2v4m-5 4h18' />
					</g>
				</svg>
				<span className='px-2'>Ver calendario para agendar cita</span>
			</Link>
		</div>
	);
}
