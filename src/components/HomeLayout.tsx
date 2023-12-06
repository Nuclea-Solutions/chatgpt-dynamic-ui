import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import LayoutNavbar from './LayoutNavbar';
import { usesidebar } from '@/store/useSidebar';
import LayoutSidebar from './LayoutSidebar';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
	const openSidebar = usesidebar((state) => state.openSidebar);
	const handleToggleSidebar = usesidebar((state) => state.setHandleToggleSidebar);

	return (
		<NextUIProvider className='flex justify-center h-full'>
			<div className='h-full w-full'>
				<LayoutNavbar handleToggleSidebar={handleToggleSidebar} openSidebar={openSidebar} />
				{children}

				{/* <div className='mt-2'>
					<span>
						Free Research Preview. ChatGPT may produce inaccurate information about people, places,
						or facts.
						<span className='underline'>ChatGPT September 25 Version</span>
					</span>
				</div> */}
			</div>
		</NextUIProvider>
	);
};

export default HomeLayout;
