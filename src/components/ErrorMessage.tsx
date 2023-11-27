const ErrorMessage = ({ content }: { content: string }) => {
	return (
		<div
			style={{
				width: '100%',
				backgroundColor: '#f4e6e6',
				border: '1px solid #cf999a',
				borderRadius: '8px',
				padding: '12px'
			}}
		>
			<p>{content}</p>
		</div>
	);
};

export default ErrorMessage;
