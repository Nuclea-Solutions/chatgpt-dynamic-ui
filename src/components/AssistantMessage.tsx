import MarkdownMessage from '@/components/MarkdownMessage';
import FeedbackComponent from '@/stories/feedback/Feedback.component';

const AssistantMessage = ({ content, contentId }: { content: string; contentId: string }) => {
	return (
		<div className='flex-1 flex flex-col item-start justify-between md:flex-row md:max-w-[80%]'>
			<MarkdownMessage id={contentId} content={content} />
			<div className='pl-1'>
				<FeedbackComponent />
			</div>
		</div>
	);
};

export default AssistantMessage;
