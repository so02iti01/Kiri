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
};

export default EditPanes;
