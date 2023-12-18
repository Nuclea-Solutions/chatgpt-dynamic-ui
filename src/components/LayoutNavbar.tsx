'use client';
import React from 'react';
import NavbarSmallScreenComponent from '@/stories/navbar_small_screen/NavbarSmallScreen.component';
import NavbarComponent from '@/stories/navbar/Navbar.component';
import { useParams, usePathname } from 'next/navigation';
import useMessagesStore from '@/store/useMessagesStore';
import { useChatGptVersion } from '../store/useChatGptVersion';

const LayoutNavbar = ({
	handleToggleSidebar,
	openSidebar
}: {
	handleToggleSidebar: () => void;
	openSidebar: boolean;
}) => {
	const params: { id?: string } = useParams();
	const messages = useMessagesStore((state) => state.messages);
	const publicVersion = useChatGptVersion((state) => state.publicVersion);
	const actualPath = usePathname();

	if (actualPath === '/custom_gpt' || actualPath === '/gpts') {
		return null;
	}
	return (
		<div className={` w-full z-30 sticky top-0`}>
			<NavbarSmallScreenComponent
				handleToggleSidebar={handleToggleSidebar}
				publicVersion={publicVersion}
			/>
			<NavbarComponent
				isNewChat={!params.id}
				hide={messages.every((item) => item.author.role === 'system')}
				openSidebar={openSidebar}
			/>
		</div>
	);
};

export default LayoutNavbar;
