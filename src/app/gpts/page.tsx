'use client';
import useMessagesStore from '@/store/useMessagesStore';
import HelpButtonComponent from '@/stories/help_button/HelpButton.component';
import MyGPTCardComponent from '@/stories/second_phase/myGPT_card/MyGPTCard.component';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaPlus } from 'react-icons/fa6';

const gptsMadeByOpenAi = [
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

const myGPTs = [
	{
		id: 1,
		title: 'Visual Innovator',
		description: 'A creative assistant for generating visual concepts for new products',
		image: '/nucleabrand.png'
	},
	{
		id: 2,
		title: 'Unititled',
		image: '/nucleabrand.png'
	},
	{
		id: 3,
		title: 'Tec',
		description: 'Asistente que tiene como objetivo reconocer cuando hay un camion en la imagen',
		image: '/nucleabrand.png'
	}
];

const page = () => {
	const router = useRouter();
	const setMessages = useMessagesStore((state) => state.setMessages);

	return (
		<div className='flex flex-col items-center gap-8 h-full py-6  overflow-auto'>
			<div className='flex flex-col  gap-10'>
				<div className='flex flex-col gap-10'>
					<h2 className='font-bold text-lg'>My GPTs</h2>
					<div
						className='flex gap-10 ml-2 text-sm hover:cursor-pointer hover:bg-gray-200 rounded-[8px] h-16 cursor-pointer'
						onClick={() => {
							setMessages([]);
							router.push('/custom_gpt');
						}}
					>
						<div className='flex items-center gap-4 ml-2'>
							<div className='flex items-center justify-center h-[40px] w-[40px] rounded-full overflow-hidden border-1 border-dashed bg-gray-100/50'>
								<FaPlus size={16} />
							</div>
							<div>
								<p className='font-semibold '>
									Create a GPT
									<span className='rounded-full bg-blue-100 px-2 py-[2px] text-xs font-thin text-blue-400'>
										Beta
									</span>
								</p>
								<p className=' w-[400px]'>Customize a version of ChatGPT for a spesific purpose</p>
							</div>
						</div>
					</div>
					<hr />
					<div className='flex flex-col gap-2 ml-2'>
						{myGPTs.map((myGPT) => (
							<MyGPTCardComponent
								image={myGPT.image}
								title={myGPT.title}
								description={myGPT.description}
								key={myGPT.id}
							/>
						))}
					</div>
				</div>

				<div className='flex flex-col gap-10'>
					<h2 className='font-bold text-lg'>Made by OpenAI</h2>
					{gptsMadeByOpenAi.map((gpt) => (
						<div
							className='flex gap-10 ml-2 text-sm hover:cursor-pointer hover:bg-gray-200 rounded-[8px] h-16'
							key={gpt.id}
						>
							<div className='flex items-center gap-4 ml-2'>
								<div className='flex items-center justify-center h-[40px] w-[40px] rounded-full overflow-hidden border'>
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
						<button className='hover:bg-gray-100 w-full p-2 rounded-[8px] border-1'>
							Load more
						</button>
					</div>
				</div>
			</div>
			<div className='fixed bottom-2 right-2'>
				<HelpButtonComponent />
			</div>
		</div>
	);
};

export default page;
