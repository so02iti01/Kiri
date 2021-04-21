import React from 'react';
import ReactFlow, {
	Background,
	removeElements,
	addEdge,
} from 'react-flow-renderer';
import Keyboard from './Keyboard';

const FlowPane = ({
	elements,
	setElements,
	info,
	setInfo,
	getId,
	settings,
	keyboardModal,
	setKeyboardModal,
	helpModal,
	setHelpModal,
	setNodeName
}) => {

	// Events
	const onElementsRemove = (elementsToRemove) => {
		setElements((els) => removeElements(elementsToRemove, els));
	};

	const onConnect = (params) => setElements((els) => addEdge(params, els));

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
	}

	const onElementClick = (el) => {
		setInfo(el);
		setNodeName(el?.data?.label);
	}

	// Data modifications

	const createNode = (ev, el, pos = 'bottom', type = 'default') => {
		ev.preventDefault();

		const identifier = getId();

		const position = {
			x: pos === 'bottom' ? el.position.x : el.position.x + 200,
			y: pos === 'bottom' ? el.position.y + 100 : el.position.y,
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
		<div className='h-screen w-screen'>
			<ReactFlow
				elements={elements}
				onElementsRemove={onElementsRemove}
				onElementClick={(ev, el) => onElementClick(el)}
				onNodeDrag={(ev, el) => setInfo(el)}
				onConnect={onConnect}
				deleteKeyCode={46}
				connectionMode={'loose'}
				onNodeDoubleClick={onNodeDoubleClick}
				panOnScroll
				zoomOnScroll={false}
				onNodeDragStop={onNodeDragStop}
				snapToGrid={settings.snapToGrid}
				snapGrid={[16, 16]}
			>
				<Background
					variant={settings.backgroundType}
					color={
						settings.backgroundType === 'lines' ? '#ddd' : '#000'
					}
					gap={16}
					className={'ui'}
				/>
			</ReactFlow>

			<Keyboard
				info={info}
				createNode={createNode}
				createConnectedNode={createConnectedNode}
				keyboardModal={keyboardModal}
				setKeyboardModal={setKeyboardModal}
				helpModal={helpModal}
				setHelpModal={setHelpModal}
			/>
		</div>
	);
};

export default FlowPane;
