/* eslint-disable no-console */
const Conversation = require('../db/models/conversationSchema.js');

class ConversationService {
	getAll() {
		return Conversation.find();
	}

	getById(id) {
		return Conversation.findById(id);
	}

}

module.exports = ConversationService;