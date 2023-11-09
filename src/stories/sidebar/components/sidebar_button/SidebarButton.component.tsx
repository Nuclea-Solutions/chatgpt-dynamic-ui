import React from 'react';

const SidebarButtonComponent = ({
	handleOpenSidebar,
	openSidebar
}: {
	handleOpenSidebar: () => void;
	openSidebar: Boolean;
}) => {
	return (
		<div
			className={`hidden md:flex px-3 min-h-[44px] py-1 transition-colors duration-200 cursor-pointer text-sm rounded border border-white/20 hover:bg-gray-500/10 h-11 w-11 flex-shrink-0 items-center justify-center dark:bg-transparent ${
				openSidebar ? '' : 'absolute visible z-50 border-none text-gray-700'
			}`}
			onClick={handleOpenSidebar}
		>
			<svg
				stroke='currentColor'
				fill='none'
				strokeWidth='2'
				viewBox='0 0 24 24'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='icon-sm'
				height='1.5rem'
				width='1.5rem'
				xmlns='http://www.w3.org/2000/svg'
			>
				<rect x='3' y='3' width='18' height='18' rx='2' ry='2'></rect>
				<line x1='9' y1='3' x2='9' y2='21'></line>
			</svg>
		</div>
	);
};

export default SidebarButtonComponent;
