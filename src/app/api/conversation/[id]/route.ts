import { NextResponse } from 'next/server';
import { runMongo } from '@/config/mongodb';

export async function GET(req: Request) {
	const id = req.url.slice(req.url.lastIndexOf('/') + 1);
	try {
		if (process.env.NODE_ENV === 'development') {
			const response = await fetch('http://localhost:3000/conversation.json');
			const conversations = await response.json();
			const conversation = conversations.find((item: Conversation) => item.id === id);

			return NextResponse.json(conversation);
		}
		const client = await runMongo();
		const db = await client.db('conversations');
		const collection = await db.collection('conversations');
		const conversation = await collection.findOne({ id });

		return NextResponse.json(conversation);
	} catch (error) {
		console.error(error);
		return error;
	}
}
