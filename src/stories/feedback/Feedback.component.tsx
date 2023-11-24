import { useFeedbackModal } from '../../store/useFeedbackModal';
import React from 'react';

const FeedbackComponent = ({
	isLastMessage,
	showFeedbackMessage
}: {
	isLastMessage: boolean;
	showFeedbackMessage: boolean;
}) => {
	const setOpenModalLike = useFeedbackModal((state) => state.setOpenModalLike);
	const setOpenModalDislike = useFeedbackModal((state) => state.setOpenModalDislike);

	return (
		<div
			className={`flex justify-start gap-3 opacity-0 ${
				isLastMessage || showFeedbackMessage ? 'opacity-100' : ''
			}`}
		>
			<div className=' justify-end text-sm items-center hidden'>&lt; 1 / 1 &gt;</div>
			<div className='text-gray-400 flex visible lg:gap-1 lg:mt-0 gap-2 md:gap-3'>
				<button className='flex gap-2 items-center rounded-[8px] dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400 hover:bg-gray-100 hover:text-gray-700'>
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
						<path d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'></path>
						<rect x='8' y='2' width='8' height='4' rx='1' ry='1'></rect>
					</svg>
				</button>
				<div className='flex gap-1'>
					<button
						onClick={() => setOpenModalLike(true)}
						className='p-1 rounded disabled:dark:hover:text-gray-400 dark:hover:text-gray-200 dark:text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700'
					>
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
							<path d='M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3'></path>
						</svg>
					</button>
					<button
						onClick={() => setOpenModalDislike(true)}
						className='p-1 rounded-[8px] disabled:dark:hover:text-gray-400 dark:hover:text-gray-200 dark:text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700'
					>
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
							<path d='M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17'></path>
						</svg>
					</button>
				</div>
				<button
					className={`${
						!isLastMessage && 'hidden'
					} flex gap-2 items-center rounded-[8px] dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400 hover:bg-gray-100 hover:text-gray-700`}
				>
					<svg
						stroke='currentColor'
						fill='none'
						strokeWidth='2'
						viewBox='0 0 24 24'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='flex-shrink-0 icon-xs'
						height='1em'
						width='1em'
						xmlns='http://www.w3.org/2000/svg'
					>
						<polyline points='1 4 1 10 7 10'></polyline>
						<polyline points='23 20 23 14 17 14'></polyline>
						<path d='M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15'></path>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default FeedbackComponent;
