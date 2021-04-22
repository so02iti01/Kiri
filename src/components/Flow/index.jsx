import { useEffect, useState } from 'react';

import FlowPane from './FlowPane';

// UI
import ActionBar from './UI/ActionBar';
import Actions from './UI/Actions';
import BottomLinks from './UI/BottomLinks';
import Modals from './UI/Modals';
import NodeActions from './UI/NodeActions';
import EditPanes from './UI/EditPanes';

const Flow = () => {
	const initialElements = [
		{
			id: '1',
			type: 'input',
			data: { label: 'Central topic' },
			position: { x: 0, y: 0 },
		},
	];

	const initialSettings = {
		background: true,
		backgroundType: 'dots',
		snapToGrid: false,
		miniMap: false
	};

	const [elements, setElements] = useState(
		JSON.parse(localStorage.getItem('nodes')) || initialElements
	);
	const [settings, setSettings] = useState(
		JSON.parse(localStorage.getItem('settings')) || initialSettings
	);
	const [info, setInfo] = useState({});
	const [edge, setEdge] = useState({});

	useEffect(() => {
		localStorage.setItem('nodes', JSON.stringify(elements));
	}, [elements]);

	useEffect(() => {
		localStorage.setItem('settings', JSON.stringify(settings));
	}, [settings]);

	const getId = () => `node_${Math.random().toString(36).substring(7)}`;

	// const modifyNode = (node, key, value) => {
	// 	console.log('hehe')
	// 	const newList = elements.map((item) => {
	// 		if (item.id === node.id) {
	// 			let updatedItem = {
	// 				...node,
	// 			};

	// 			updatedItem.data[key] = value;

	// 			return updatedItem;
	// 		}

	// 		return item;
	// 	});

	// 	setElements(newList);
	// }

	// Nodes
	const [nodeLabel, setNodeLabel] = useState();
	const [nodeType, setNodeType] = useState('');

	useEffect(() => {
		setElements((els) =>
			els.map((el) => {
				if (el.id === info?.id) {
					el.data = {
						...el.data,
						label: nodeLabel,
					};
				}

				return el;
			})
		);
	}, [nodeLabel, setElements]);

	// Modals
	const [keyboardModal, setKeyboardModal] = useState(false);
	const [helpModal, setHelpModal] = useState(false);
	const [exportModal, setExportModal] = useState(false);
	const [importModal, setImportModal] = useState(false);
	const [settingsModal, setSettingsModal] = useState(false);

	const createNode = (ev, el, pos = 'bottom', type = 'default') => {
		ev.preventDefault();

		let y,
			x = 0;

		if (el.position) {
			y = el.position.y;
			x = el.position.x;
		}

		const identifier = getId();

		const position = {
			x: pos === 'bottom' ? x : x + 200,
			y: pos === 'bottom' ? y + 100 : y,
		};

		setElements((e) =>
			e.concat({
				id: identifier,
				type: type,
				data: { label: 'New node' },
				position: position,
			})
		);

		return identifier;
	};

	const createEdge = (parent, node) => {
		setElements((e) =>
			e.concat({
				id: getId(),
				source: parent.id.toString(),
				target: node,
				animated: false,
			})
		);
	};

	const createConnectedNode = (ev, parent) => {
		const node = createNode(ev, parent);
		createEdge(parent, node);
	};

	return (
		<>
			<FlowPane
				elements={elements}
				setElements={setElements}
				createNode={createNode}
				createEdge={createEdge}
				createConnectedNode={createConnectedNode}
				info={info}
				setInfo={setInfo}
				getId={getId}
				settings={settings}
				keyboardModal={keyboardModal}
				setKeyboardModal={setKeyboardModal}
				helpModal={helpModal}
				setHelpModal={setHelpModal}
				exportModal={exportModal}
				setExportModal={setExportModal}
				setNodeLabel={setNodeLabel}
				importModal={importModal}
				setImportModal={setImportModal}
				setNodeType={setNodeType}
				edge={edge}
				setEdge={setEdge}
			/>

			<Actions
				info={info}
				elements={elements}
				setElements={setElements}
				getId={getId}
				createNode={createNode}
			/>

			<ActionBar
				exportModal={exportModal}
				setExportModal={setExportModal}
				importModal={importModal}
				setImportModal={setImportModal}
				settingsModal={settingsModal}
				setSettingsModal={setSettingsModal}
			/>

			<BottomLinks
				setKeyboardModal={setKeyboardModal}
				setHelpModal={setHelpModal}
			/>

			<Modals
				elements={elements}
				setElements={setElements}
				keyboardModal={keyboardModal}
				setKeyboardModal={setKeyboardModal}
				helpModal={helpModal}
				setHelpModal={setHelpModal}
				exportModal={exportModal}
				setExportModal={setExportModal}
				importModal={importModal}
				setImportModal={setImportModal}
				settingsModal={settingsModal}
				setSettingsModal={setSettingsModal}
				settings={settings}
				setSettings={setSettings}
			/>

			<NodeActions
				view={nodeType}
				elements={elements}
				setElements={setElements}
				info={info}
				createNode={createNode}
				createConnectedNode={createConnectedNode}
			/>

			<EditPanes
				view={nodeType}
				info={info}
				nodeLabel={nodeLabel}
				setNodeLabel={setNodeLabel}
			/>
		</>
	);
};

export default Flow;
