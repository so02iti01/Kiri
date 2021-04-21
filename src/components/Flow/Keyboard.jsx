import KeyboardEventHandler from 'react-keyboard-event-handler';

const Keyboard = ({ info, createNode, createConnectedNode, keyboardModal, setKeyboardModal, helpModal, setHelpModal }) => {
	const handleEnter = (e) => {
		if (info) {
			createNode(e, info, 'right');
		}
	}

	const handleTab = (e) => {
		if (info) {
			createConnectedNode(e, info);
		}
	}

	return (
		<div>
			<KeyboardEventHandler
				handleKeys={['enter', 'tab', 'k', 'h']}
				onKeyEvent={(key, e) => {
					switch (key) {
						case 'enter':
							handleEnter(e);
							break;
						case 'tab':
							handleTab(e);
							break;
						case 'k':
							setKeyboardModal(!keyboardModal);
							break;
						case 'h':
							setHelpModal(!helpModal);
							break;
						default:
							break;
					}
				}}
			/>
		</div>
	);
};

export default Keyboard;
