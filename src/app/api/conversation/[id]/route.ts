import { NextResponse } from 'next/server';
import { runMongo } from '@/config/mongodb';

export async function GET(req: Request) {
	const id = req.url.slice(req.url.lastIndexOf('/') + 1);
	try {
		const client = await runMongo();
		const db = await client.db('conversations');
		const collection = await db.collection('conversations');
		const conversation = await collection.findOne({ id });

		return NextResponse.json(conversation);
	} catch (error) {
		throw new Error('Error');
	}
}

export async function POST(req: Request) {
	// TODO:
	return NextResponse.json({ data: 'ok' }, { status: 200 });
}
