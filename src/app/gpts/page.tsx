'use client';
import HelpButtonComponent from '@/stories/help_button/HelpButton.component';
import Image from 'next/image';
import React from 'react';

const gpts = [
	{
		id: '1',
		title: 'DALL E',
		description: 'Let me turnyour imagination into imagery',
		image: '/nucleabrand.png'
	},
	{
		id: '2',
		title: 'Data Analysis',
		description: 'Drop in any files and I can help analyze and visualize your data',
		image: '/nucleabrand.png'
	},
	{
		id: '3',
		title: 'ChatGPT Classic',
		description: 'The latest version of GPT-4 with no additional capabilities',
		image: '/nucleabrand.png'
	},
	{
		id: '4',
		title: 'Santa',
		description: "i'm Santa! Spreading cheer and helping with festive gift ideas ",
		image: '/nucleabrand.png'
	},
	{
		id: '5',
		title: 'Game Time',
		description:
			'i canquickly expain board games or card games to players of any age. Let the games begin!',
		image: '/nucleabrand.png'
	},
	{
		id: '6',
		title: 'The Negotatior',
		description:
			"I'll help you advocate for yourself and get better outcomes. Become a great negotiator",
		image: '/nucleabrand.png'
	},
	{
		id: '7',
		title: 'Creative Writing Coach',
		description: "I'm eager to read your work and give you feedback to improve your skills",
		image: '/nucleabrand.png'
	},
	{
		id: '8',
		title: 'Cosmic Dream',
		description: 'Visionary painter of digital wonder',
		image: '/nucleabrand.png'
	}
];

const page = () => {
	return (
		<div className='flex flex-col items-center h-full py-6'>
			<div className='w-3/6 flex flex-col gap-10'>
				{gpts.map((gpt) => (
					<div className='flex gap-10 ml-4 text-sm'>
						<div className='flex items-center gap-4'>
							<div className='flex items-center justify-center h-[32px] w-[32px] rounded-full overflow-hidden border'>
								<Image alt='gpt image' src={gpt.image} width={28} height={28} />
							</div>
							<div>
								<p className='font-semibold '>{gpt.title}</p>
								<p className=' w-[400px]'>{gpt.description}</p>
							</div>
						</div>
						<div className='flex items-center'>
							<p className='text-gray-500'>By ChatGPT</p>
						</div>
					</div>
				))}
				<div className='flex '>
					<button className='bg-gray-100 w-full p-2 rounded-[8px] border'>Load more</button>
				</div>
			</div>
			<div className='fixed bottom-2 right-2'>
				<HelpButtonComponent />
			</div>
		</div>
	);
};

export default page;
