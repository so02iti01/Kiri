import jsStringEscape from 'js-string-escape';

const NodePane = ({ info, nodeLabel, setNodeLabel }) => {
	return (
		<div className='absolute top-16 right-16 mnw-10r'>
			{info && (
				<div className='flex-c w-100p'>
					<div className='w-100p'>
						<textarea
							id='currentNodeName'
							className='k-input'
							type='text'
							placeholder={info?.data?.label}
							value={nodeLabel}
							onChange={(e) => setNodeLabel(jsStringEscape(e.target.value))}
						></textarea>
					</div>
				</div>
			)}
		</div>
	)
}

export default NodePane;