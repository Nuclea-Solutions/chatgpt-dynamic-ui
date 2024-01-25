import { NextResponse } from 'next/server';
import { runMongo } from '@/config/mongodb';

const ConversationService = require('../../../services/conversations.js');
const conversationService = new ConversationService();
const { getConnection, mongoose } = require('../../../config/connection.js');

export async function GET(req: Request) {
	try {
		// DEVELOPMENT
		if (process.env.NODE_ENV === 'development') {
			console.log(mongoose.connection.readyState);

			const connection = await getConnection();
			// Without db
			if (!connection || connection === 'no-db') {
				return NextResponse.json({ conversations: [] });
			}
			// Optional local mongo db for development
			const conversations = await conversationService.getAll();
			return NextResponse.json({ conversations });
		}

		// PRODUCTION
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
