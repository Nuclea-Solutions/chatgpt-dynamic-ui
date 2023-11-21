const { MongoClient, ServerApiVersion } = require('mongodb');

const URI = `${process.env.MONGODB_URI}/?retryWrites=true&w=majority`;

const client = new MongoClient(URI, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true
	}
});

export async function runMongo() {
	try {
		await client.connect();
		await client.db('admin').command({ ping: 1 });
		console.log('Successfully connected to MongoDB');
		return await client;
	} catch (err) {
		await client.close();
	}
}
