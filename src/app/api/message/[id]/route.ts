import { NextResponse } from 'next/server';
import { nanoid } from '@/utils/utils';
import { runMongo } from '@/config/mongodb';

const { getConnection, mongoose } = require('../../../../config/connection.js');
const ConversationService = require('../../../../services/conversations.js');
const conversationService = new ConversationService();

export async function POST(req: Request) {
	try {
		const json = await req.json();
		const id = req.url.slice(req.url.lastIndexOf('/') + 1);
		const { data } = json;

		const messageId = data.message.id ?? nanoid();
		let newConver = {
			...data.conversation,
			mapping: {
				...data.conversation.mapping,
				[messageId]: { message: data.message, id: messageId }
			}
		};

		// DEVELOPMENT
		if (process.env.NODE_ENV === 'development') {
			// Optional local mongo db for development
			if (mongoose.connection.readyState !== 0) {
				await getConnection();
				await conversationService.update({ id: id }, newConver.mapping);
				return NextResponse.json(newConver);
			} else {
				// Without db
				return NextResponse.json({});
			}
		}

		// PRODUCTION
		const client = await runMongo();
		// const db = client?.db('conversations');
		const updated = await client
			?.db('conversations')
			?.collection('conversations')
			.updateOne({ id: id }, { $set: { mapping: newConver.mapping } });

		return NextResponse.json(updated);
	} catch (error) {
		console.log({ error });
		return NextResponse.error();
	}
}
