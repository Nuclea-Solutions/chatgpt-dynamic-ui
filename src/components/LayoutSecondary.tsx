'use client';
import React, { useState } from 'react';
import LayoutSidebar from './LayoutSidebar';
import LayoutNavbar from './LayoutNavbar';
import RightSideBarComponent from '@/stories/right_sidebar/RightSideBar.component';

const LayoutSecondary = ({ children }: { children: React.ReactNode }) => {
	const [openSidebar, setOPenSidebar] = useState<boolean>(true);

	const handleOpenSidebar = () => {
		setOPenSidebar((prev) => !prev);
	};
	return (
		<>
			<LayoutSidebar openSidebar={openSidebar} handleOpenSidebar={handleOpenSidebar} />
			<div className='w-full max-h-[100vh] overflow-scroll overflow-x-hidden'>
				<LayoutNavbar handleOpenSidebar={handleOpenSidebar} />
				{children}
			</div>
			<RightSideBarComponent />
		</>
	);
};

export default LayoutSecondary;
