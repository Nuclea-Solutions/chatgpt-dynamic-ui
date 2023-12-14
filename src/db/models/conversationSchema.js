const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema(
	{
		title: String,
		create_time: mongoose.Schema.Types.Mixed,
		update_time: mongoose.Schema.Types.Mixed,
		mapping: {
			id: String,
			message: {
				id: String,
				author: {
					role: String,
					name: String,
					metadata: {}
				},
				create_time: mongoose.Schema.Types.Mixed,
				update_time: mongoose.Schema.Types.Mixed,
				content: {
					content_type: String,
					parts: Array
				},
				status: String,
				end_turn: Boolean,
				weight: Number,
				metadata: {},
				recipient: String
			},
			parent: String,
			children: Array
		},
		current_node: String,
		id: String,
		// _id: mongoose.Schema.ObjectId
	},
	{ strict: false }
);

const Conversation = !mongoose.models.Conversation ? mongoose.model('Conversation', conversationSchema) : mongoose.models.Conversation;
module.exports = Conversation;