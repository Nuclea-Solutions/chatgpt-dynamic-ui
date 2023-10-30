import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '../utils/utils';
import LayoutSidebar from '../components/LayoutSidebar';
import RightSideBarComponent from '@/stories/right_sidebar/RightSideBar.component';
import LayoutNavbar from '@/components/LayoutNavbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'ChatGPT Dynamic UI',
	description: ''
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body
				className={cn(
					inter.className,
					'bg-white dark:bg-gray-700 min-h-screen flex text-[#374151] w-full font-sans text-base'
				)}
			>
				<LayoutSidebar />
				<div className='w-full max-h-[100vh] overflow-scroll'>
					<LayoutNavbar />
					{children}
				</div>
				<RightSideBarComponent />
			</body>
		</html>
	);
}
