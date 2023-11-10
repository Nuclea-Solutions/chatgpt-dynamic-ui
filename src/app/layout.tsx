import './globals.css';
import { cn } from '../utils/utils';
import localFont from 'next/font/local';
import LayoutSecondary from '@/components/LayoutSecondary';

export const metadata = {
	title: 'ChatGPT Dynamic UI',
	description: ''
};

const sohne = localFont({ src: '../../fonts/Test Söhne/TestSöhne-Buch.otf' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body
				style={{ background: 'blue' }}
				className={cn(
					sohne.className,
					'bg-blue dark:bg-gray-700 min-h-screen flex text-[#374151] w-full text-base'
				)}
			>
				<LayoutSecondary>{children}</LayoutSecondary>
			</body>
		</html>
	);
}
