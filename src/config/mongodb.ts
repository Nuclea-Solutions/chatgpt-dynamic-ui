import { MongoClient, ServerApiVersion } from 'mongodb';

const urlMockup = 'mongodb+srv://root:root@mongodb.net';
const URI = `${process.env.MONGODB_URI ?? urlMockup}/?retryWrites=true&w=majority`;

const client = URI
	? new MongoClient(URI, {
			serverApi: {
				version: ServerApiVersion.v1,
				strict: true,
				deprecationErrors: true
			}
	  })
	: undefined;

export async function runMongo() {
	if (!client) return;
	try {
		await client.connect();
		await client.db('admin').command({ ping: 1 });
		return client;
	} catch (err) {
		await client.close();
	}
}
