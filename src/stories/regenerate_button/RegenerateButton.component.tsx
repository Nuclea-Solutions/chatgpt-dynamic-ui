interface Props {
	isRegenerate: boolean;
	setIsRegenerate: React.Dispatch<React.SetStateAction<boolean>>;
}
const RegenerateButtonComponent = ({ isRegenerate, setIsRegenerate }: Props) => {
	const handleClik = () => setIsRegenerate((prev) => !prev);
	return (
		<div
			className={`border ${
				isRegenerate ? 'w-[146px]' : 'w-[118px]'
			} h-[38px] py-2 px-3 rounded text-gray-600 dark:text-white`}
		>
			<button className='whitespace-nowrap border-none text-sm' onClick={handleClik}>
				<div className='flex w-full gap-2 items-center justify-center'>
					{isRegenerate ? (
						<>
							<svg
								stroke='currentColor'
								fill='none'
								strokeWidth='2'
								viewBox='0 0 24 24'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='icon-xs'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'
							>
								<rect x='3' y='3' width='18' height='18' rx='2' ry='2'></rect>
							</svg>
							Stop generating
						</>
					) : (
						<>
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
							Regenerate
						</>
					)}
				</div>
			</button>
		</div>
	);
};

export default RegenerateButtonComponent;
