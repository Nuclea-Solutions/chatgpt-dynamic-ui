import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';

import React from 'react';

const HelpButtonComponent = () => {
	return (
		<Dropdown>
			<DropdownTrigger>
				<div className='hidden xl:flex items-center justify-center h-6 w-6 p-3 border rounded-full bg-white border-gray-300 text-lg font-semibold text-gray-500 dark:bg-[#444654] dark:text-gray-200 cursor-pointer'>
					?
				</div>
			</DropdownTrigger>
			<DropdownMenu>
				<DropdownItem key='new'>
					<div className='flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 text-sm '>
						{/* <Link href='#'> */}
						<svg
							stroke='currentColor'
							fill='none'
							strokeWidth='2'
							viewBox='0 0 24 24'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='icon-sm'
							height='1em'
							width='1em'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
							<polyline points='15 3 21 3 21 9'></polyline>
							<line x1='10' y1='14' x2='21' y2='3'></line>
						</svg>
						<span className='text-xs'>Help &amp; FAQ</span>
						{/* </Link> */}
					</div>
				</DropdownItem>
				<DropdownItem key='copy'>
					<div className='flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 text-sm '>
						{/* <Link href='#'> */}
						<svg
							stroke='currentColor'
							fill='none'
							strokeWidth='2'
							viewBox='0 0 24 24'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='icon-sm'
							height='1em'
							width='1em'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
							<polyline points='15 3 21 3 21 9'></polyline>
							<line x1='10' y1='14' x2='21' y2='3'></line>
						</svg>
						<span className='text-xs'>Terms &amp; policies</span>
						{/* </Link> */}
					</div>
				</DropdownItem>
				<DropdownItem key='edit'>
					<div className='flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 text-sm '>
						<svg
							stroke='currentColor'
							fill='none'
							strokeWidth='2'
							viewBox='0 0 24 24'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='icon-sm'
							height='1em'
							width='1em'
							xmlns='http://www.w3.org/2000/svg'
						>
							<rect x='3' y='3' width='7' height='7'></rect>
							<rect x='14' y='3' width='7' height='7'></rect>
							<rect x='14' y='14' width='7' height='7'></rect>
							<rect x='3' y='14' width='7' height='7'></rect>
						</svg>
						<span className='text-xs'>Keyboard shortcuts</span>
					</div>
				</DropdownItem>
			</DropdownMenu>
		</Dropdown>
	);
};

export default HelpButtonComponent;

{
	/* <a
	as='a'
	href='https://openai.com/policies'
	target='_blank'
	class='flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm hover:bg-gray-100 dark:hover:bg-gray-800'
	id='headlessui-menu-item-:r99:'
	role='menuitem'
	tabindex='-1'
	data-headlessui-state=''
>
	<svg
		stroke='currentColor'
		fill='none'
		strokeWidth='2'
		viewBox='0 0 24 24'
		strokeLinecap='round'
		strokeLinejoin='round'
		class='icon-sm'
		height='1em'
		width='1em'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
		<polyline points='15 3 21 3 21 9'></polyline>
		<line x1='10' y1='14' x2='21' y2='3'></line>
	</svg>
	<span class='text-xs'>Terms &amp; policies</span>
</a>; */
}
