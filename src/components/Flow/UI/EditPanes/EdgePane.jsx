const EdgePane = ({ currentItem, info, edgeLabel, setEdgeLabel }) => {
	return (
		<div className='absolute top-16 right-16 mnw-10r'>
			{info && (
				<div className='flex-c w-100p'>
					<div className='w-100p'>
						<textarea
							id='currentNodeName'
							className='k-input'
							type='text'
							placeholder={currentItem?.label}
							value={edgeLabel}
							onChange={(e) => setEdgeLabel(e.target.value)}
						></textarea>
					</div>
				</div>
			)}
		</div>
	);
};

export default EdgePane;
