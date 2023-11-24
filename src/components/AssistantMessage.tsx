// libraries
import { useMemo, useState } from 'react';
// components
import MarkdownMessage from '@/components/MarkdownMessage';
import FeedbackComponent from '@/stories/feedback/Feedback.component';
// store
import useMessagesStore from '@/store/useMessagesStore';

const AssistantMessage = ({ content, contentId }: { content: string; contentId: string }) => {
	const conversationsStorage = useMessagesStore((state) => state.messages);
	const [showFeedbackMessage, setShowFeedbackMessage] = useState(false);

	const isLastMessage = useMemo(() => {
		const assistanConversations = conversationsStorage.filter(
			(assistanConversation) => assistanConversation.role === 'assistant'
		);
		const lastMessageId = assistanConversations[assistanConversations.length - 1].id;
		return lastMessageId === contentId;
	}, []);

	return (
		<div
			className='flex flex-col w-full md:w-[820px] md:max-w-[91%]'
			onMouseEnter={() => setShowFeedbackMessage(true)}
			onMouseLeave={() => setShowFeedbackMessage(false)}
		>
			<p className='font-semibold text-sm mb-1'>ChatGPT</p>
			<div className='flex-1 flex flex-col item-start justify-between md:max-w-[80%] gap-3'>
				<MarkdownMessage id={contentId} content={content} />
				<FeedbackComponent
					showFeedbackMessage={showFeedbackMessage}
					isLastMessage={isLastMessage}
				/>
			</div>
		</div>
	);
};

export default AssistantMessage;
