import MarkdownMessage from '@/components/MarkdownMessage';
import useMessagesStore from '@/store/useMessagesStore';
import FeedbackComponent from '@/stories/feedback/Feedback.component';

const AssistantMessage = ({
	content,
	contentId,
	showFeedbackMessage
}: {
	content: string;
	contentId: string;
	showFeedbackMessage: boolean;
}) => {
	const conversations = useMessagesStore((state) => state.messages);
	// const conversations = useConversationsStore((state) => state.conversationList);
	const assistanConversations = conversations.filter(
		(assistanConversation) => assistanConversation.role === 'assistant'
	);
	const lastMessageId = assistanConversations[assistanConversations.length - 1].id;
	const isLastMessage = lastMessageId === contentId;

	return (
		<div className='flex-1 flex flex-col item-start justify-between md:max-w-[80%] gap-3'>
			<MarkdownMessage id={contentId} content={content} />
			<FeedbackComponent showFeedbackMessage={showFeedbackMessage} isLastMessage={isLastMessage} />
		</div>
	);
};

export default AssistantMessage;
