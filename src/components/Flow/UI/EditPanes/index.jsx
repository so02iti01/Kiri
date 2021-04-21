import NodePane from './NodePane';
import EdgePane from './EdgePane';

const EditPanes = ({ view, info, nodeLabel, setNodeLabel }) => {
	return view === 'node' ? (
		<NodePane
			info={info}
			nodeLabel={nodeLabel}
			setNodeLabel={setNodeLabel}
		/>
	) : (
		<EdgePane info={info} />
	);
};

export default EditPanes;
