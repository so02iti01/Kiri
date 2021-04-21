import { icons } from '../../../config/icons';

const NodeActions = ({ view, elements, setElements, info, createNode, createConnectedNode }) => {
	const actions = [
		{
			label: 'Create connected child',
			icon: icons.addChildNode,
			callback: (e) => createConnectedNode(e, info),
		},
		{
			label: 'Create sibling',
			icon: icons.addSiblingNode,
			callback: (e) => createNode(e, info, 'right'),
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
				setElements(elements.filter(e => e.id !== info.id && e.source !== info.id && e.target !== info.id))
			},
		},
	];

	return (
		info && view === 'node' && (
			<div className='absolute h-100p flex-c left-16 top-0 bottom-0'>
				<div className='backdrop-blur-5 border-ui-2 flex-c radius-90'>
					<div className='flex-c p-0-25r'>
						{actions.map((e) => (
							<button
								className='j-button minimal app icon-only radius-90'
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
								className={`j-button minimal app icon-only radius-90 ${e.className || ''}`}
								onClick={e.callback}
								key={e.label}
								aria-label={e.label}
								title={e.label}
							>
								<i className='j-icon'>{e.icon}</i>
							</button>
						))}
					</div>
				</div>
			</div>
		)
	);
};

export default NodeActions;
