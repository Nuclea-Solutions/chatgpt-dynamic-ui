import { useChatGptVersion } from '../../store/useChatGptVersion';
import { FaArrowRightLong } from 'react-icons/fa6';
import React, { useState } from 'react';
import useMessagesStore from '../../store/useMessagesStore';
import { useshareLinkToChat } from '../../store/useLinkToChatComponent';

const NavbarComponent = ({
	isNewChat,
	hide,
	openSidebar
}: {
	isNewChat: Boolean;
	hide?: boolean;
	openSidebar: boolean;
}) => {
	const [dropdown, setDropdown] = useState(false);
	const handleDropdown = () => {
		setDropdown((state) => !state);
	};
	const setPublicVersion = useChatGptVersion((state) => state.setPublicVersion);
	const setPrivateVersion = useChatGptVersion((state) => state.setPrivateVersion);
	const publicVersion = useChatGptVersion((state) => state.publicVersion);

	const handleOpenShareLinkToChat = useshareLinkToChat((state) => state.setOpenShareLinkToChat);

	const messages = useMessagesStore((state) => state.messages);

	return (
		<div
			className={`z-30 flex min-h-[60px] justify-between  items-center gap-3 py-3 px-2 bg-white/90 dark:border-gray-900/50 dark:bg-gray-700 relative`}
		>
			<div className='flex items-center gap-3'>
				<button
					className={`relative hidden md:flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-[10px] border border-gray-300 ml-2 hover:bg-gray-100 ${
						openSidebar && 'md:hidden'
					} `}
				>
					<div className='flex w-full gap-2 items-center justify-center'>
						<svg
							width='18'
							height='18'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='text-black dark:text-white'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M16.7929 2.79289C18.0118 1.57394 19.9882 1.57394 21.2071 2.79289C22.4261 4.01184 22.4261 5.98815 21.2071 7.20711L12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16H9C8.44772 16 8 15.5523 8 15V12C8 11.7348 8.10536 11.4804 8.29289 11.2929L16.7929 2.79289ZM19.7929 4.20711C19.355 3.7692 18.645 3.7692 18.2071 4.2071L10 12.4142V14H11.5858L19.7929 5.79289C20.2308 5.35499 20.2308 4.64501 19.7929 4.20711ZM6 5C5.44772 5 5 5.44771 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34314 4.34315 3 6 3H10C10.5523 3 11 3.44771 11 4C11 4.55228 10.5523 5 10 5H6Z'
								fill='currentColor'
							></path>
						</svg>
					</div>
				</button>

				<div
					onClick={handleDropdown}
					className='flex items-center gap-1 text-lg p-2 rounded-xl text-gray-600 dark:text-white sm:justify-center opacity-100 cursor-pointer hover:bg-gray-50 relative '
				>
					<span>
						<span className='font-semibold'>ChatGPT</span> 3.5
					</span>
					<svg
						width='16'
						height='17'
						viewBox='0 0 16 17'
						fill='none'
						className='text-token-text-tertiary'
					>
						<path
							d='M11.3346 7.83203L8.00131 11.1654L4.66797 7.83203'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						></path>
					</svg>
				</div>
			</div>
			<div className={`${messages.length < 1 && 'hidden'}`}>
				<button
					aria-label='Share chat'
					className='flex p-2 items-center gap-3 transition-colors border rounded-[8px] border-gray-300 duration-200 text-black dark:text-white cursor-pointer text-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
					onClick={handleOpenShareLinkToChat}
				>
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
							d='M11.2929 2.29289C11.6834 1.90237 12.3166 1.90237 12.7071 2.29289L16.7071 6.29289C17.0976 6.68342 17.0976 7.31658 16.7071 7.70711C16.3166 8.09763 15.6834 8.09763 15.2929 7.70711L13 5.41421V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V5.41421L8.70711 7.70711C8.31658 8.09763 7.68342 8.09763 7.29289 7.70711C6.90237 7.31658 6.90237 6.68342 7.29289 6.29289L11.2929 2.29289ZM4 13C4.55228 13 5 13.4477 5 14V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V14C3 13.4477 3.44772 13 4 13Z'
							fill='currentColor'
						></path>
					</svg>
				</button>
			</div>

			<div
				className={`absolute top-[108px] md:top-16 left-2 text-sm w-[326px] border rounded-[8px] flex flex-col gap-2 shadow-xl cursor-pointer bg-white dark:text-white dark:bg-[#202123] select-none ${
					!dropdown && 'hidden'
				} ${!openSidebar && 'md:left-16'}`}
			>
				<div className='rounded-[8px] py-2 px-3 m-1'>
					<div className='flex grow items-start justify-between gap-2'>
						<div>
							<div className='flex gap-2'>
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
										d='M15.2406 3.48592C15.2405 3.48652 15.2403 3.48713 15.2402 3.48773L14.1838 8.00525H20.0071C21.7333 8.00525 22.6031 10.0263 21.5255 11.3049L21.5232 11.3076L12.2148 22.2732C12.2144 22.2737 12.214 22.2743 12.2135 22.2748C10.8154 23.9308 8.29078 22.4977 8.75937 20.5141C8.75951 20.5135 8.75965 20.5129 8.75979 20.5123L9.81614 15.9948H3.99288C2.26668 15.9948 1.39687 13.9737 2.47446 12.6951L2.47674 12.6924L11.7851 1.7268C11.7856 1.72628 11.786 1.72577 11.7864 1.72526C13.1845 0.0691769 15.7092 1.50223 15.2406 3.48592ZM13.2906 3.04211L11.9496 8.77683C11.8802 9.07364 11.9503 9.38587 12.14 9.62465C12.3297 9.86343 12.6182 10.0026 12.9234 10.0026H19.9972C19.9985 10.0058 19.9993 10.0088 19.9997 10.0113C19.9998 10.0118 19.9998 10.0123 19.9999 10.0127C19.9991 10.0139 19.9979 10.0156 19.9959 10.018C19.9957 10.0182 19.9956 10.0184 19.9954 10.0187L10.7094 20.9579L12.0504 15.2232C12.1198 14.9264 12.0497 14.6141 11.86 14.3754C11.6703 14.1366 11.3818 13.9974 11.0766 13.9974H4.00279C4.0015 13.9942 4.00069 13.9912 4.00029 13.9887C4.0002 13.9882 4.00013 13.9877 4.00009 13.9873C4.00083 13.9861 4.00209 13.9844 4.00407 13.982C4.00424 13.9818 4.00442 13.9816 4.00459 13.9813L13.2906 3.04211Z'
										fill='currentColor'
									></path>
								</svg>
								<div>
									GPT-3.5
									<div className='text-[#8e8ea0] '>Great for everyday tasks</div>
								</div>
							</div>
						</div>
						<svg
							width='18'
							height='18'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='icon-md dark:text-white'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM16.0755 7.93219C16.5272 8.25003 16.6356 8.87383 16.3178 9.32549L11.5678 16.0755C11.3931 16.3237 11.1152 16.4792 10.8123 16.4981C10.5093 16.517 10.2142 16.3973 10.0101 16.1727L7.51006 13.4227C7.13855 13.014 7.16867 12.3816 7.57733 12.0101C7.98598 11.6386 8.61843 11.6687 8.98994 12.0773L10.6504 13.9039L14.6822 8.17451C15 7.72284 15.6238 7.61436 16.0755 7.93219Z'
								fill='currentColor'
							></path>
						</svg>
					</div>
				</div>
				<hr />
				<div className='m-1'>
					<div className='flex gap-2 rounded-[8px] py-2 px-3'>
						<svg
							width='18'
							height='18'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
							className='icon-md shrink-0'
						>
							<path
								d='M19.3975 1.35498C19.3746 1.15293 19.2037 1.00021 19.0004 1C18.7971 0.999793 18.6259 1.15217 18.6026 1.35417C18.4798 2.41894 18.1627 3.15692 17.6598 3.65983C17.1569 4.16274 16.4189 4.47983 15.3542 4.60264C15.1522 4.62593 14.9998 4.79707 15 5.00041C15.0002 5.20375 15.1529 5.37457 15.355 5.39746C16.4019 5.51605 17.1562 5.83304 17.6716 6.33906C18.1845 6.84269 18.5078 7.57998 18.6016 8.63539C18.6199 8.84195 18.7931 9.00023 19.0005 9C19.2078 8.99977 19.3806 8.84109 19.3985 8.6345C19.4883 7.59673 19.8114 6.84328 20.3273 6.32735C20.8433 5.81142 21.5967 5.48834 22.6345 5.39851C22.8411 5.38063 22.9998 5.20782 23 5.00045C23.0002 4.79308 22.842 4.61992 22.6354 4.60157C21.58 4.50782 20.8427 4.18447 20.3391 3.67157C19.833 3.15623 19.516 2.40192 19.3975 1.35498Z'
								fill='currentColor'
							></path>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M11 3C11.4833 3 11.8974 3.34562 11.9839 3.82111C12.4637 6.46043 13.279 8.23983 14.5196 9.48039C15.7602 10.721 17.5396 11.5363 20.1789 12.0161C20.6544 12.1026 21 12.5167 21 13C21 13.4833 20.6544 13.8974 20.1789 13.9839C17.5396 14.4637 15.7602 15.279 14.5196 16.5196C13.279 17.7602 12.4637 19.5396 11.9839 22.1789C11.8974 22.6544 11.4833 23 11 23C10.5167 23 10.1026 22.6544 10.0161 22.1789C9.53625 19.5396 8.72096 17.7602 7.48039 16.5196C6.23983 15.279 4.46043 14.4637 1.82111 13.9839C1.34562 13.8974 1 13.4833 1 13C1 12.5167 1.34562 12.1026 1.82111 12.0161C4.46043 11.5363 6.23983 10.721 7.48039 9.48039C8.72096 8.23983 9.53625 6.46043 10.0161 3.82111C10.1026 3.34562 10.5167 3 11 3ZM5.66618 13C6.9247 13.5226 7.99788 14.2087 8.89461 15.1054C9.79134 16.0021 10.4774 17.0753 11 18.3338C11.5226 17.0753 12.2087 16.0021 13.1054 15.1054C14.0021 14.2087 15.0753 13.5226 16.3338 13C15.0753 12.4774 14.0021 11.7913 13.1054 10.8946C12.2087 9.99788 11.5226 8.9247 11 7.66618C10.4774 8.9247 9.79134 9.99788 8.89461 10.8946C7.99788 11.7913 6.9247 12.4774 5.66618 13Z'
								fill='currentColor'
							></path>
						</svg>
						<div>
							GPT-4
							<div className='text-[#8e8ea0]'>
								Our smartest and most capable model. Includes DALL·E, browsing and more.
								<div className='mt-2'>
									<button className='btn relative btn-primary w-full text-xs text-white bg-[#ab68ff] p-2 rounded-[8px]'>
										<div className='flex w-full gap-2 items-center justify-center'>
											Upgrade to Plus
										</div>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<hr />
				<div
					className='rounded-[8px] py-2 px-3 m-1 flex items-center'
					onClick={
						publicVersion
							? () => {
									setPrivateVersion(false), handleDropdown();
							  }
							: () => {
									setPublicVersion(true), handleDropdown();
							  }
					}
				>
					<div className='grow'>
						{publicVersion ? <span>Go to private version</span> : <span>Go to public version</span>}
					</div>
					<FaArrowRightLong />
				</div>
			</div>
		</div>
	);
};

export default NavbarComponent;
