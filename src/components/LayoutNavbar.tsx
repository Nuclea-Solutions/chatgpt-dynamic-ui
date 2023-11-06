'use client';
import React from 'react';
import NavbarSmallScreenComponent from '@/stories/navbar_small_screen/NavbarSmallScreen.component';
import NavbarComponent from '@/stories/navbar/Navbar.component';
import { useParams } from 'next/navigation';
import useMessagesStore from '@/store/useMessagesStore';

const LayoutNavbar = ({ handleOpenSidebar }: { handleOpenSidebar: () => void }) => {
	const params: { id?: string } = useParams();
	const messages = useMessagesStore((state) => state.messages);

	return (
		<>
			<NavbarSmallScreenComponent handleOpenSidebar={handleOpenSidebar} />
			<NavbarComponent
				isNewChat={!params.id}
				hide={messages.every((item) => item.role === 'system')}
			/>
		</>
	);
};

export default LayoutNavbar;
