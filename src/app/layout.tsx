'use client';
import './globals.css';
import { cn } from '../utils/utils';
import LayoutSidebar from '../components/LayoutSidebar';
import RightSideBarComponent from '@/stories/right_sidebar/RightSideBar.component';
import LayoutNavbar from '@/components/LayoutNavbar';
import { useState } from 'react';
import localFont from 'next/font/local';

export const metadata = {
	title: 'ChatGPT Dynamic UI',
	description: ''
};

const sohne = localFont({ src: '../../fonts/Test Söhne/TestSöhne-Buch.otf' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const [openSidebar, setOPenSidebar] = useState(true);

	const handleOpenSidebar = () => {
		setOPenSidebar((prev) => !prev);
	};

	return (
		<html lang='en'>
			<body
				className={cn(
					sohne.className,
					'bg-white dark:bg-gray-700 min-h-screen flex text-[#374151] w-full text-base'
				)}
			>
				<LayoutSidebar openSidebar={openSidebar} handleOpenSidebar={handleOpenSidebar} />
				<div className='w-full max-h-[100vh] overflow-scroll'>
					<LayoutNavbar handleOpenSidebar={handleOpenSidebar} />
					{children}
				</div>
				<RightSideBarComponent />
			</body>
		</html>
	);
}
