'use client';
import React from 'react';
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';
import { GoDotFill } from 'react-icons/go';
import { useRouter } from 'next/navigation';
const NavbarCustomGPTComponent = () => {
	const router = useRouter();
	return (
		<nav className='p-2 h-16 border'>
			<div className='flex justify-between items-center'>
				<div className='flex items-center gap-3'>
					<div onClick={router.back}>
						<IoIosArrowBack />
					</div>
					<div className='flex items-center gap-2'>
						<div className='h-10 w-10 rounded-full border-2 border-dashed'></div>
						<div>
							<h4>New GPT</h4>

							<div className='flex items-center'>
								<GoDotFill />
								<p>Draft</p>
							</div>
						</div>
					</div>
				</div>
				<div>
					<button className='flex items-center gap-2 bg-green-500 px-2 py-1 rounded-[8px] text-white'>
						{' '}
						Save <IoIosArrowDown />
					</button>
				</div>
			</div>
		</nav>
	);
};

export default NavbarCustomGPTComponent;
