import { NextResponse } from 'next/server';
import { runMongo } from '@/config/mongodb';

export async function GET(req: Request) {
	try {
		if (process.env.NODE_ENV === 'development') {
			const response = await fetch('http://localhost:3000/conversation.json');
			const conversations = await response.json();

			return NextResponse.json({ conversations });
		}

		const client = await runMongo();
		const db = await client.db('conversations');
		const collection = await db.collection('conversations');
		const conversations = await collection.find({}).toArray();

		return NextResponse.json({ conversations });
	} catch (error) {
		console.error(error);
		return error;
	}
}
