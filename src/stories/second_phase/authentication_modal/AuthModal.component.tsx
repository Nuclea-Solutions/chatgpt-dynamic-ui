import { Modal } from '@mui/material';
import React, { useState, ChangeEvent, CSSProperties } from 'react';

const AuthModalComponent = ({
	authenticationType = 'apikey',
	authType = 'basic',
	handleAuthenticationType,
	handleAuthType,
	handleAuthTypeModalOpen,
	handleAuthTypeClose,
	open
}: {
	authenticationType: string;
	authType: string;
	handleAuthenticationType: (e: ChangeEvent<HTMLInputElement>) => void;
	handleAuthType: (e: ChangeEvent<HTMLInputElement>) => void;
	handleAuthTypeModalOpen: () => void;
	handleAuthTypeClose: () => void;
	open: boolean;
}) => {
	// const [authenticationType, setAuthenticationType] = useState('none');
	// const [authType, setAuthType] = useState('basic');

	// const handleAuthenticationType = (e: ChangeEvent<HTMLInputElement>) => {
	// 	setAuthenticationType(e.target.value);
	// };

	// const handleAuthType = (e: ChangeEvent<HTMLInputElement>) => {
	// 	setAuthType(e.target.value);
	// };
	const style: CSSProperties = {
		position: 'absolute' as 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		backgroundColor: 'white',
		boxShadow: '0 0 24px rgba(0, 0, 0, 0.1)',
		padding: 4
	};

	return (
		<Modal
			open={open}
			onClose={handleAuthTypeClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<div
				className='flex flex-col bg-white dark:bg-[#202123] dark:text-white rounded-xl border w-[300px] md:w-[400px]'
				style={style}
			>
				<div className='p-5 border-b-1 font-semibold'>Authentication</div>
				<div>
					<div className='p-5 flex flex-col gap-3'>
						<div>
							<h4 className='font-semibold'>Authentication Type</h4>
							<div className='flex items-center gap-2'>
								<input
									type='radio'
									id='none'
									name='authentication'
									value='none'
									className='h-5 w-5 cursor-pointer'
									onChange={handleAuthenticationType}
									checked={authenticationType === 'none'}
								/>
								<label htmlFor='none' className='cursor-pointer flex items-center'>
									None
								</label>

								<input
									type='radio'
									name='authentication'
									value='apikey'
									className='h-5 w-5 cursor-pointer'
									onChange={handleAuthenticationType}
									checked={authenticationType === 'apikey'}
								/>
								<label htmlFor='apikey' className='cursor-pointer flex items-center'>
									API Key
								</label>

								<input
									type='radio'
									id='oauth'
									name='authentication'
									value='oauth'
									className='h-5 w-5 cursor-pointer'
									onChange={handleAuthenticationType}
									checked={authenticationType === 'oauth'}
								/>
								<label htmlFor='oauth' className='cursor-pointer flex items-center'>
									OAuth
								</label>
							</div>
						</div>

						{authenticationType === 'apikey' ? (
							<div className='flex flex-col gap-2'>
								<p className='font-semibold'>API Key</p>

								<input
									type='text'
									className='w-full rounded-[6px] py-2 px-4 border dark:bg-[#353541]'
									placeholder='<HIDDEN>'
								/>

								<div className='flex flex-col gap-1'>
									<h4 className='font-semibold'>Auth Type</h4>
									<div className='flex items-center gap-2'>
										<input
											type='radio'
											name='auth'
											value='basic'
											className='w-5 h-5 cursor-pointer'
											onChange={handleAuthType}
											checked={authType === 'basic'}
										/>
										<label htmlFor='basic' className='cursor-pointer flex items-center'>
											Basic
										</label>

										<input
											type='radio'
											id='bearer'
											name='auth'
											value='bearer'
											className='w-5 h-5 cursor-pointer'
											onChange={handleAuthType}
											checked={authType === 'bearer'}
										/>
										<label htmlFor='bearer' className='cursor-pointer flex items-center'>
											Bearer
										</label>

										<input
											type='radio'
											id='custom'
											name='auth'
											value='custom'
											className='w-5 h-5 cursor-pointer'
											onChange={handleAuthType}
											checked={authType === 'custom'}
										/>
										<label htmlFor='custom' className='cursor-pointer flex items-center'>
											Custom
										</label>
									</div>

									<div className={`flex flex-col gap-1 ${authType !== 'custom' && 'hidden'}`}>
										<h4 className='font-semibold'>Custom Header Name</h4>
										<input
											type='text'
											className='w-full rounded-[6px] py-2 px-4 border'
											placeholder='X-Api-Key'
										/>
									</div>
								</div>
							</div>
						) : authenticationType === 'oauth' ? (
							<div className='flex flex-col gap-2'>
								<div className='flex flex-col gap-1'>
									<p>Client ID</p>
									<input
										type='text'
										className='w-full rounded-[6px] py-2 px-4 border'
										placeholder='<HIDDEN>'
									/>

									<p>Client Secret</p>
									<input
										type='text'
										className='w-full rounded-[6px] py-2 px-4 border'
										placeholder='<HIDDEN>'
									/>

									<p>Authorization URL</p>
									<input type='text' className='w-full rounded-[6px] py-2 px-4 border' />

									<p>Token URL</p>
									<input type='text' className='w-full rounded-[6px] py-2 px-4 border' />

									<p>Scope</p>
									<input type='text' className='w-full rounded-[6px] py-2 px-4 border' />
								</div>
								<div>
									<p>Token Exchange Method</p>

									<div className='flex gap-2'>
										<input
											type='radio'
											id='postRequest'
											name='auth'
											value='postRequest'
											className='h-5 w-5'
										/>
										<label htmlFor='postRequest' className='cursor-pointer flex items-center'>
											Default (POST request)
										</label>
									</div>
									<div className='flex gap-2'>
										<input
											type='radio'
											id='basicAuthorizationHeader'
											name='auth'
											value='basicAuthorizationHeader'
											className='h-5 w-5'
										/>
										<label
											htmlFor='basicAuthorizationHeader'
											className='cursor-pointer flex items-center'
										>
											Basic Authorization Header
										</label>
									</div>
								</div>
							</div>
						) : (
							''
						)}

						<div className=' flex justify-end gap-2'>
							<button
								className='bg-gray-200 py-1 px-2 rounded-[6px] border border-white'
								onClick={handleAuthTypeClose}
							>
								Cancel
							</button>
							<button className='bg-gray-200 py-1 px-2 rounded-[6px] border border-white'>
								Save
							</button>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default AuthModalComponent;
