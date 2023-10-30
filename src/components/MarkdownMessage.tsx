import React from 'react';
import Markdown from 'react-markdown';
import { CodeBlock } from '@//components/CodeBlock';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import remarkToc from 'remark-toc';
import rehypeStringify from 'rehype-stringify';

const MarkdownMessage = ({ content, id }: { content: string; id: string }) => {
	return (
		<div className='max-w-[100%]'>
			<Markdown
				children={content ?? ''}
				//remarkPlugins={[remarkGfm]}
				rehypePlugins={[remarkToc]}
				remarkPlugins={[
					[remarkGfm, rehypeRaw, { singleTilde: false }],
					[remarkToc, rehypeStringify]
				]}
				key={id}
				components={{
					code({ node, inline, className, children, ...props }) {
						const match = /language-(\w+)/.exec(String(children) || '');
						return !inline ? (
							<div className='w-full'>
								<CodeBlock
									key={id}
									language={(match && match[1]) || ''}
									value={String(children).replace(/\n$/, '')}
									{...props}
								/>
							</div>
						) : (
							<code className={className} {...props}>
								{children}
							</code>
						);
					},
					table({ children }) {
						return (
							<table className='border-collapse border border-black px-3 py-1 mt-4 mb-4 dark:border-white'>
								{children}
							</table>
						);
					},
					th({ children }) {
						return (
							<th className='break-words border border-black bg-gray-500 px-3 py-1 text-white dark:border-white'>
								{children}
							</th>
						);
					},
					td({ children }) {
						return (
							<td className='break-words border border-black px-3 py-1 dark:border-white'>
								{children}
							</td>
						);
					},
					ol({ children }) {
						return <ol className='list-decimal pl-4'>{children}</ol>;
					},
					ul({ children }) {
						return <ul className='list-disc pl-4'>{children}</ul>;
					},
					a({ children, href }) {
						return (
							<a className='underline text-[#3366cc]' href={href}>
								{children}
							</a>
						);
					}
				}}
			/>
		</div>
	);
};

export default MarkdownMessage;
