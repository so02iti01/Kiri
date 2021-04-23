import BaseModal from './BaseModal';

const HelpModal = ({ helpModal, setHelpModal }) => {
	return (
		<BaseModal state={helpModal} setState={setHelpModal} title={'Help'}>
			<h5>Intro</h5>
			<p>Kiri is a minimal application for creating mind-maps, flowcharts, and diagrams. You can move items around by dragging them.</p>

			<h5>Fundamentals</h5>
			<p>Kiri's system uses blocks called <i>nodes.</i> These simply contain a label.</p>
			<p>You can edit a node's label by:</p>

			<ul>
				<li>
					<span>Double-clicking on a node</span>
				</li>
				<li>
					<span>Pressing the spacebar (when a node is selected)</span>
				</li>
				<li>
					<span>Clicking the Pencil button in the left-middle of the screen</span>
				</li>
			</ul>

			<p>You can create a node by:</p>

			<ul>
				<li>
					<span>Using the three colored buttons in the right-middle of the screen</span>
				</li>
				<li>
					<span>Pressing Tab or Enter with a node selected</span>
				</li>
				<li>
					<span>Using the Diagram and Node buttons in the left-middle of the screen</span>
				</li>
			</ul>

			<div className="j-divider"></div>
			<p>Kiri uses three distinct type of nodes: <span className="fw-600 text-accent">Input nodes</span>, <span className="fw-600 text-gray-100">Default nodes</span>, and <span className="fw-600 text-magenta-50">Output nodes</span>.</p>
			<p><span className="fw-600 text-accent">Input nodes</span> are essentially starting points for your diagram. They can be used to separate a single are of a map from another. They can only have children but cannot be children themselves.</p>
			<p><span className="fw-600 text-gray-100">Default nodes</span> are the most basic. They can both have children and be children themselves.</p>
			<p><span className="fw-600 text-magenta-50">Output nodes</span> typically denote the ending or conclusion of a diagram. They can only be children, they cannot have children themselves.</p>
			<div className="j-divider"></div>

			<h5>Connectors</h5>
			<p>You can connect two nodes by dragging from one small circle to another.</p>

			<h5>Additional info</h5>
			<p>For power users, you can view the Keyboard shortcuts by pressing <strong>K</strong> or by clicking the link in the bottom-left.</p>
		</BaseModal>
	);
};

export default HelpModal;