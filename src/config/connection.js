const mongoose = require('mongoose');
const URI = `mongodb://root:root@127.0.0.1:27017/chat`;

async function getConnection() {
	try {
		const connection = await mongoose.connect(`${URI}?authSource=admin&readPreference=primary`);
		console.log('Successfully connected to mongodb');
		return connection;
	} catch (error) {
		console.error('Mongodb connection error: ', { error });
		return null;
	}
}

module.exports = getConnection;
