import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SidebarButtonComponent from '@/stories/sidebar/components/sidebar_button/SidebarButton.component';
import '@/stories/sidebar/Sidebar.styles.css';
import SidebarConversationComponent from '@/stories/sidebar/components/sidebar_conversation/SidebarConversation.component';
import { Image } from '@nextui-org/react';
import useMessagesStore from '@/store/useMessagesStore';

const SidebarComponent = ({
	conversations,
	userName,
	photoUrl
}: {
	conversations: Array<Conversation> | [];
	userName: String;
	photoUrl?: string;
}) => {
	const [openSidebar, setOPenSidebar] = useState(true);

	const [daysPassed, setDaysPassed] = useState({
		today: false,
		yesterday: false,
		previousSevenDays: false,
		previousMonth: false,
		moreThanaMonth: false
	});
	const [isSelected, setIsSelected] = useState('');
	const [dropDown, setDropDown] = useState(false);
	const currentDate = new Date();
	const router = useRouter();

	const [setMessages, setMessagesComponents] = useMessagesStore((state) => [
		state.setMessages,
		state.setMessagesComponents
	]);

	//This function checks the creation date of each conversation
	const calculatedDays = (date: number) => {
		const createdDate: Date = new Date(date);
		const difInMilisecond: number = currentDate.getTime() - createdDate.getTime();
		const difInDays = difInMilisecond / (1000 * 60 * 60 * 24);

		if (difInDays < 1) {
			return 1;
		} else if (difInDays >= 1 && difInDays < 2) {
			return 2;
		} else if (difInDays <= 7 && difInDays > 2) {
			return 3;
		} else if (difInDays <= 30 && difInDays > 7) {
			return 4;
		} else {
			return 0;
		}
	};

	//This hook counts the conversations by date and adds the number of conversations by date to be able to show it in the sidebar
	useEffect(() => {
		conversations?.map((conversation) => {
			if (calculatedDays(conversation.create_time) === 1)
				setDaysPassed((prevState) => ({ ...prevState, today: true }));

			if (calculatedDays(conversation.create_time) === 2)
				setDaysPassed((prevState) => ({
					...prevState,
					yesterday: true
				}));

			if (calculatedDays(conversation.create_time) === 3)
				setDaysPassed((prevState) => ({
					...prevState,
					previousSevenDays: true
				}));

			if (calculatedDays(conversation.create_time) === 4)
				setDaysPassed((prevState) => ({
					...prevState,
					previousMonth: true
				}));

			if (calculatedDays(conversation.create_time) === 0)
				setDaysPassed((prevState) => ({
					...prevState,
					moreThanaMonth: true
				}));
		});
	}, [conversations]);

	return (
		<div
			className={`h-screen bg-light flex flex-col w-[260px]   md:w-[420px] text-sm bg-[#202123] text-white ${
				openSidebar ? 'visible fixed md:relative left-0 top-0 z-30' : 'w-0 invisible absolute'
			} `}
		>
			<div
				className={`flex w-full min-h-[44px] gap-3 p-2 ${
					openSidebar ? 'visible' : 'w-0 invisible'
				} `}
			>
				<div className='flex px-3 gap-3 min-h-[44px] py-1 items-center transition-colors duration-200 text-white cursor-pointer rounded border border-white/20 hover:bg-gray-500/10 h-11  flex-grow overflow-hidden'>
					<svg
						stroke='currentColor'
						fill='none'
						strokeWidth='2'
						viewBox='0 0 24 24'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='icon-sm shrink-0'
						height='1em'
						width='1em'
						xmlns='http://www.w3.org/2000/svg'
					>
						<line x1='12' y1='5' x2='12' y2='19'></line>
						<line x1='5' y1='12' x2='19' y2='12'></line>
					</svg>
					<button
						onClick={() => {
							setMessages([]);
							setMessagesComponents([]);
							router.push('/');
						}}
						className='truncate'
					>
						New Chat
					</button>
				</div>
				<SidebarButtonComponent setOpenSidebar={setOPenSidebar} openSidebar={openSidebar} />
			</div>

			<div
				className='flex-1 overflow-y-auto border-b-1 border-white/20 py-2 pl-2'
				id='content_sidebar'
			>
				<div
					className={`px-3 h-9 pb-2 pt-3 text-xs text-ellipsis overflow-hidden break-all ${
						!daysPassed.today && 'hidden'
					}`}
				>
					<h3 className='text-xs font-medium text-gray-500'>Today</h3>
				</div>
				{conversations?.map((conversation) => (
					<div
						onClick={() => {
							router.push(`/conversation/${conversation.id}`);
							setIsSelected(conversation.id);
						}}
						key={conversation.id}
					>
						{calculatedDays(conversation.create_time) === 1 && (
							<SidebarConversationComponent
								itemId={conversation.id}
								title={conversation.title}
								isSelected={isSelected}
							/>
						)}
					</div>
				))}

				<div
					className={`px-3 h-9 pb-2 pt-3 text-xs text-ellipsis overflow-hidden break-all ${
						!daysPassed.yesterday && 'hidden'
					}`}
				>
					<h3 className='text-xs font-medium text-gray-500'>Yesterday</h3>
				</div>
				{conversations?.map((conversation) => (
					<div
						onClick={() => {
							router.push(`/conversation/${conversation.id}`);
							setIsSelected(conversation.id);
						}}
						key={conversation.id}
					>
						{calculatedDays(conversation.create_time) === 2 && (
							<SidebarConversationComponent
								itemId={conversation.id}
								title={conversation.title}
								isSelected={isSelected}
							/>
						)}
					</div>
				))}

				<div
					className={`px-3 h-9 pb-2 pt-3 text-xs text-ellipsis overflow-hidden break-all ${
						!daysPassed.previousSevenDays && 'hidden'
					}`}
				>
					<h3 className='text-xs font-medium text-gray-500'>Less than seven days</h3>
				</div>
				{conversations?.map((conversation) => (
					<div
						onClick={() => {
							router.push(`/conversation/${conversation.id}`);
							setIsSelected(conversation.id);
						}}
						key={conversation.id}
					>
						{calculatedDays(conversation.create_time) === 3 && (
							<SidebarConversationComponent
								itemId={conversation.id}
								title={conversation.title}
								isSelected={isSelected}
							/>
						)}
					</div>
				))}

				<div
					className={`px-3 h-9 pb-2 pt-3 text-xs text-ellipsis overflow-hidden break-all ${
						!daysPassed.previousMonth && 'hidden'
					}`}
				>
					<h3 className='text-xs font-medium text-gray-500'>Less than thirty days</h3>
				</div>
				{conversations?.map((conversation) => (
					<div
						onClick={() => {
							router.push(`/conversation/${conversation.id}`);
							setIsSelected(conversation.id);
						}}
						key={conversation.id}
					>
						{calculatedDays(conversation.create_time) === 4 && (
							<SidebarConversationComponent
								itemId={conversation.id}
								title={conversation.title}
								isSelected={isSelected}
							/>
						)}
					</div>
				))}

				<div
					className={`px-3 h-9 pb-2 pt-3 text-xs text-ellipsis overflow-hidden break-all ${
						!daysPassed.moreThanaMonth && 'hidden'
					}`}
				>
					<h3 className='text-xs font-medium text-gray-500'>More than thirty days</h3>
				</div>
				{conversations?.map((conversation) => (
					<div
						onClick={() => {
							router.push(`/conversation/${conversation.id}`);
							setIsSelected(conversation.id);
						}}
						key={conversation.id}
					>
						{calculatedDays(conversation.create_time) === 0 && (
							<SidebarConversationComponent
								itemId={conversation.id}
								title={conversation.title}
								isSelected={isSelected}
							/>
						)}
					</div>
				))}
			</div>

			<div
				className={`flex flex-col cursor-pointer  p-3  ${
					openSidebar ? 'visible' : 'w-0 invisible'
				} relative`}
			>
				<div className='flex items-center gap-3 w-full rounded-xl text-sm p-3 hover:bg-gray-700/50 text-white'>
					<span className='flex w-full flex-row flex-wrap-reverse justify-between'>
						<span className='gold-new-button flex items-center gap-3'>
							<svg
								stroke='currentColor'
								fill='none'
								strokeWidth='2'
								viewBox='0 0 24 24'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='icon-sm shrink-0'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
								<circle cx='12' cy='7' r='4'></circle>
							</svg>
							Upgrade to Plus
						</span>
					</span>
				</div>
				<div
					onClick={() => setDropDown((prev) => !prev)}
					className='flex items-center gap-3  w-full rounded-xl text-sm p-3 hover:bg-gray-700/50 text-white'
				>
					<div className='h-8 w-8 rounded-[2px]'>
						<Image src={photoUrl} alt='user' width={100} radius='none' />
					</div>
					<p className='grow overflow-hidden text-ellipsis font-semibold whitespace-nowrap text-left'>
						{userName}
					</p>
					<svg
						stroke='currentColor'
						fill='none'
						strokeWidth='2'
						viewBox='0 0 24 24'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='icon-sm flex-shrink-0 text-gray-500'
						height='1em'
						width='1em'
						xmlns='http://www.w3.org/2000/svg'
					>
						<circle cx='12' cy='12' r='1'></circle>
						<circle cx='19' cy='12' r='1'></circle>
						<circle cx='5' cy='12' r='1'></circle>
					</svg>
				</div>

				<div
					className={`${
						dropDown ? 'bg-[#050509] absolute -top-[174px] right-3 py-3 z-10 rounded' : 'hidden'
					}`}
					style={{ width: 'calc(100% - 24px)' }}
				>
					<div className='flex gap-3 p-3 min-h-[44px]  hover:bg-gray-700/50'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='25'
							height='25'
							viewBox='0 0 25 25'
							className='h-4 w-4 shrink-0'
							fill='none'
						>
							<path
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M21.44 15.707a2 2 0 0 1-2 2h-12l-4 4v-16a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z'
							></path>
							<path
								fill='currentColor'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='1.7'
								d='M7.825 11.375a.687.687 0 1 0 0-1.375.687.687 0 0 0 0 1.375ZM12.5 11.375a.687.687 0 1 0 0-1.375.687.687 0 0 0 0 1.375ZM17.175 11.375a.687.687 0 1 0 0-1.375.687.687 0 0 0 0 1.375Z'
							></path>
						</svg>
						<span>Custom instructions</span>
					</div>
					<div className='flex gap-3 p-3 min-h-[44px]  hover:bg-gray-700/50'>
						<svg
							stroke='currentColor'
							fill='none'
							strokeWidth='2'
							viewBox='0 0 24 24'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='icon-sm'
							height='1em'
							width='1em'
							xmlns='http://www.w3.org/2000/svg'
						>
							<circle cx='12' cy='12' r='3'></circle>
							<path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z'></path>
						</svg>
						<span>Settings</span>
					</div>
					<div className='my-1.5 h-px dark:bg-white/20 bg-black/20 ' role='none'></div>
					<div className='flex gap-3 p-3 min-h-[44px]  hover:bg-gray-700/50'>
						<svg
							stroke='currentColor'
							fill='none'
							strokeWidth='2'
							viewBox='0 0 24 24'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='icon-sm'
							height='1em'
							width='1em'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4'></path>
							<polyline points='16 17 21 12 16 7'></polyline>
							<line x1='21' y1='12' x2='9' y2='12'></line>
						</svg>
						<span>Log out</span>
					</div>
				</div>
			</div>

			<div
				onClick={() => setOPenSidebar((prev) => !prev)}
				className={`w-6 h-6 flex justify-center items-center absolute top-0 right-0 -mr-12 cursor-pointer md:hidden`}
			>
				<svg
					stroke='currentColor'
					fill='none'
					strokeWidth='2'
					viewBox='0 0 24 24'
					strokeLinecap='round'
					strokeLinejoin='round'
					className='text-black dark:text-white'
					aria-hidden='true'
					height='1em'
					width='1em'
					xmlns='http://www.w3.org/2000/svg'
				>
					<line x1='18' y1='6' x2='6' y2='18'></line>
					<line x1='6' y1='6' x2='18' y2='18'></line>
				</svg>
			</div>
		</div>
	);
};

export default SidebarComponent;
