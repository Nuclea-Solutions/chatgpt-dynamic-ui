import React from 'react';
import DefaultOptionCardComponent from '../default_option_card/DefaultOptionCard.component';
import ToggleComponent from '../toggle/Toggle.component';

interface Props {
	isNewChat: boolean;
}

const EmptyCardsContainerComponent = ({ isNewChat }: Props) => {
	return (
		<div className='h-full w-full flex flex-col gap-3 mx-2 md:mx-4 lg:mx-auto lg:max-w-2xl xl:max-w-3xl p-2'>
			<ToggleComponent isNewChat={isNewChat} />
			<div className={`flex h-full w-full flex-col px-2 pb-2`}>
				<h1 className='text-4xl font-semibold text-center text-gray-200 dark:text-gray-600 ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center flex-grow'>
					ChatGPT
				</h1>
			</div>

			<div
				className={`grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-3 p-2 ${
					!isNewChat && 'hidden'
				}`}
			>
				<DefaultOptionCardComponent
					title='Design a database schema'
					content='for an online merch store'
				/>
				<DefaultOptionCardComponent
					title='show me a code snippet'
					content='of a website`s sticky header '
				/>
				<DefaultOptionCardComponent
					title='Suggest some names'
					content='for my cafe-by-day, bar-by-night business'
				/>
				<DefaultOptionCardComponent
					title='Come up with concepts'
					content='for a retro-style arcade game'
				/>
			</div>
		</div>
	);
};

export default EmptyCardsContainerComponent;
