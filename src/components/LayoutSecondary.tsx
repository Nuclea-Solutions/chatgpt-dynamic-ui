'use client';
import React, { useState } from 'react';
import LayoutSidebar from './LayoutSidebar';
import LayoutNavbar from './LayoutNavbar';
import RightSideBarComponent from '@/stories/right_sidebar/RightSideBar.component';
import FeedbackModalComponent from '@/stories/feedback_modal/FeedbackModal.component';
import { useFeedbackModal } from '../store/useFeedbackModal';

const LayoutSecondary = ({ children }: { children: React.ReactNode }) => {
	const [openSidebar, setOPenSidebar] = useState<boolean>(true);

	const handleOpenSidebar = () => {
		setOPenSidebar(true);
	};

	const handleToggleSidebar = () => {
		setOPenSidebar((prev) => !prev);
	};

	const openModal = useFeedbackModal((state) => state.openModal);
	const like = useFeedbackModal((state) => state.like);

	return (
		<>
			{/* <LayoutSidebar
				openSidebar={openSidebar}
				handleOpenSidebar={handleOpenSidebar}
				handleToggleSidebar={handleToggleSidebar}
			/> */}
			<div className='w-full max-h-[100vh] overflow-scroll overflow-x-hidden'>
				{/* <LayoutNavbar handleToggleSidebar={handleToggleSidebar} /> */}
				{children}
			</div>

			<div
				className={`fixed w-screen h-screen top-0 left-0 flex justify-center items-center z-40 bg-gray-700 bg-opacity-50 ${
					!openModal && 'hidden'
				} `}
			>
				<FeedbackModalComponent like={like} />
			</div>
		</>
	);
};

export default LayoutSecondary;
