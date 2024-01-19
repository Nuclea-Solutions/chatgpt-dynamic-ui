import { Suspense } from 'react';
// components
import MessagesList from '@/components/MessagesList';
import InputContainer from '@/components/InputContainer';
// utils
import './styles.css';
import { URL } from '@/config';
/*
Conversation detail page: rendering a conversation with the new structure (type Conversation)
*/
export async function generateStaticParams() {
	const data = await fetch(`${URL}/api/conversations`).then((res) => res.json());
	return data?.conversations?.map((conversation: any) => ({
		id: conversation._id
	}));
}

export default async function Page({ params }: { params: { id: unknown } }) {
	const { id } = params;

	return (
		<Suspense fallback={<p>Loading feed...</p>}>
			<div className='flex justify-center h-full'>
				<div className='h-full w-full flex flex-col justify-between'>
					<div className='w-full'>
						<MessagesList conversationId={id as string} />
					</div>

					<div className='w-full px-4 flex items-center flex-row-reverse md:block sticky z-20 bottom-0'>
						<InputContainer />
					</div>
				</div>
			</div>
		</Suspense>
	);
}
