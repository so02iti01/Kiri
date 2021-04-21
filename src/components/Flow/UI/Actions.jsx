const Actions = ({ elements, setElements, getId }) => {
	const createNode = (type) => {
		let newNode = {
			id: getId(),
			type,
			data: { label: 'A new node' },
			position: { x: 500, y: 500 },
		};

		setElements((es) => es.concat(newNode));
	}

	return (
		<div className="h-100p absolute top-0 right-20 flex-c">
			<div className="backdrop-blur-5 border-ui-2 flex-c radius-90 p-0-5r">
				<button className="j-button app bg-blue-70 h-1-75r w-1-75r shadow-md radius-90 icon-only" onClick={() => createNode('input')}></button>
				<button className="j-button app bg-gray-100 h-1-75r w-1-75r shadow-md radius-90 icon-only my-0-5r" onClick={() => createNode('default')}></button>
				<button className="j-button app bg-magenta-60 h-1-75r w-1-75r shadow-md radius-90 icon-only" onClick={() => createNode('output')}></button>
			</div>
		</div>
	)
}

export default Actions;