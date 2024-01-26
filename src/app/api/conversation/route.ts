import { NextResponse } from 'next/server';
import { runMongo } from '@/config/mongodb';

const { getConnection, mongoose } = require('../../../config/connection.js');
const ConversationService = require('../../../services/conversations.js');
const conversationService = new ConversationService();

export async function POST(req: Request) {
	const json = await req.json();
	const { data } = json;

	try {
		// DEVELOPMENT
		if (process.env.NODE_ENV === 'development') {
			const connection = await getConnection();
			// Without db
			if (!connection || connection === 'no-db') {
				return NextResponse.json({});
			}
			const newConverRes = await conversationService.save(data);
			const newConver = JSON.parse(JSON.stringify(newConverRes));
			// return NextResponse.json({ ...newConver, _id: newConver._id.toString() });
			return NextResponse.json(newConver);
		}

		// PRODUCTION
		const client = await runMongo();
		const db = client?.db('conversations');
		const collection = db?.collection('conversations');
		const conversation = await collection?.insertOne(data);
		return NextResponse.json(conversation);
	} catch (error) {
		return NextResponse.json('error');
	}
}
