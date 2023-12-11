import React from 'react';
import { TbPencil } from 'react-icons/tb';
const SaveMenuComponent = () => {
	return (
		<div className='flex flex-col gap-2 bg-gray-200 p-4 rounded border border-gray-300'>
			<p>Publish to</p>

			<div>
				<div className='flex gap-2'>
					<input
						type='radio'
						name='auth'
						value='onlyMe'
						className='w-5 h-5 cursor-pointer'
						// onChange={handleAuthType}
						// checked={authType === 'basic'}
					/>
					<label htmlFor='onlyMe' className='cursor-pointer flex items-center'>
						Only me
					</label>
				</div>
				<div className='flex gap-2'>
					<input
						type='radio'
						name='auth'
						value='anyoneWithaLink'
						className='w-5 h-5 cursor-pointer'
						// onChange={handleAuthType}
						// checked={authType === 'basic'}
					/>
					<label htmlFor='anyoneWithaLink' className='cursor-pointer flex items-center'>
						Anyone with a link
					</label>
				</div>
				<div className='flex gap-2'>
					<input
						type='radio'
						name='auth'
						value='public'
						className='w-5 h-5 cursor-pointer'
						// onChange={handleAuthType}
						// checked={authType === 'basic'}
					/>
					<label htmlFor='public' className='cursor-pointer flex items-center'>
						Public
					</label>
				</div>
			</div>

			<div>
				<div className='px-6 py-4 bg-white rounded text-center relative flex flex-col items-center'>
					<div className='border rounded-full h-8 w-8'></div>
					<p>Visual Innovator</p>
					<p>By FIXTECH SA DE CV</p>
					<div className='absolute top-4 right-4 hover:cursor-pointer'>
						<TbPencil size={15} />
					</div>
				</div>
			</div>
			<div>
				<button className='bg-green-500 text-white w-full rounded-[8px] p-1'>Confirm</button>
			</div>
		</div>
	);
};

export default SaveMenuComponent;
