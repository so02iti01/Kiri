import { useEffect, useState } from 'react';

import FlowPane from './FlowPane';

// UI
import UtilityBar from './UI/UtilityBar';
import CreateNodeButtons from './UI/CreateNodeButtons';
import UtilityLinks from './UI/UtilityLinks';
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
		miniMap: false,
	};

	const [elements, setElements] = useState(
		JSON.parse(localStorage.getItem('nodes')) || initialElements
	);
	const [settings, setSettings] = useState(
		JSON.parse(localStorage.getItem('settings')) || initialSettings
	);
	const [currentItem, setCurrentItem] = useState({});

	useEffect(() => {
		localStorage.setItem('settings', JSON.stringify(settings));
	}, [settings]);

	const getId = () => `node_${Math.random().toString(36).substring(7)}`;

	const [nodeLabel, setNodeLabel] = useState();
	const [nodeType, setNodeType] = useState('');
	const [edgeLabel, setEdgeLabel] = useState();

	useEffect(() => {
		setElements((els) =>
			els.map((el) => {
				if (el.id === currentItem?.id) {
					el.data = {
						...el.data,
						label: nodeLabel,
					};
				}

				return el;
			})
		);
	}, [nodeLabel]);

	useEffect(() => {
		setElements((els) =>
			els.map((el) => {
				if (el.id === currentItem?.id) {
					el.label = edgeLabel;
				}

				return el;
			})
		);
	}, [edgeLabel]);

	useEffect(() => {
		setElements((els) =>
			els.map((el) => {
				if (el.id === currentItem?.id) {
					el = {
						...currentItem,
					};
				}

				return el;
			})
		);
	}, [currentItem]);

	useEffect(() => {
		localStorage.setItem('nodes', JSON.stringify(elements));

		if (elements.length === 0) {
			setElements([{
				id: '1',
				type: 'input',
				data: { label: 'Central topic' },
				position: { x: 0, y: 0 },
			}]);
			return;
		}
	}, [elements]);

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

		if (el?.position) {
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
		if (parent?.id) {
			setElements((e) =>
				e.concat({
					id: getId(),
					source: parent?.id.toString(),
					target: node,
					animated: false,
				})
			);
		}
	};

	const createConnectedNode = (ev, parent) => {
		const node = createNode(ev, parent);
		createEdge(parent, node);
	};

	const modifyNode = (e, k, v) => {
		setElements((els) =>
			els.map((el) => {
				if (el.id === e?.id) {
					el[k] = v;
				}

				return el;
			})
		);
	};

	return (
		<>
			<FlowPane
				elements={elements}
				setElements={setElements}
				createNode={createNode}
				createEdge={createEdge}
				createConnectedNode={createConnectedNode}
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
				settingsModal={settingsModal}
				setSettingsModal={setSettingsModal}
				setNodeType={setNodeType}
				currentItem={currentItem}
				setCurrentItem={setCurrentItem}
			/>

			<CreateNodeButtons
				currentItem={currentItem}
				elements={elements}
				setElements={setElements}
				getId={getId}
				createNode={createNode}
			/>

			<UtilityBar
				exportModal={exportModal}
				setExportModal={setExportModal}
				importModal={importModal}
				setImportModal={setImportModal}
				settingsModal={settingsModal}
				setSettingsModal={setSettingsModal}
			/>

			<UtilityLinks
				setKeyboardModal={setKeyboardModal}
				setHelpModal={setHelpModal}
				settings={settings}
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
				createNode={createNode}
				createConnectedNode={createConnectedNode}
				currentItem={currentItem}
				setCurrentItem={setCurrentItem}
				modifyNode={modifyNode}
			/>

			<EditPanes
				view={nodeType}
				nodeLabel={nodeLabel}
				setNodeLabel={setNodeLabel}
				currentItem={currentItem}
				edgeLabel={edgeLabel}
				setEdgeLabel={setEdgeLabel}
			/>
		</>
	);
};

export default Flow;
