'use client';
import React, { useState } from 'react';
import LayoutSidebar from './LayoutSidebar';
import FeedbackModalComponent from '@/stories/feedback_modal/FeedbackModal.component';
import { useFeedbackModal } from '../store/useFeedbackModal';
import { usesidebar } from '@/store/useSidebar';
import LayoutNavbar from './LayoutNavbar';
import ShareLinkToChatComponent from '@/stories/share_link_to_chat/ShareLinkToChat.component';
import { useshareLinkToChat } from '@/store/useLinkToChatComponent';

const LayoutSecondary = ({ children }: { children: React.ReactNode }) => {
	const openSidebar = usesidebar((state) => state.openSidebar);
	const handleOpenSidebar = usesidebar((state) => state.setOpenSidebar);
	const handleToggleSidebar = usesidebar((state) => state.setHandleToggleSidebar);
	const openShareLinkToChat = useshareLinkToChat((state) => state.openShareLinkToChat);
	const openModal = useFeedbackModal((state) => state.openModal);
	const like = useFeedbackModal((state) => state.like);

	return (
		<>
			<LayoutSidebar
				openSidebar={openSidebar}
				handleOpenSidebar={handleOpenSidebar}
				handleToggleSidebar={handleToggleSidebar}
			/>
			<div className='w-full max-h-[100vh] overflow-y-auto overflow-x-hidden pt-28 md:pt-16'>
				{children}
			</div>

			<div
				className={`fixed w-screen h-screen top-0 left-0 flex justify-center items-center z-40 bg-gray-700 bg-opacity-50 ${
					!openModal && 'hidden'
				} `}
			>
				<FeedbackModalComponent like={like} />
			</div>
			<div
				className={`fixed w-screen h-screen top-0 left-0 flex items-center z-40 bg-gray-700 bg-opacity-50 ${
					!openShareLinkToChat && 'hidden'
				}`}
			>
				<ShareLinkToChatComponent />
			</div>
		</>
	);
};

export default LayoutSecondary;
