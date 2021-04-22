import Nodes from './Nodes';
import Edges from './Edges';

const NodeActions = ({
	view,
	elements,
	setElements,
	createNode,
	createConnectedNode,
	currentItem,
	setCurrentItem,
	modifyNode,
}) => {
	const colors = [
		{
			color: 'gray',
			weight: '70',
		},
		{
			color: 'blue',
			weight: '60',
		},
		{
			color: 'cyan',
			weight: '40',
		},
		{
			color: 'teal',
			weight: '60',
		},
		{
			color: 'green',
			weight: '40',
		},
	];

	return (
		<div className='absolute h-100p flex-c left-16 top-0 bottom-0'>
			<div
				className={`backdrop-blur-5 border-ui-2 radius-${
					view === 'node' ? '90' : '8'
				}`}
			>
				{currentItem && view === 'node' && (
					<Nodes
						currentItem={currentItem}
						elements={elements}
						setElements={setElements}
						createNode={createNode}
						createConnectedNode={createConnectedNode}
					/>
				)}

				{currentItem.source && view === 'edge' && (
					<Edges
						elements={elements}
						setElements={setElements}
						currentItem={currentItem}
						modifyNode={modifyNode}
					/>
				)}
			</div>

			{currentItem && view === 'node' && currentItem.type === 'default' && (
				<div className='flex-c mt-1r'>
					{colors.map((e) => (
						<button
							key={e.color}
							className={`h-1-5r w-1-5r j-button app flex-c radius-90 mb-0-25r bg-${e.color}-${e.weight}`}
							onClick={() => {
								let n = {
									...currentItem,
									className: e.color === 'gray' ? '' : e.color
								}

								setCurrentItem(n);
							}}
						></button>
					))}
				</div>
			)}
		</div>
	);
};

export default NodeActions;
