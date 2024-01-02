// libraries
'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// components
import { Image } from '@nextui-org/react';
import SidebarConversationComponent from '@/stories/sidebar/components/sidebar_conversation/SidebarConversation.component';
import { AssistantAvatar } from './Icons';
// store
import useMessagesStore from '@/store/useMessagesStore';
import { PiCirclesFour } from 'react-icons/pi';
import { useChatGptVersion } from '@/store/useChatGptVersion';
import useConversationsStore from '@/store/useConversationsStore';
// styles and utils
import '@/stories/sidebar/Sidebar.styles.css';

const SidebarComponent = ({
	userName,
	photoUrl,
	openSidebar,
	handleOpenSidebar,
	handleToggleSidebar
}: {
	userName: String;
	photoUrl?: string;
	openSidebar: boolean;
	handleOpenSidebar: () => void;
	handleToggleSidebar: () => void;
}) => {
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
	const [sidebarButtonHover, setSidebarButtonHover] = useState(false);

	const setMessages = useMessagesStore((state) => state.setMessages);
	const setCurrentConversationId = useConversationsStore((state) => state.setCurrentConversationId);

	const conversationList = useConversationsStore((state) => state.conversationList);

	const publicVersion = useChatGptVersion((state) => state.publicVersion);

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

	const handleSidebarButtonHoverEnter = () => {
		setSidebarButtonHover(true);
	};
	const handleSidebarButtonHoverLeave = () => {
		setSidebarButtonHover(false);
	};

	//This hook counts the conversations by date and adds the number of conversations by date to be able to show it in the sidebar
	useEffect(() => {
		conversationList?.map((conversation) => {
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
	}, [conversationList]);

	// Handle go to conversation detail
	const handleGoToDetail = (conversationId: string) => {
		setCurrentConversationId(conversationId);
		setIsSelected(conversationId);
		setMessages([]);
		router.push(`/conversation/${conversationId}`);
	};

	useEffect(() => {
		const handleResize = () => {
			const isScreenLarger = window.innerWidth > 720;
			if (isScreenLarger) {
				handleOpenSidebar();
			}
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div
			className={`h-screen bg-light flex flex-col sm:w-[300px] text-base bg-black text-white ${
				openSidebar ? 'visible fixed md:relative left-0 top-0 z-50' : 'w-0 invisible absolute'
			} ${publicVersion && 'hidden'}`}
		>
			<div
				className={`flex w-full min-h-[44px] gap-3 px-2 items-center ${
					openSidebar ? 'visible' : 'w-0 invisible'
				} `}
			>
				<div className='flex justify-between px-2 gap-3 min-h-[44px] py-1 items-center transition-colors duration-200 text-white cursor-pointer rounded-[8px] hover:bg-gray-500/30 h-11  flex-grow overflow-hidden'>
					<div className='flex items-center gap-2'>
						<div
							className={`rounded-full w-[28px] h-[28px] flex items-center justify-center p-1 bg-white text-black`}
						>
							<AssistantAvatar />
						</div>
						<button
							onClick={() => {
								setMessages([]);
								setCurrentConversationId(null);
								router.push('/');
							}}
							className='truncate text-sm'
						>
							New chat
						</button>
					</div>
					<div>
						<svg
							width='18'
							height='18'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M16.7929 2.79289C18.0118 1.57394 19.9882 1.57394 21.2071 2.79289C22.4261 4.01184 22.4261 5.98815 21.2071 7.20711L12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16H9C8.44772 16 8 15.5523 8 15V12C8 11.7348 8.10536 11.4804 8.29289 11.2929L16.7929 2.79289ZM19.7929 4.20711C19.355 3.7692 18.645 3.7692 18.2071 4.2071L10 12.4142V14H11.5858L19.7929 5.79289C20.2308 5.35499 20.2308 4.64501 19.7929 4.20711ZM6 5C5.44772 5 5 5.44771 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34314 4.34315 3 6 3H10C10.5523 3 11 3.44771 11 4C11 4.55228 10.5523 5 10 5H6Z'
								fill='currentColor'
							></path>
						</svg>
					</div>
				</div>
			</div>

			<div
				className={`flex w-full min-h-[44px] gap-3 px-2 items-center ${
					openSidebar ? 'visible' : 'w-0 invisible'
				} `}
			>
				<div className='flex justify-between px-2 gap-3 min-h-[44px] items-center transition-colors duration-200 text-white cursor-pointer rounded-[8px] hover:bg-gray-500/30 h-11  flex-grow overflow-hidden'>
					<div className='flex items-center gap-2'>
						<div
							className={`rounded-full w-[28px] h-[28px] flex items-center justify-center p-1  text-gray-200`}
						>
							<PiCirclesFour size={32} />
						</div>
						<button
							onClick={() => {
								setMessages([]);
								router.push('/gpts');
							}}
							className='text-sm'
						>
							Explore
						</button>
					</div>
				</div>
			</div>
			{/* l */}
			<div className='flex-1 overflow-y-auto border-white/20 py-2 pl-2' id='content_sidebar'>
				<div
					className={`px-3 h-9 pb-2 pt-3 text-ellipsis overflow-hidden break-all ${
						!daysPassed.today && 'hidden'
					}`}
				>
					<h3 className=' text-xs font-medium text-gray-500'>Today</h3>
				</div>
				{conversationList?.map((conversation) => (
					<div onClick={() => handleGoToDetail(conversation._id)} key={conversation._id}>
						{calculatedDays(conversation.create_time) === 1 && (
							<SidebarConversationComponent
								itemId={conversation._id}
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
				{conversationList?.map((conversation) => (
					<div onClick={() => handleGoToDetail(conversation._id)} key={conversation._id}>
						{calculatedDays(conversation.create_time) === 2 && (
							<SidebarConversationComponent
								itemId={conversation._id}
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
				{conversationList?.map((conversation) => (
					<div onClick={() => handleGoToDetail(conversation._id)} key={conversation._id}>
						{calculatedDays(conversation.create_time) === 3 && (
							<SidebarConversationComponent
								itemId={conversation._id}
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
				{conversationList?.map((conversation) => (
					<div onClick={() => handleGoToDetail(conversation._id)} key={conversation._id}>
						{calculatedDays(conversation.create_time) === 4 && (
							<SidebarConversationComponent
								itemId={conversation._id}
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
				{conversationList?.map((conversation) => (
					<div onClick={() => handleGoToDetail(conversation._id)} key={conversation._id}>
						{calculatedDays(conversation.create_time) === 0 && (
							<SidebarConversationComponent
								itemId={conversation._id}
								title={conversation.title}
								isSelected={isSelected}
							/>
						)}
					</div>
				))}
			</div>

			<div
				className={`flex flex-col cursor-pointer px-3 py-1 ${
					openSidebar ? 'visible' : 'w-0 invisible'
				} relative`}
			>
				<div className='flex items-center gap-3 w-full rounded-[8px] text-sm p-1 hover:bg-[#202123] text-white'>
					<span className='flex w-full flex-row flex-wrap-reverse justify-between'>
						<span className='gold-new-button flex items-center gap-3'>
							<span className='flex h-8 w-8 items-center justify-center rounded-full border border-white/50 bg-black'>
								<svg
									width='18'
									height='18'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='icon-sm shrink-0'
								>
									<path
										d='M8.78158 8.60266L9.8188 5.49098C10.037 4.83634 10.963 4.83634 11.1812 5.49098L12.2184 8.60266C12.7187 10.1035 13.8965 11.2813 15.3973 11.7816L18.509 12.8188C19.1637 13.037 19.1637 13.963 18.509 14.1812L15.3973 15.2184C13.8965 15.7187 12.7187 16.8965 12.2184 18.3973L11.1812 21.509C10.963 22.1637 10.037 22.1637 9.8188 21.509L8.78158 18.3973C8.28128 16.8965 7.10354 15.7187 5.60266 15.2184L2.49098 14.1812C1.83634 13.963 1.83634 13.037 2.49098 12.8188L5.60266 11.7816C7.10354 11.2813 8.28128 10.1035 8.78158 8.60266Z'
										fill='currentColor'
									></path>
									<path
										d='M17.1913 3.69537L17.6794 2.23105C17.7821 1.92298 18.2179 1.92298 18.3206 2.23105L18.8087 3.69537C19.0441 4.40167 19.5983 4.9559 20.3046 5.19133L21.769 5.67944C22.077 5.78213 22.077 6.21787 21.769 6.32056L20.3046 6.80867C19.5983 7.0441 19.0441 7.59833 18.8087 8.30463L18.3206 9.76895C18.2179 10.077 17.7821 10.077 17.6794 9.76895L17.1913 8.30463C16.9559 7.59833 16.4017 7.0441 15.6954 6.80867L14.231 6.32056C13.923 6.21787 13.923 5.78213 14.231 5.67944L15.6954 5.19133C16.4017 4.9559 16.9559 4.40167 17.1913 3.69537Z'
										fill='currentColor'
									></path>
								</svg>
							</span>
							<div>
								<p className='font-bold'>Upgrade</p>
								<p className='font-extralight text-xs text-white/70'>Get GPT-4, DALL-E,and more</p>
							</div>
						</span>
					</span>
				</div>

				<div
					onClick={() => setDropDown((prev) => !prev)}
					className={`flex items-center gap-3  w-full rounded-[8px] text-sm p-1 hover:bg-[#202123] text-white relative ${
						dropDown && 'bg-[#202123]'
					}`}
				>
					<div className='h-8 w-8 rounded-[2px]'>
						<Image src={photoUrl} alt='user' width={100} radius='none' />
					</div>
					<p className='grow overflow-hidden text-ellipsis font-semibold whitespace-nowrap text-left'>
						{userName}
					</p>

					<div
						className={`${
							dropDown
								? 'bg-[#202123] w-full  absolute bottom-11 right-[1px]  py-3 z-10 rounded-[8px] border border-gray-700'
								: 'hidden'
						}`}
					>
						<div className='flex gap-3 p-3 min-h-[44px]  hover:bg-gray-700/50'>
							<svg
								width='18'
								height='18'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='icon-md'
							>
								<path
									d='M11.4284 2.39822C11.7719 2.15891 12.2281 2.15891 12.5716 2.39822L15.0347 4.11412C15.1532 4.19667 15.2882 4.25257 15.4303 4.27799L18.3853 4.80632C18.7974 4.88 19.12 5.2026 19.1937 5.61471L19.722 8.56969C19.7474 8.71185 19.8033 8.84682 19.8859 8.96531L21.6018 11.4284C21.8411 11.7719 21.8411 12.2281 21.6018 12.5716L19.8859 15.0347C19.8033 15.1532 19.7474 15.2882 19.722 15.4303L19.1937 18.3853C19.12 18.7974 18.7974 19.12 18.3853 19.1937L15.4303 19.722C15.2881 19.7474 15.1532 19.8033 15.0347 19.8859L12.5716 21.6018C12.2281 21.8411 11.7719 21.8411 11.4284 21.6018L8.96531 19.8859C8.84682 19.8033 8.71185 19.7474 8.56969 19.722L5.61471 19.1937C5.2026 19.12 4.88 18.7974 4.80632 18.3853L4.27799 15.4303C4.25257 15.2881 4.19667 15.1532 4.11412 15.0347L2.39822 12.5716C2.15891 12.2281 2.15891 11.7719 2.39822 11.4284L4.11412 8.96531C4.19667 8.84682 4.25257 8.71185 4.27799 8.56969L4.80632 5.61471C4.88 5.2026 5.2026 4.88 5.61471 4.80632L8.56969 4.27799C8.71185 4.25257 8.84682 4.19667 8.96531 4.11412L11.4284 2.39822Z'
									stroke='currentColor'
									strokeWidth='2'
								></path>
								<path
									d='M11.5876 8.10179C11.7862 7.81201 12.2138 7.81201 12.4124 8.10179L13.4865 9.66899C13.5515 9.76386 13.6473 9.83341 13.7576 9.86593L15.58 10.4031C15.9169 10.5025 16.0491 10.9092 15.8349 11.1876L14.6763 12.6934C14.6061 12.7846 14.5696 12.8971 14.5727 13.0121L14.625 14.9113C14.6346 15.2625 14.2886 15.5138 13.9576 15.3961L12.1675 14.7596C12.0592 14.721 11.9408 14.721 11.8325 14.7596L10.0424 15.3961C9.71135 15.5138 9.36537 15.2625 9.37502 14.9113L9.42726 13.0121C9.43042 12.8971 9.39385 12.7846 9.32372 12.6934L8.16514 11.1876C7.9509 10.9092 8.08306 10.5025 8.42003 10.4031L10.2424 9.86593C10.3527 9.83341 10.4485 9.76386 10.5135 9.66899L11.5876 8.10179Z'
									fill='currentColor'
								></path>
							</svg>
							<span>My plan</span>
						</div>
						<div className='flex gap-3 p-3 min-h-[44px]  hover:bg-gray-700/50'>
							<svg
								width='18'
								height='18'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='icon-md'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M12 4C10.3431 4 9 5.34315 9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7C15 5.34315 13.6569 4 12 4ZM7 7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7Z'
									fill='currentColor'
								></path>
								<path
									d='M4.5 21C4.5 17.7804 6.82883 15.0685 10 14.2516'
									stroke='currentColor'
									strokeWidth='2'
									strokeLinecap='round'
								></path>
								<circle cx='15.625' cy='15.625' r='1.625' fill='currentColor'></circle>
								<circle cx='20.125' cy='15.625' r='1.625' fill='currentColor'></circle>
								<circle cx='20.125' cy='20.125' r='1.625' fill='currentColor'></circle>
								<circle cx='15.625' cy='20.125' r='1.625' fill='currentColor'></circle>
							</svg>

							<span>My GPTs</span>
						</div>
						<div className='flex gap-3 p-3 min-h-[44px]  hover:bg-gray-700/50'>
							<svg
								width='18'
								height='18'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='icon-md'
							>
								<path
									d='M10.663 6.3872C10.8152 6.29068 11 6.40984 11 6.59007V8C11 8.55229 11.4477 9 12 9C12.5523 9 13 8.55229 13 8V6.59007C13 6.40984 13.1848 6.29068 13.337 6.3872C14.036 6.83047 14.5 7.61105 14.5 8.5C14.5 9.53284 13.8737 10.4194 12.9801 10.8006C12.9932 10.865 13 10.9317 13 11V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V11C11 10.9317 11.0068 10.865 11.0199 10.8006C10.1263 10.4194 9.5 9.53284 9.5 8.5C9.5 7.61105 9.96397 6.83047 10.663 6.3872Z'
									fill='currentColor'
								></path>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M4 5V19C4 20.6569 5.34315 22 7 22H19C19.3346 22 19.6471 21.8326 19.8325 21.5541C20.0179 21.2755 20.0517 20.9227 19.9225 20.614C19.4458 19.4747 19.4458 18.5253 19.9225 17.386C19.9737 17.2637 20 17.1325 20 17V3C20 2.44772 19.5523 2 19 2H7C5.34315 2 4 3.34315 4 5ZM6 5C6 4.44772 6.44772 4 7 4H18V16H7C6.64936 16 6.31278 16.0602 6 16.1707V5ZM7 18H17.657C17.5343 18.6699 17.5343 19.3301 17.657 20H7C6.44772 20 6 19.5523 6 19C6 18.4477 6.44772 18 7 18Z'
									fill='currentColor'
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
						<div className='my-1.5 h-px bg-gray-700' role='none'></div>
						<div className='flex gap-3 p-3 min-h-[44px]  hover:bg-gray-700/50 items-center'>
							<svg
								stroke='currentColor'
								fill='none'
								strokeWidth='2'
								viewBox='0 0 24 24'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='icon-sm'
								height='1.2em'
								width='1.2em'
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
			</div>

			<div
				onClick={handleToggleSidebar}
				className={`w-6 h-6 flex justify-center items-center absolute top-0 right-0 -mr-12 cursor-pointer sm:hidden`}
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

			<div
				className={` p-2 cursor-pointer hidden sm:block top-1/2 z-30 ${
					openSidebar ? 'absolute -right-5' : 'absolute left-0 visible cursor-pointer'
				}`}
				onMouseEnter={handleSidebarButtonHoverEnter}
				onMouseLeave={handleSidebarButtonHoverLeave}
				onClick={handleToggleSidebar}
			>
				<div
					className={`h-3 w-1 rounded-full  bg-gray-300  ${
						!sidebarButtonHover ? 'translate-y-1' : 'bg-gray-800'
					} `}
					style={
						sidebarButtonHover && openSidebar
							? { transform: 'rotate(20deg) translateY(0.18rem)' }
							: !sidebarButtonHover && !openSidebar
							? { transform: 'rotate(-20deg) translateY(0.18rem)' }
							: sidebarButtonHover && !openSidebar
							? { transform: 'rotate(-20deg) translateY(0.18rem)' }
							: {}
					}
				></div>
				<div
					className={`h-3 w-1 rounded-full bg-gray-300 ${
						!sidebarButtonHover ? '-translate-y-1' : 'bg-gray-800'
					}`}
					style={
						sidebarButtonHover && openSidebar
							? { transform: 'rotate(-20deg) translateY(-0.18rem)' }
							: !sidebarButtonHover && !openSidebar
							? { transform: 'rotate(20deg) translateY(-0.18rem)' }
							: sidebarButtonHover && !openSidebar
							? { transform: 'rotate(20deg) translateY(-0.18rem)' }
							: {}
					}
				></div>
				<div className={`absolute min-w-max bottom-0 left-10 ${!sidebarButtonHover && 'hidden'}`}>
					<div className='h-full relative bg-black p-2 rounded-[8px] text-sm'>
						{openSidebar ? 'Close sidebar' : 'Open sidebar'}
						<div
							className={`-z-10 w-[10px] h-[10px] bg-black transform rotate-45 absolute left-0 top-[40%] -translate-x-1/2`}
						></div>
					</div>
				</div>
			</div>
			{/* <button><span className="" data-state="closed"><div class="flex h-[72px] w-8 items-center justify-center" style={"opacity: 0.25;"}><div className="flex h-6 w-6 flex-col items-center"><div className="h-3 w-1 rounded-full bg-token-text-primary" style="transform: translateY(0.15rem) rotate(0deg) translateZ(0px);"></div><div class="h-3 w-1 rounded-full bg-token-text-primary" style="transform: translateY(-0.15rem) rotate(0deg) translateZ(0px);"></div></div></div><span style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;">Close sidebar</span></span></button> */}
		</div>
	);
};

export default SidebarComponent;
