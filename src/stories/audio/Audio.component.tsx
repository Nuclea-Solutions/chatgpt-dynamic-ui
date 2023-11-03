import React, { useState, useRef, useEffect } from 'react';

import { CiPlay1, CiPause1 } from 'react-icons/ci';
interface AudioPlayerProps {
	audioSrc: string;
	color?: string;
}
const AudioComponent: React.FC<AudioPlayerProps> = ({ audioSrc, color }) => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(0);

	const togglePlay = () => {
		setIsPlaying(!isPlaying);
	};

	const formatTime = (seconds: number) => {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = Math.floor(seconds % 60);
		return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
	};

	useEffect(() => {
		const audio = audioRef.current;

		if (isPlaying) {
			audio?.play();
		} else {
			audio?.pause();
		}

		audio?.addEventListener('timeupdate', () => {
			setProgress((audio?.currentTime / audio?.duration) * 100);
		});

		return () => {
			audio?.removeEventListener('timeupdate', () => {
				setProgress((audio?.currentTime / audio?.duration) * 100);
			});
		};
	}, [isPlaying]);

	useEffect(() => {
		if (progress == 100) {
			setIsPlaying(!isPlaying);
		}
	}, [progress]);

	return (
		<div
			className={`p-4 rounded-full w-full max-w-md border-2 ${
				color ? `bg-[${color}]` : 'bg-white'
			} dark:bg-gray-800 dark:border-white`}
		>
			<audio ref={audioRef} src={audioSrc} />
			<div className='flex items-center justify-between'>
				<button onClick={togglePlay}>
					{isPlaying ? (
						<CiPause1 size={30} className='text-gray-400 dark:text-white' />
					) : (
						<CiPlay1 size={30} className='text-gray-400 dark:text-white' />
					)}
				</button>
				<div className='w-full flex flex-row ml-4 items-center gap-4'>
					<div className='bg-gray-300 h-2 rounded-full w-full'>
						<div
							className='bg-gray-700 h-2 rounded-full dark:bg-white'
							style={{ width: `${progress}%` }}
						/>
					</div>
					<div className='text-gray-400 text-sm dark:text-white'>
						<span>{formatTime(audioRef.current?.duration || 0)}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AudioComponent;
