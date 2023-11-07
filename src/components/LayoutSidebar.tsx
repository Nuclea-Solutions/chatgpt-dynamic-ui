'use client';
import { useEffect, useState } from 'react';
import SidebarComponent from './Sidebar';
import useConversationsStore from '@/store/useConversationsStore';

export default function LayoutSidebar({
	openSidebar,
	handleOpenSidebar
}: {
	openSidebar: boolean;
	handleOpenSidebar: () => void;
}) {
	const [list, setList] = useState<Conversation[] | []>([]);
	const setConversationList = useConversationsStore((state) => state.setConversationList);

	useEffect(() => {
		fetch('conversation.json')
			.then((res) => res.json())
			.then((res) => {
				setList(res);
				setConversationList(res);
			})
			.catch(console.log);
	}, []);

	return (
		<SidebarComponent
			userName='Anónimo'
			conversations={list}
			photoUrl='https://www.pngkit.com/png/full/281-2812821_user-account-management-logo-user-icon-png.png'
			openSidebar={openSidebar}
			handleOpenSidebar={handleOpenSidebar}
		></SidebarComponent>
	);
}
