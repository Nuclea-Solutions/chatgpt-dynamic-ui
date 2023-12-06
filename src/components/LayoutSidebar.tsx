'use client';
import { useState } from 'react';
import SidebarComponent from './Sidebar';
import { usePathname } from 'next/navigation';

export default function LayoutSidebar({
	openSidebar,
	handleOpenSidebar,
	handleToggleSidebar
}: {
	openSidebar: boolean;
	handleOpenSidebar: () => void;
	handleToggleSidebar: () => void;
}) {
	// const [list, setList] = useState<Conversation[] | []>([]);
	const actualPath = usePathname();
	if (actualPath === '/custom_gpt') {
		return null;
	}

	return (
		<SidebarComponent
			userName='Anónimo'
			conversations={[]}
			photoUrl='https://www.pngkit.com/png/full/281-2812821_user-account-management-logo-user-icon-png.png'
			openSidebar={openSidebar}
			handleOpenSidebar={handleOpenSidebar}
			handleToggleSidebar={handleToggleSidebar}
		></SidebarComponent>
	);
}
