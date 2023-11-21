'use client';
import { useEffect, useState } from 'react';
import SidebarComponent from './Sidebar';
import useConversationsStore from '@/store/useConversationsStore';
import axios from 'axios';

export default function LayoutSidebar({
	openSidebar,
	handleOpenSidebar
}: {
	openSidebar: boolean;
	handleOpenSidebar: () => void;
}) {
	const [list, setList] = useState<Conversation[] | []>([]);
	const setConversationList = useConversationsStore((state) => state.setConversationList);

	const getConversations = async () => {
		try {
			const response = await axios.get('/api/conversations');
			setList(response.data.conversations);
			setConversationList(response.data.conversations);
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
			conversations={list}
			photoUrl='https://www.pngkit.com/png/full/281-2812821_user-account-management-logo-user-icon-png.png'
			openSidebar={openSidebar}
			handleOpenSidebar={handleOpenSidebar}
		></SidebarComponent>
	);
}
