import { NextResponse } from 'next/server';
import { nanoid } from 'nanoid';
import { runMongo } from '@/config/mongodb';

const getConnection = require('../../../../config/connection.js');
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

		if (process.env.NODE_ENV === 'development') {
			const connect = await getConnection();
			if (!connect) return;
			await conversationService.update({ _id: id }, newConver.mapping);
			return NextResponse.json(newConver);
		}

		const client = await runMongo();
		const db = client?.db('conversations');

		const updated = await db
			?.collection('conversations')
			.updateOne({ id: id }, { $set: { mapping: newConver.mapping } });

		return NextResponse.json(updated);
	} catch (error) {
		console.error(error);
		return error;
	}
}
