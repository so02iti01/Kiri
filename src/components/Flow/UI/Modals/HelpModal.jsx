import BaseModal from './BaseModal';

const HelpModal = ({ helpModal, setHelpModal }) => {
	return (
		<BaseModal state={helpModal} setState={setHelpModal} title={'Help'}>
			<h5>Intro</h5>
			<p>Kiri is a minimal application to help you create elegant mind-maps and diagrams. Kiri is simple to use and easy to understand. Below, we'll outline some of the fundamentals.</p>

			<h5>Fundamentals</h5>
			<p>Kiri's system uses blocks called <i>nodes.</i> These simply contain a label. You can double-click on a node to highlight the edit box (found in the top-right).</p>
			<p>As of now, Kiri uses three distinct type of nodes: input, default, and output.</p>
			<p>You can create nodes by using the three colored circles in the right-middle of the screen or by using the designated keyboard shortcuts.</p>

			<div className="j-divider"></div>
			<p><span className="fw-600 text-blue-70">Input nodes</span> are essentially starting points for your diagram. They can be used to separate a single are of a map from another. They can only have children but cannot be children themselves.</p>
			<p><span className="fw-600 text-gray-100">Default nodes</span> are the most basic. They can both have children and be children themselves.</p>
			<p><span className="fw-600 text-magenta-60">Output nodes</span> typically denote the ending or conclusion of a diagram. They can only be children, they cannot have children themselves.</p>
			<div className="j-divider"></div>

			<h5>Connectors</h5>
			<p>You can connect two nodes by dragging from one small circle to another.</p>

			<h5>Additional info</h5>
			<p>For power users, you can view the Keyboard shortcuts by pressing <strong>K</strong> or by clicking the link in the bottom-left.</p>
		</BaseModal>
	);
};

export default HelpModal;