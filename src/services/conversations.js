const Conversation = require('../db/models/conversationSchema.js');

class ConversationService {
	getAll() {
		return Conversation.find();
	}

	getById(id) {
		return Conversation.findById(id);
	}

	save(conversation) {
		return Conversation.create(conversation);
	}

	update(id, newMapping) {
		return Conversation.updateOne(id, { mapping: newMapping });
	}
}

module.exports = ConversationService;