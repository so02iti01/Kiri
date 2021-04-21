const Actions = ({ info, createNode, setElements, getId }) => {
	const createNodeByType = (ev, type) => {
		createNode(ev, info, 'bottom', type)
	};

	return (
		<div className='h-100p absolute top-0 right-16 flex-c'>
			<div className='backdrop-blur-5 border-ui-2 flex-c radius-90 p-0-25r'>
				<button
					className='j-button app bg-blue-70 h-1-75r w-1-75r shadow-md radius-90 icon-only'
					onClick={(ev) => createNodeByType(ev, 'input')}
					title={'Input node'}
				></button>
				<button
					className='j-button app bg-gray-100 dark-bg-gray-20 h-1-75r w-1-75r shadow-md radius-90 icon-only my-0-25r'
					onClick={(ev) => createNodeByType(ev, 'default')}
					title={'Default node'}
				></button>
				<button
					className='j-button app bg-magenta-60 h-1-75r w-1-75r shadow-md radius-90 icon-only'
					onClick={(ev) => createNodeByType(ev, 'output')}
					title={'Output node'}
				></button>
			</div>
		</div>
	);
};

export default Actions;
