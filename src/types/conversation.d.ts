type ConversationList = Conversation[];

interface Conversation {
	title: string;
	create_time: number;
	update_time: number;
	mapping: Mapping;
	moderation_results: any[];
	current_node: string;
	plugin_ids: any;
	conversation_id: string;
	conversation_template_id: string | null;
	id: string;
}

interface MessageModule {
	id: string;
	message: Message | null;
	parent: string | null;
	children: string[];
}

interface Mapping {
	[key: string]: MessageModule;
}

interface Message {
	id: string;
	author: Author;
	create_time: number | null;
	update_time: any;
	content: Content;
	status: string;
	end_turn: boolean | null;
	weight: number;
	metadata: Metadata;
	recipient: string;
	// output_component?: string | null;
	// input_component?: string | null;
}

interface Author {
	role: string;
	name: any;
	metadata: Metadata;
}

interface Metadata {}

interface Content {
	content_type: string;
	parts: string[];
}

interface FinishDetails {
	type: string;
	stop: string;
}

// interface PartItem {
// 	id: string;
// 	content_type: string;
// 	content_text?: string;
// 	content_component?: {
// 		name: string;
// 		props: {
// 			type: string;
// 			content: any;
// 		};
// 	};
// }
