import { NextResponse } from 'next/server';
import { runMongo } from '@/config/mongodb';
const ConversationService = require('../../../services/conversations.js');
const conversationService = new ConversationService();
const getConnection = require('../../../config/connection.js');

export async function GET(req: Request) {
	try {
		if (process.env.NODE_ENV === 'development') {
			const connect = await getConnection();

			if (!connect || connect == 'no-db') {
				return NextResponse.json({ conversations: [] });
			}
			const conversations = await conversationService.getAll();

			return NextResponse.json({ conversations });
		}

		const client = await runMongo();
		const db = client?.db('conversations');
		const collection = db?.collection('conversations');
		const conversations = await collection?.find({}).toArray();
		return NextResponse.json({ conversations });
	} catch (error) {
		console.error({ error });
		return error;
	}
}
