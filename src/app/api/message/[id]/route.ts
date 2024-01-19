import { NextResponse } from 'next/server';
import { nanoid } from 'nanoid';

const getConnection = require('../../../../config/connection.js');
const ConversationService = require('../../../../services/conversations.js');
const conversationService = new ConversationService();

export async function POST(req: Request) {
	try {
		const json = await req.json();
		const id = req.url.slice(req.url.lastIndexOf('/') + 1);
		const { data } = json;

		if (process.env.NODE_ENV === 'development') {
			const connect = await getConnection();
			if (!connect) return;

			const messageId = data.message.id ?? nanoid();
			let newConver = {
				...data.conversation,
				mapping: {
					...data.conversation.mapping,
					[messageId]: { message: data.message, id: messageId }
				}
			};

			await conversationService.update({ _id: id }, newConver.mapping);
			return NextResponse.json(newConver);
		}

		// TODO: post message in prod
		// const client = await runMongo();
		// const db = client?.db('conversations');
		// const collection = db?.collection('conversations');
		// const conversation = await collection?.findOne({ id });

		// return NextResponse.json(conversation);
	} catch (error) {
		console.error(error);
		return error;
	}
}
