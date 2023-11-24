import MarkdownMessage from '@/components/MarkdownMessage';
import FeedbackComponent from '@/stories/feedback/Feedback.component';

const AssistantMessage = ({ content, contentId }: { content: string; contentId: string }) => {
	return (
		<div className='flex flex-col w-full md:w-[820px] md:max-w-[91%]'>
			<p className='font-semibold text-sm mb-1'>ChatGPT</p>
			<div className='flex-1 flex flex-col item-start justify-between md:flex-row md:max-w-[80%]'>
				<MarkdownMessage id={contentId} content={content} />
				<div className='lg:pl-1'>
					<FeedbackComponent />
				</div>
			</div>
		</div>
	);
};

export default AssistantMessage;
