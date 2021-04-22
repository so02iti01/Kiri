import { useState } from 'react';

const CreateNodeButtons = ({ currentItem, createNode, setElements, getId }) => {
	const [showLabels, setShowLabels] = useState(false);

	const createNodeByType = (ev, type) => {
		createNode(ev, currentItem, 'bottom', type);
	};

	const nodes = [
		{
			label: 'Input',
			color: 'accent',
			callback: (ev) => createNodeByType(ev, 'input'),
		},
		{
			label: 'Default',
			color: 'gray-70',
			callback: (ev) => createNodeByType(ev, 'default'),
		},
		{
			label: 'Output',
			color: 'magenta-50',
			callback: (ev) => createNodeByType(ev, 'output'),
		},
	];

	return (
		currentItem.hasOwnProperty('id') && (
			<div className='h-100p absolute top-0 right-16 flex-c portrait-hide'>
				<div
					className='flex-c'
					onMouseOver={() => setShowLabels(true)}
					onMouseOut={() => setShowLabels(false)}
				>
					{nodes.map((e, i) => (
						<button
							key={e.label}
							className={`j-button no-push w-100p app shadow-md radius-4 icon-only bg-${
								e.color
							} ${nodes.length === i + 1 ? '' : 'mb-0-25r'}`}
							onClick={e.callback}
							title={e.label}
						>
							<span>{e.label}</span>
						</button>
					))}
				</div>
			</div>
		)
	);
};

export default CreateNodeButtons;
