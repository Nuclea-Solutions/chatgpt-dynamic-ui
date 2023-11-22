import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '@/stories/sidebar/Sidebar.styles.css';
import SidebarConversationComponent from '@/stories/sidebar/components/sidebar_conversation/SidebarConversation.component';
import { Image } from '@nextui-org/react';
import useMessagesStore from '@/store/useMessagesStore';
import { AssistantAvatar } from './Icons';

const SidebarComponent = ({
	conversations,
	userName,
	photoUrl,
	openSidebar,
	handleOpenSidebar,
	handleToggleSidebar
}: {
	conversations: Array<Conversation> | [];
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
				openSidebar ? 'visible fixed md:relative left-0 top-0 z-30' : 'w-0 invisible absolute'
			} `}
		>
			<div
				className={`flex w-full min-h-[44px] gap-3 p-2 items-center ${
					openSidebar ? 'visible' : 'w-0 invisible'
				} `}
			>
				<div className='flex justify-between px-3 gap-3 min-h-[44px] py-1 items-center transition-colors duration-200 text-white cursor-pointer rounded hover:bg-gray-500/10 h-11  flex-grow overflow-hidden'>
					<div className='flex items-center gap-2'>
						<div
							className={`rounded-full w-[28px] h-[28px] flex items-center justify-center p-1 bg-white text-black`}
						>
							<AssistantAvatar />
						</div>
						<button
							onClick={() => {
								setMessages([]);
								setMessagesComponents([]);
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
			<div className='flex-1 overflow-y-auto border-white/20 py-2 pl-2' id='content_sidebar'>
				<div
					className={`px-3 h-9 pb-2 pt-3 text-ellipsis overflow-hidden break-all ${
						!daysPassed.today && 'hidden'
					}`}
				>
					<h3 className=' text-xs font-medium text-gray-500'>Today</h3>
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
				className={`flex flex-col cursor-pointer  px-3 py-1  ${
					openSidebar ? 'visible' : 'w-0 invisible'
				} relative`}
			>
				<div className='flex items-center gap-3 w-full rounded-[8px] text-sm p-1 hover:bg-gray-700/50 text-white'>
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
					className='flex items-center gap-3  w-full rounded-[8px] text-sm p-1 hover:bg-gray-700/50 text-white'
				>
					<div className='h-8 w-8 rounded-[2px]'>
						<Image src={photoUrl} alt='user' width={100} radius='none' />
					</div>
					<p className='grow overflow-hidden text-ellipsis font-semibold whitespace-nowrap text-left'>
						{userName}
					</p>
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
				onClick={handleToggleSidebar}
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
