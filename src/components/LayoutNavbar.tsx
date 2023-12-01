'use client';
import React from 'react';
import NavbarSmallScreenComponent from '@/stories/navbar_small_screen/NavbarSmallScreen.component';
import NavbarComponent from '@/stories/navbar/Navbar.component';
import { useParams } from 'next/navigation';
import useMessagesStore from '@/store/useMessagesStore';

const LayoutNavbar = ({
	handleToggleSidebar,
	openSidebar
}: {
	handleToggleSidebar: () => void;
	openSidebar: boolean;
}) => {
	const params: { id?: string } = useParams();
	const messages = useMessagesStore((state) => state.messages);

	return (
		<div className={` w-full z-30 sticky top-0`}>
			<NavbarSmallScreenComponent handleToggleSidebar={handleToggleSidebar} />
			<NavbarComponent
				isNewChat={!params.id}
				hide={messages.every((item) => item.role === 'system')}
				openSidebar={openSidebar}
			/>
		</div>
	);
};

export default LayoutNavbar;
