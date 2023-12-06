import NavbarCustomGPTComponent from '@/stories/second_phase/navbar_customGPT/NavbarCustomGPT.component';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='w-full h-full'>
			<NavbarCustomGPTComponent />
			{children}
		</div>
	);
};

export default layout;
