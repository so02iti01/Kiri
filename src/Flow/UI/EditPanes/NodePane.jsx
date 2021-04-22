const NodePane = ({ currentItem, nodeLabel, setNodeLabel }) => {
	return (
		<div className='absolute top-16 right-16 mnw-10r portrait-left-16 portrait-special-w'>
			<div className='flex-c w-100p'>
				<div className='w-100p'>
					<textarea
						id='currentNodeName'
						className='k-input portrait-w-100p'
						type='text'
						placeholder={currentItem?.data?.label}
						value={nodeLabel}
						onChange={(e) => setNodeLabel(e.target.value)}
					></textarea>
				</div>
			</div>
		</div>
	);
};

export default NodePane;
