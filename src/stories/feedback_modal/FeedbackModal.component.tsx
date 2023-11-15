import { useFeedbackModal } from '@/store/useFeedbackModal';
import React from 'react';

const FeedbackModalComponent = ({ like }: { like: boolean }) => {
	const setCloseModal = useFeedbackModal((state) => state.setCloseModal);

	return (
		<div className='bg-white dark:bg-gray-900 md:max-w-[672px] lg:w-[896px] xl:w-[1152px] rounded-xl'>
			<div className='px-4 pb-4 pt-5 sm:p-6 flex items-center justify-between border-b border-black/10 dark:border-white/10'>
				<div className='flex'>
					<div className='flex items-center'>
						<div className='mr-4 bg-green-100 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:h-10 sm:w-10'>
							{like ? (
								<svg
									stroke='currentColor'
									fill='none'
									strokeWidth='2'
									viewBox='0 0 24 24'
									strokeLinecap='round'
									strokeLinejoin='round'
									className='text-green-700 text-2xl'
									aria-hidden='true'
									height='1em'
									width='1em'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3'></path>
								</svg>
							) : (
								<svg
									stroke='currentColor'
									fill='none'
									strokeWidth='2'
									viewBox='0 0 24 24'
									strokeLinecap='round'
									strokeLinejoin='round'
									className='icon-lg text-red-600 text-2xl'
									aria-hidden='true'
									height='1em'
									width='1em'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17'></path>
								</svg>
							)}
						</div>
						<div className='flex flex-col gap-1 text-center sm:text-left'>
							<h2 className='text-lg lg:text-2xl font-medium leading-6 text-gray-900 dark:text-gray-200'>
								Provide additional feedback
							</h2>
						</div>
					</div>
				</div>
				<button
					onClick={() => setCloseModal(true)}
					className='text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
				>
					<svg
						stroke='currentColor'
						fill='none'
						strokeWidth='2'
						viewBox='0 0 24 24'
						strokeLinecap='round'
						strokeLinejoin='round'
						height='20'
						width='20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<line x1='18' y1='6' x2='6' y2='18'></line>
						<line x1='6' y1='6' x2='18' y2='18'></line>
					</svg>
				</button>
			</div>
			<div className='p-6'>
				<form>
					<textarea
						id='feedback-other'
						placeholder='What do you like about the response?'
						rows={3}
						className='mb-1 mt-4 p-3 w-full resize-none rounded-[8px] dark:bg-gray-800 dark:focus:border-white dark:focus:ring-white border-[2px] border-[#8e8ea0] outline-none focus-visible:border-gray-300 text-base lg:text-lg'
						style={{
							overflowY: 'hidden'
						}}
					></textarea>
				</form>

				<div className={`mb-4 ${!!like && 'hidden'}`}>
					<div className='form-check flex items-center'>
						<input
							className='form-check-input float-left mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none'
							type='checkbox'
							id='feedback-harmful'
						/>
						<label
							className='form-check-label text-gray-800 dark:text-gray-100'
							htmlFor='feedback-harmful'
						>
							This is harmful / unsafe
						</label>
					</div>
					<div className='form-check flex items-center'>
						<input
							className='form-check-input float-left mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none'
							type='checkbox'
							id='feedback-false'
						/>
						<label
							className='form-check-label text-gray-800 dark:text-gray-100'
							htmlFor='feedback-false'
						>
							This isn't true
						</label>
					</div>
					<div className='form-check flex items-center'>
						<input
							className='form-check-input float-left mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none'
							type='checkbox'
							id='feedback-not-helpful'
						/>

						<label
							className='form-check-label text-gray-800 dark:text-gray-100'
							htmlFor='feedback-not-helpful'
						>
							This isn't helpful
						</label>
					</div>
				</div>

				<div className='mt-5 flex flex-col gap-3 sm:mt-4 sm:flex-row-reverse'>
					<div className='flex items-center gap-3'>
						<button className='btn relative btn-neutral border py-2 px-4 rounded'>
							<div className='flex w-full gap-2 items-center justify-center text-sm'>
								Submit feedback
							</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeedbackModalComponent;
