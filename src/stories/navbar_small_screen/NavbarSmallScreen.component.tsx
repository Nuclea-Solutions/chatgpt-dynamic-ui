import React from 'react';
//fill-rule
const NavbarSmallScreenComponent = ({ handleOpenSidebar }: { handleOpenSidebar: () => void }) => {
	return (
		<div className='sticky top-0 z-20 flex items-center border-b border-white/20 pl-1 pt-1 text-gray-600 sm:pl-3 md:hidden bg-white dark:bg-gray-700 dark:text-white'>
			<button
				type='button'
				className='-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white'
				onClick={handleOpenSidebar}
			>
				<svg
					width='24'
					height='24'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='icon-md'
				>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M3 8C3 7.44772 3.44772 7 4 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H4C3.44772 9 3 8.55228 3 8ZM3 16C3 15.4477 3.44772 15 4 15H14C14.5523 15 15 15.4477 15 16C15 16.5523 14.5523 17 14 17H4C3.44772 17 3 16.5523 3 16Z'
						fill='currentColor'
					></path>
				</svg>
			</button>
			<h1 className='flex-1 text-center text-base font-normal '>Ancho de pantalla en React</h1>
			<button type='button' className='px-3'>
				<svg
					stroke='currentColor'
					fill='none'
					strokeWidth='2'
					viewBox='0 0 24 24'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='icon-lg'
					height='1.5rem'
					width='1.5rem'
					xmlns='http://www.w3.org/2000/svg'
				>
					<line x1='12' y1='5' x2='12' y2='19'></line>
					<line x1='5' y1='12' x2='19' y2='12'></line>
				</svg>
			</button>
		</div>
	);
};

export default NavbarSmallScreenComponent;
