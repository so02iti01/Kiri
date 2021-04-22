import NodePane from './NodePane';
import EdgePane from './EdgePane';

const EditPanes = ({
	currentItem,
	view,
	info,
	nodeLabel,
	setNodeLabel,
	edgeLabel,
	setEdgeLabel
}) => {
	return view === 'node' ? (
		<NodePane
			info={info}
			nodeLabel={nodeLabel}
			setNodeLabel={setNodeLabel}
		/>
	) : (
		<EdgePane
			currentItem={currentItem}
			info={info}
			edgeLabel={edgeLabel}
			setEdgeLabel={setEdgeLabel}
		/>
	);
};

export default EditPanes;
