import { NextResponse } from 'next/server';

const getConnection = require('../../../config/connection.js');
const ConversationService = require('../../../services/conversations.js');
const conversationService = new ConversationService();

export async function POST(req: Request) {
	const json = await req.json();
	const { data } = json;
	try {
		if (process.env.NODE_ENV === 'development') {
			const connect = await getConnection();
			if (!connect) {
				return NextResponse.json(undefined);
			}
			const newConverRes = await conversationService.save(data);
			const newConver = JSON.parse(JSON.stringify(newConverRes));
			return NextResponse.json({ ...newConver, _id: newConver._id.toString() });
		}

		// TODO: logic for prod mongo
		// const client = await runMongo();
		// const db = client?.db('conversations');
		// const collection = db?.collection('conversations');
		// const conversation = await collection?.findOne({ id });
		// return NextResponse.json(conversation);
	} catch (error) {
		console.log({ error });
		return NextResponse.json(undefined);
	}
}
