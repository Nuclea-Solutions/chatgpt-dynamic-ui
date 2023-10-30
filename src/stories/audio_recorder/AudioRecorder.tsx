import { useState, useEffect } from 'react';
import { useReactMediaRecorder } from 'react-media-recorder';
import { BsFillRecordCircleFill } from 'react-icons/bs';
import { FaMicrophone } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const AudioRecorder = () => {
	const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({
		audio: true
	});

	const [isBlinking, setIsBlinking] = useState(false);
	const [minutes, setMinutes] = useState<number>(0);
	const [seconds, setSeconds] = useState<number>(0);

	const resetCounter = () => {
		setMinutes(0);
		setSeconds(0);
	};

	useEffect(() => {
		let interval: any;

		if (status === 'recording') {
			interval = setInterval(() => {
				setIsBlinking((prevBlinking) => !prevBlinking);
			}, 1000);
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [status]);

	useEffect(() => {
		let interval: any;

		if (status) {
			interval = setInterval(() => {
				if (seconds === 59) {
					setMinutes(minutes + 1);
					setSeconds(0);
				} else {
					setSeconds(seconds + 1);
				}
			}, 1000);
		} else {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [status, minutes, seconds]);

	return (
		<div className='flex flex-col'>
			{status === 'recording' ? (
				<div className='flex justify-between border border-gray-700 bg-white p-2 rounded-full transition-all w-48 dark:bg-gray-800 dark:border-white'>
					<button
						onClick={() => {
							stopRecording();
							resetCounter();
						}}
						className='bg-gray-700 w-6 h-6 p-2 rounded-full text-white flex items-center dark:bg-white dark:text-gray-800'
					>
						<AiOutlineClose size={20} className='dark:text-black' />
					</button>
					<div className={` flex items-center gap-2 text-gray-700 dark:text-white`}>
						<div className='text-sm'>
							{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
						</div>
						<BsFillRecordCircleFill
							className={`${isBlinking ? 'opacity-0' : 'opacity-100'} dark:text-white`}
							size={20}
						/>
					</div>
				</div>
			) : (
				<div className='p-2'>
					<button
						onClick={startRecording}
						className='bg-white border-2 border-gray-700 w-7 h-7 p-2 rounded-full text-gray-700 flex items-center dark:bg-gray-800 dark:text-white'
					>
						<FaMicrophone size={20} className='dark:text-black' />
					</button>
				</div>
			)}

			{/* <audio src={mediaBlobUrl} controls /> */}
		</div>
	);
};

export default AudioRecorder;
