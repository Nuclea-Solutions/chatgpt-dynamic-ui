import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import LayoutNavbar from './LayoutNavbar';
import { usesidebar } from '@/store/useSidebar';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
	const handleToggleSidebar = usesidebar((state) => state.setHandleToggleSidebar);
	const openSidebar = usesidebar((state) => state.openSidebar);
	return (
		<NextUIProvider className='h-full'>
			<LayoutNavbar handleToggleSidebar={handleToggleSidebar} openSidebar={openSidebar} />
			<div className='h-full w-full'>{children}</div>
		</NextUIProvider>
	);
};

export default HomeLayout;
