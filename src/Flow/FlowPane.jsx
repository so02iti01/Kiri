import { useTheme } from 'jupiterui-components';
import React from 'react';
import ReactFlow, {
	Background,
	removeElements,
	addEdge,
	isNode,
	MiniMap,
	updateEdge
} from 'react-flow-renderer/nocss';
import 'react-flow-renderer/dist/style.css';

import Keyboard from './Keyboard';

const FlowPane = ({
	elements,
	setElements,
	createNode,
	createConnectedNode,
	settings,
	keyboardModal,
	setKeyboardModal,
	helpModal,
	setHelpModal,
	exportModal,
	setExportModal,
	importModal,
	setImportModal,
	settingsModal,
	setSettingsModal,
	setNodeLabel,
	setNodeType,
	currentItem,
	setCurrentItem,
	closeAllModals
}) => {
	const {
		themes: { theme },
	} = useTheme();

	const onElementsRemove = (elementsToRemove) => {
		if (elementsToRemove.length === elements.length) {
			setElements([{
				id: '1',
				type: 'input',
				data: { label: 'Central topic' },
				position: { x: 0, y: 0 },
			}]);
			return;
		}

		setElements((els) => removeElements(elementsToRemove, els));
	};

	const onConnect = (params) => {
		setElements((els) => addEdge(params, els));
	};

	const onNodeDoubleClick = () => {
		document.getElementById('currentNodeName').focus();
		document.getElementById('currentNodeName').select();
	};

	const onLoad = (reactFlowInstance) => {
		reactFlowInstance.fitView();
	};

	const onSelectionChange = (els) => {
		const el = els && els.length > 0 ? els[0] : {};
		setNodeType(isNode(el) ? 'node' : 'edge');

		let n = {
			...elements.filter((e) => e.id === el.id)[0],
		};

		setCurrentItem(n);
	};

	const onEdgeUpdate = (oldEdge, newConnection) =>
    setElements((els) => updateEdge(oldEdge, newConnection, els));

	const setCurrentNode = (el) => {
		setNodeLabel(el?.data?.label);

		let n = {
			...elements.filter((e) => e.id === el.id)[0],
			position: el.position,
		};

		setCurrentItem(n);
	};

	return (
		<div className='h-screen w-screen'>
			<ReactFlow
				elements={elements}
				onElementsRemove={onElementsRemove}
				onElementClick={(ev, el) => setCurrentNode(el)}
				onNodeDragStop={(ev, el) => setCurrentNode(el)}
				onSelectionChange={onSelectionChange}
				onConnect={onConnect}
				onNodeDoubleClick={onNodeDoubleClick}
				panOnScroll
				zoomOnScroll={false}
				snapToGrid={settings.snapToGrid}
				snapGrid={[16, 16]}
				onLoad={onLoad}
				onEdgeUpdate={onEdgeUpdate}
				maxZoom={2.5}
			>
				{settings.background && (
					<Background
						variant={settings.backgroundType}
						color={
							settings.backgroundType === 'lines'
								? theme === 'dark'
									? '#444'
									: '#ddd'
								: theme === 'dark'
								? '#777'
								: '#000'
						}
						gap={16}
						className={'ui'}
					/>
				)}

				{settings.miniMap && (
					<MiniMap
						nodeColor={(node) => {
							switch (node.type) {
								case 'input':
									return 'var(--accent-60)';
								case 'default':
									return 'var(--ui-yinyang)';
								case 'output':
									return 'var(--magenta-50)';
								default:
									return '#eee';
							}
						}}
						nodeStrokeWidth={3}
					/>
				)}
			</ReactFlow>

			<Keyboard
				currentItem={currentItem}
				createNode={createNode}
				createConnectedNode={createConnectedNode}
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
				closeAllModals={closeAllModals}
			/>
		</div>
	);
};

export default FlowPane;
