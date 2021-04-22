import { icons } from '../../../config/icons';

const Nodes = ({
	elements,
	setElements,
	createNode,
	createConnectedNode,
	currentItem,
}) => {
	const actions = [
		{
			label: 'Create connected child',
			icon: icons.addChildNode,
			callback: (e) => createConnectedNode(e, currentItem),
		},
		{
			label: 'Create sibling',
			icon: icons.addSiblingNode,
			callback: (e) => createNode(e, currentItem, 'right'),
		},
	];

	const nodeActions = [
		{
			label: 'Edit node',
			icon: icons.edit,
			callback: () => {
				document.getElementById('currentNodeName').focus();
				document.getElementById('currentNodeName').select();
			},
		},
		{
			label: 'Delete node',
			icon: icons.delete,
			className: 'bg-hover-red-10 text-hover-red-60',
			callback: () => {
				setElements(
					elements.filter(
						(e) =>
							e.id !== currentItem.id &&
							e.source !== currentItem.id &&
							e.target !== currentItem.id
					)
				);
			},
		},
	];

	return (
		<>
			<div className='flex-c p-0-25r'>
				{actions.map((e) => (
					<button
						className='j-button no-push minimal app icon-only radius-90'
						onClick={e.callback}
						key={e.label}
						aria-label={e.label}
						title={e.label}
					>
						<i className='j-icon'>{e.icon}</i>
					</button>
				))}
			</div>

			<div className='w-100p h-1 ui-2'></div>

			<div className='flex-c p-0-25r'>
				{nodeActions.map((e) => (
					<button
						className={`j-button no-push minimal app icon-only radius-90 ${
							e.className || ''
						}`}
						onClick={e.callback}
						key={e.label}
						aria-label={e.label}
						title={e.label}
					>
						<i className='j-icon'>{e.icon}</i>
					</button>
				))}
			</div>
		</>
	);
};

export default Nodes;