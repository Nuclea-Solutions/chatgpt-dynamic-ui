'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import SidebarComponent from './Sidebar';
import useConversationsStore from '@/store/useConversationsStore';
import axios from 'axios';

export default function LayoutSidebar({
	openSidebar,
	handleOpenSidebar,
	handleToggleSidebar
}: {
	openSidebar: boolean;
	handleOpenSidebar: () => void;
	handleToggleSidebar: () => void;
}) {
	const actualPath = usePathname();
	const [setConversationList, conversationList] = useConversationsStore((state) => [
		state.setConversationList,
		state.conversationList
	]);

	const getConversations = async () => {
		try {
			const response = await axios.get('/api/conversations');
			if (!response.data.conversations.length) return;
			setConversationList([...conversationList, ...response.data.conversations]);
		} catch (err) {
			console.error({ err });
		}
	};

	useEffect(() => {
		getConversations();
	}, []);

	if (actualPath === '/custom_gpt') {
		return null;
	}
	return (
		<SidebarComponent
			userName='Anónimo'
			photoUrl='https://www.pngkit.com/png/full/281-2812821_user-account-management-logo-user-icon-png.png'
			openSidebar={openSidebar}
			handleOpenSidebar={handleOpenSidebar}
			handleToggleSidebar={handleToggleSidebar}
		></SidebarComponent>
	);
}
