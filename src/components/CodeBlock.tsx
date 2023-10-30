import { FC, memo } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// import './styles.css';

interface Props {
	language: string;
	value: string;
	type?: 'request' | 'response';
}

const CodeBlock: FC<Props> = memo(({ language, value, type, ...rest }) => {
	return (
		<pre className='codeblock relative bg-zinc-950 font-sans max-w-[50vw]'>
			<div className='flex w-full items-center justify-between bg-zinc-800 px-6 py-2 pr-4 text-zinc-100'>
				<span className='text-xs'>{type?.toUpperCase() ?? ''}</span>
			</div>
			<SyntaxHighlighter
				{...rest}
				language={language}
				style={coldarkDark}
				PreTag='div'
				showLineNumbers
				customStyle={{
					margin: 0,
					width: '100%',
					background: 'transparent',
					padding: '1.5rem 1rem'
				}}
				codeTagProps={{
					style: {
						fontSize: '0.9rem',
						fontFamily: 'var(--font-mono)',
						whiteSpace: 'pre-wrap'
					},
					className: 'whitespace-pre-wrap break-words',
					id: 'codeBlock'
				}}
				wrapLines
				wrapLongLines
			>
				{value}
			</SyntaxHighlighter>
		</pre>
	);
});

export { CodeBlock };
