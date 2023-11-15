// import React, { useState, useEffect } from 'react';

const ScrollButtonComponent = ({ parentScrollY }: { parentScrollY: number }) => {
	// const [isVisible, setIsVisible] = useState(false);

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		if (window.scrollY > 100) {
	// 			setIsVisible(true);
	// 		} else {
	// 			setIsVisible(false);
	// 		}
	// 	};

	// 	window.addEventListener('scroll', handleScroll);

	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll);
	// 	};
	// }, []);

	const scrollToBottom = () => {
		window.scrollTo({
			top: document.body.scrollHeight,
			behavior: 'smooth'
		});
	};
	//absolute right-6 bottom-[124px] md:bottom-[180px] lg:bottom-[120px] estilos que debe tener el contenedor de este boton
	return (
		<button
			onClick={scrollToBottom}
			className={`flex items-center justify-center w-7 h-7 cursor-pointer  z-10 rounded-full border border-gray-200 bg-white text-gray-600 dark:border-white/10 dark:bg-[#444654]  dark:text-white ${
				parentScrollY <= 100 && 'hidden'
			}`}
		>
			<svg
				stroke='currentColor'
				fill='none'
				strokeWidth='2'
				viewBox='0 0 24 24'
				strokeLinecap='round'
				strokeLinejoin='round'
				className='icon-sm m-1'
				height='1em'
				width='1em'
				xmlns='http://www.w3.org/2000/svg'
			>
				<line x1='12' y1='5' x2='12' y2='19'></line>
				<polyline points='19 12 12 19 5 12'></polyline>
			</svg>
		</button>
	);
};

export default ScrollButtonComponent;
