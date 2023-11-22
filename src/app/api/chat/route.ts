import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
	try {
		const json = await req.json();
		const { message, userId } = json;

		const response = await axios.post(`${process.env.ASSISTANT_URL}/message/` ?? '', {
			message,
			user_id: userId
		});
		return NextResponse.json(response.data);
	} catch (error) {
		console.log({ error });
		return NextResponse.json(error);
	}
}
