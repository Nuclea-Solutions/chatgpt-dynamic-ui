import { NextResponse } from 'next/server';
import { runMongo } from '@/config/mongodb';

const ConversationService = require('../../../../services/conversations.js');
const conversationService = new ConversationService();
const { getConnection } = require('../../../../config/connection.js');

export async function GET(req: Request) {
	const id = req.url.slice(req.url.lastIndexOf('/') + 1);
	try {
		// DEVELOPMENT
		if (process.env.NODE_ENV === 'development') {
			const connection = await getConnection();
			// Without db
			if (!connection || connection === 'no-db') {
				return NextResponse.json({});
			}

			// Optional local mongo db for development
			const conversation = await conversationService.getById(id);
			return NextResponse.json(conversation);
		}

		// PRODUCTION
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
