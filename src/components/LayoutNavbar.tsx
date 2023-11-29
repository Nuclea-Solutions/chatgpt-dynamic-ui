'use client';
import React from 'react';
import NavbarSmallScreenComponent from '@/stories/navbar_small_screen/NavbarSmallScreen.component';
import NavbarComponent from '@/stories/navbar/Navbar.component';
import { useParams } from 'next/navigation';
import useMessagesStore from '@/store/useMessagesStore';
import { useChatGptVersion } from '@/store/useChatGptVersion';
import { FaArrowRightLong } from 'react-icons/fa6';

const LayoutNavbar = ({ handleToggleSidebar }: { handleToggleSidebar: () => void }) => {
	const params: { id?: string } = useParams();
	const messages = useMessagesStore((state) => state.messages);

	return (
		<div className='sticky w-full top-0 z-20'>
			<NavbarSmallScreenComponent handleToggleSidebar={handleToggleSidebar} />
			<NavbarComponent
				isNewChat={!params.id}
				hide={messages.every((item) => item.role === 'system')}
			/>
		</div>
	);
};

export default LayoutNavbar;
