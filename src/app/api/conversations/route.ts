import { NextResponse } from 'next/server';
import { runMongo } from '@/config/mongodb';

export async function GET(req: Request) {
	try {
		const client = await runMongo();
		const db = await client.db('conversations');
		const collection = await db.collection('conversations');
		const conversations = await collection.find({}).toArray();

		return NextResponse.json({ conversations });
	} catch (error) {
		throw new Error('Error');
	}
}
