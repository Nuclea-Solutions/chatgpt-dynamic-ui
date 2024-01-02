'use client';
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';
import { GoDotFill } from 'react-icons/go';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import SaveMenuComponent from '../save_menu/SaveMenu.component';
import DeleteMenuComponent from '../delete_menu/DeleteMenu.component';
const NavbarCustomGPTComponent = () => {
	const [openMenu, setOpenMenu] = useState<boolean>(false);
	const [openMenuDelete, setOpenMenuDelete] = useState<boolean>(false);

	const handleOpenMenu = () => {
		setOpenMenu((prev) => !prev);
		setOpenMenuDelete(false);
	};
	const handleOpenMenuDelete = () => {
		setOpenMenuDelete((prev) => !prev);
		setOpenMenu(false);
	};

	return (
		<nav className='p-2 h-16 border z-30 dark:bg-[#444654] dark:text-white'>
			<div className='flex justify-between items-center'>
				<div className='flex items-center gap-3'>
					<div className='hover:cursor-pointer'>
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

				<div className='flex gap-1'>
					<div className='relative'>
						<button
							className='flex items-center gap-2 px-2 py-1 rounded-[8px] text-black dark:text-white border h-full'
							onClick={handleOpenMenu}
						>
							{' '}
							<HiOutlineDotsHorizontal size={18} />
						</button>
						<div className={`absolute right-0 top-10 z-50 ${!openMenu && 'hidden'}`}>
							<DeleteMenuComponent />
						</div>
					</div>
					<div className='relative'>
						<button
							className='flex items-center gap-2 bg-green-500 px-2 py-1 rounded-[8px] text-white h-full'
							onClick={handleOpenMenuDelete}
						>
							{' '}
							Save <IoIosArrowDown />
						</button>
						<div
							className={`absolute right-0 top-10 z-20 ${
								!openMenuDelete && 'hidden'
							} whitespace-nowrap`}
						>
							<SaveMenuComponent />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavbarCustomGPTComponent;
