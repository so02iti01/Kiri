const Info = ({ info, nodeName, setNodeName }) => {
	return (
		<div className='absolute top-20 right-20 backdrop-blur-5 border-ui-2 radius-12 p-0-5r mnw-10r'>
			{info && (
				<div className='flex-c w-100p'>
					<div className='w-100p'>
						<input
							id='currentNodeName'
							className='k-input'
							type='text'
							placeholder={info?.data?.label}
							value={nodeName}
							onChange={(e) => setNodeName(e.target.value)}
						/>
					</div>
					{/* <span>{info?.id?.replace('node_', '')}</span> */}
				</div>
			)}
		</div>
	);
};

export default Info;
