import React from 'react';

const NavbarSmallScreenComponent = () => {
	return (
		<div className='sticky top-0 z-20 flex items-center border-b border-white/20 pl-1 pt-1 text-gray-600 sm:pl-3 md:hidden bg-white dark:bg-gray-700 dark:text-white'>
			<button
				type='button'
				className='-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white'
			>
				<svg
					stroke='currentColor'
					fill='none'
					strokeWidth='2'
					viewBox='0 0 24 24'
					strokeLinecap='round'
					strokeLinejoin='round'
					aria-hidden='true'
					className='icon-lg'
					height='1em'
					width='1em'
					xmlns='http://www.w3.org/2000/svg'
				>
					<line x1='3' y1='12' x2='21' y2='12'></line>
					<line x1='3' y1='6' x2='21' y2='6'></line>
					<line x1='3' y1='18' x2='21' y2='18'></line>
				</svg>
			</button>
			<h1 className='flex-1 text-center text-base font-normal'>Ancho de pantalla en React</h1>
			<button type='button' className='px-3'>
				<svg
					stroke='currentColor'
					fill='none'
					strokeWidth='2'
					viewBox='0 0 24 24'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='icon-lg'
					height='1em'
					width='1em'
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
