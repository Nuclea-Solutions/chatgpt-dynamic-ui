'use client';
import { useEffect, useState } from 'react';
import SidebarComponent from './Sidebar';
import useConversationsStore from '@/store/useConversationsStore';
import axios from 'axios';
import { Conversation } from '@/types/conversation';

export default function LayoutSidebar({
	openSidebar,
	handleOpenSidebar,
	handleToggleSidebar
}: {
	openSidebar: boolean;
	handleOpenSidebar: () => void;
	handleToggleSidebar: () => void;
}) {
	const [setConversationList, conversationList] = useConversationsStore((state) => [
		state.setConversationList,
		state.conversationList
	]);

	const getConversations = async () => {
		try {
			const response = await axios.get('/api/conversations');
			setConversationList([...conversationList, ...response.data.conversations]);
		} catch (err) {
			console.log({ err });
		}
	};

	useEffect(() => {
		getConversations();
	}, []);

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
