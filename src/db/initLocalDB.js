
const Conversation = require('./models/conversationSchema.js');
const { getConnection, mongoose } = require('../config/connection.js')

const initLocalDB = async () => {
	try {
		const connect = await getConnection();
		if (!connect) return;
		await connect.connection.dropDatabase();

		const responseJSON = await fetch('http://localhost:3000/conversation.json');
		const response = await responseJSON.json();

		const convesations = response.length ? response : [];
		if (!convesations.length) return;
		await Promise.all(
			await convesations.map(async (item) => {
				// const conversationItem = { ...item, _id: new mongoose.Types.ObjectId(Date.now()) }
				const newValue = new Conversation(item);
				await newValue.save();
			})
		);
	} catch (error) {
		console.log({ error });
	}
};

module.exports = initLocalDB;