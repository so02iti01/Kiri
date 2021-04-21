const Info = ({ info }) => {
	return (
		<div className='absolute top-20 right-20 ui shadow-md radius-12 p-1r'>
			{info && (
				<div className="flex-c">
					<span>{info?.data?.label}</span>
					<span>{info?.id?.replace('node_', '')}</span>
				</div>
			)}
		</div>
	);
};

export default Info;
