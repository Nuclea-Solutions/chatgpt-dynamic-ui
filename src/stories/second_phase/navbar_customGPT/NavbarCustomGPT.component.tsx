'use client';
import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';
import { GoDotFill } from 'react-icons/go';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import SaveMenuComponent from '../save_menu/SaveMenu.component';
import DeleteMenuComponent from '../delete_menu/DeleteMenu.component';
const NavbarCustomGPTComponent = () => {
	const router = useRouter();
	const [menuVisibleDelete, setMenuVisibleDelete] = useState(false);
	const menuDeleteRef = useRef<HTMLDivElement>(null);
	const buttonDeleteRef = useRef<HTMLButtonElement>(null);
	const [saveMenuVisible, setSaveMenuVisible] = useState(false);
	const saveMenuRef = useRef<HTMLDivElement>(null);
	const buttonSaveMenuRef = useRef<HTMLButtonElement>(null);

	const handleOpenMenuDelete = () => {
		setMenuVisibleDelete((prev) => !prev);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				menuDeleteRef.current &&
				!menuDeleteRef.current.contains(event.target as Node) &&
				buttonDeleteRef.current &&
				!buttonDeleteRef.current.contains(event.target as Node)
			) {
				setMenuVisibleDelete(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside as any);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside as any);
		};
	}, []);

	const handleOpenMenuSave = () => {
		setSaveMenuVisible(!saveMenuVisible);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				saveMenuRef.current &&
				!saveMenuRef.current.contains(event.target as Node) &&
				buttonSaveMenuRef.current &&
				!buttonSaveMenuRef.current.contains(event.target as Node)
			) {
				setSaveMenuVisible(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside as any);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside as any);
		};
	}, []);

	return (
		<nav className='p-2 h-16 border z-30 dark:bg-[#444654] dark:text-white'>
			<div className='flex justify-between items-center'>
				<div className='flex items-center gap-3'>
					<div onClick={router.back} className='hover:cursor-pointer'>
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
							onClick={handleOpenMenuDelete}
							ref={buttonDeleteRef}
						>
							<HiOutlineDotsHorizontal size={18} />
						</button>

						<div
							className={`absolute right-0 top-10 z-50 ${!menuVisibleDelete && 'hidden'}`}
							ref={menuDeleteRef}
						>
							<DeleteMenuComponent />
						</div>
					</div>

					<div className='relative'>
						<button
							className='flex items-center gap-2 bg-green-500 px-2 py-1 rounded-[8px] text-white h-full'
							onClick={handleOpenMenuSave}
							ref={buttonSaveMenuRef}
						>
							Save <IoIosArrowDown />
						</button>
						<div
							className={`absolute right-0 top-10 z-20 ${
								!saveMenuVisible && 'hidden'
							} whitespace-nowrap`}
							ref={saveMenuRef}
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
