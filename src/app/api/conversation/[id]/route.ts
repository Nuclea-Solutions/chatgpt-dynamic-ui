import { NextResponse } from 'next/server';
import { runMongo } from '@/config/mongodb';

const ConversationService = require('../../../../services/conversations.js');
const conversationService = new ConversationService();
const getConnection = require('../../../../config/connection.js');

export async function GET(req: Request) {
	const id = req.url.slice(req.url.lastIndexOf('/') + 1);
	try {
		if (process.env.NODE_ENV === 'development') {
			const connect = await getConnection();
			if (!connect) return;
			const conversation = await conversationService.getById(id);

			return NextResponse.json(conversation);
		}
		const client = await runMongo();
		const db = client?.db('conversations');
		const collection = db?.collection('conversations');
		const conversation = await collection?.findOne({ id });

		return NextResponse.json(conversation);
	} catch (error) {
		console.error(error);
		return error;
	}
}
