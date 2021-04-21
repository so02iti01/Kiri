const NodePane = ({ info, nodeLabel, setNodeLabel }) => {
	return (
		<div className='absolute top-20 right-20 mnw-10r'>
			{info && (
				<div className='flex-c w-100p'>
					<div className='w-100p'>
						<input
							id='currentNodeName'
							className='k-input'
							type='text'
							placeholder={info?.data?.label}
							value={nodeLabel}
							onChange={(e) => setNodeLabel(e.target.value)}
						/>
					</div>
					{/* <span>{info?.id?.replace('node_', '')}</span> */}
				</div>
			)}
		</div>
	)
}

export default NodePane;