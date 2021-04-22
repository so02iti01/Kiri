import { useTheme } from 'jupiterui-components';
import React from 'react';
import ReactFlow, {
	Background,
	removeElements,
	addEdge,
	isEdge,
	isNode,
	MiniMap,
} from 'react-flow-renderer/nocss';
import 'react-flow-renderer/dist/style.css';

import Keyboard from './Keyboard';

const FlowPane = ({
	elements,
	setElements,
	createNode,
	createEdge,
	createConnectedNode,
	info,
	setInfo,
	getId,
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
	edge,
	setEdge,
	currentItem,
	setCurrentItem
}) => {
	const {
		themes: { theme },
	} = useTheme();

	// Events
	const onElementsRemove = (elementsToRemove) => {
		setElements((els) => removeElements(elementsToRemove, els));
	};

	const onConnect = (params) => {
		setElements((els) => addEdge(params, els));
	};

	const onNodeDragStop = (ev, node) => {
		const newList = elements.map((item) => {
			if (item.id === node.id) {
				const updatedItem = {
					...node,
				};

				return updatedItem;
			}

			return item;
		});

		setElements(newList);
	};

	const onNodeDoubleClick = () => {
		document.getElementById('currentNodeName').focus();
		document.getElementById('currentNodeName').select();
	};

	const onLoad = (reactFlowInstance) => {
		reactFlowInstance.fitView();
	};

	const onSelectionChange = (els) => {
		const e = els && els.length > 0 ? els[0] : {};

		if (isEdge(e)) {
			setNodeType('edge');
			setEdge(e);
		}

		if (isNode(e)) {
			setNodeType('node');
			setEdge({});
			setInfo(e);
		}

		setCurrentItem(e);
	};

	const setCurrentNode = (el) => {
		setInfo(el);
		setNodeLabel(el?.data?.label);
	};

	// Data modifications

	return (
		<div className='h-screen w-screen'>
			<ReactFlow
				elements={elements}
				onElementsRemove={onElementsRemove}
				onElementClick={(ev, el) => setCurrentNode(el)}
				onNodeDrag={(ev, el) => setCurrentNode(el)}
				onSelectionChange={onSelectionChange}
				onEdgeContextMenu={(ev, el) => {
					ev.preventDefault();
				}}
				onConnect={onConnect}
				deleteKeyCode={46}
				connectionMode={'loose'}
				onNodeDoubleClick={onNodeDoubleClick}
				panOnScroll
				zoomOnScroll={false}
				onNodeDragStop={onNodeDragStop}
				snapToGrid={settings.snapToGrid}
				snapGrid={[16, 16]}
				onLoad={onLoad}
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
				info={info}
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
			/>
		</div>
	);
};

export default FlowPane;
