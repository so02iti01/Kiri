import NodePane from './NodePane';
import EdgePane from './EdgePane';

const EditPanes = ({
	currentItem,
	view,
	nodeLabel,
	setNodeLabel,
	edgeLabel,
	setEdgeLabel
}) => {
	if (currentItem.hasOwnProperty('id')) {
		return view === 'node' ? (
			<NodePane
				currentItem={currentItem}
				nodeLabel={nodeLabel}
				setNodeLabel={setNodeLabel}
			/>
		) : (
			<EdgePane
				currentItem={currentItem}
				edgeLabel={edgeLabel}
				setEdgeLabel={setEdgeLabel}
			/>
		);
	} else {
		return <></>;
	}
};

export default EditPanes;
