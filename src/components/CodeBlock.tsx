import { FC, memo, useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import { IoClipboardOutline } from 'react-icons/io5';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// import './styles.css';

interface Props {
	language: string;
	value: string;
	type?: 'request' | 'response';
}

const CodeBlock: FC<Props> = memo(({ language, value, type, ...rest }) => {
	const [copy, setCopy] = useState(false);

	const copyToClipboard = () => {
		navigator.clipboard
			.writeText(value)
			.then(() => {
				setCopy(true);

				setTimeout(() => {
					setCopy(false);
				}, 2000);
			})
			.catch((error) => {
				console.error('Error al copiar al portapapeles: ', error);
			});
	};

	return (
		<pre className='codeblock relative bg-zinc-950 font-sans max-w-[50vw] overflow-hidden'>
			<div className='flex justify-between py-2 px-4 bg-zinc-800 text-zinc-100 text-sm'>
				<p>{language}</p>

				{copy ? (
					<div
						className='flex justify-center items-center gap-2 cursor-pointer'
						onClick={copyToClipboard}
					>
						<IoMdCheckmark />
						<p>Copied!</p>
					</div>
				) : (
					<div
						className='flex justify-center items-center gap-2 cursor-pointer'
						onClick={copyToClipboard}
					>
						<p>Copy code</p>
						<IoClipboardOutline />
					</div>
				)}
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
