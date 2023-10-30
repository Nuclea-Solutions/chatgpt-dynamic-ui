import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import HelpButtonComponent from '@/stories/help_button/HelpButton.component';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<NextUIProvider className='flex justify-center h-full'>
			<div className='h-full w-full'>
				{children}
				<div className='absolute bottom-5 right-2'>
					<HelpButtonComponent />
				</div>
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
