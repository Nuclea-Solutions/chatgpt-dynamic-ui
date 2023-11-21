import React from 'react';
//fill-rule
const NavbarSmallScreenComponent = ({
	handleToggleSidebar
}: {
	handleToggleSidebar: () => void;
}) => {
	return (
		<div className='sticky top-0 z-20 flex items-center border-b  pl-1 pt-1 text-black sm:pl-3 md:hidden bg-white dark:bg-gray-700 dark:text-white'>
			<button
				type='button'
				className='-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white'
				onClick={handleToggleSidebar}
			>
				<svg
					width='18'
					height='18'
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
			<h1 className='flex-1 text-center text-base font-extralight'>Ancho de pantalla en React</h1>
			<button type='button' className='px-3'>
				<svg
					width='18'
					height='18'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='icon-md'
				>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M16.7929 2.79289C18.0118 1.57394 19.9882 1.57394 21.2071 2.79289C22.4261 4.01184 22.4261 5.98815 21.2071 7.20711L12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16H9C8.44772 16 8 15.5523 8 15V12C8 11.7348 8.10536 11.4804 8.29289 11.2929L16.7929 2.79289ZM19.7929 4.20711C19.355 3.7692 18.645 3.7692 18.2071 4.2071L10 12.4142V14H11.5858L19.7929 5.79289C20.2308 5.35499 20.2308 4.64501 19.7929 4.20711ZM6 5C5.44772 5 5 5.44771 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34314 4.34315 3 6 3H10C10.5523 3 11 3.44771 11 4C11 4.55228 10.5523 5 10 5H6Z'
						fill='currentColor'
					></path>
				</svg>
			</button>
		</div>
	);
};

export default NavbarSmallScreenComponent;
