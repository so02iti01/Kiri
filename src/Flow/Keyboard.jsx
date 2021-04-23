import KeyboardEventHandler from 'react-keyboard-event-handler';

const Keyboard = ({
	currentItem,
	createNode,
	createConnectedNode,
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
	closeAllModals,
}) => {
	const handleEnter = (e) => {
		if (currentItem) {
			createNode(e, currentItem, 'right');
		}
	};

	const handleTab = (e) => {
		if (currentItem) {
			createConnectedNode(e, currentItem);
		}
	};

	return (
		<div>
			<KeyboardEventHandler
				handleKeys={['enter', 'tab', 'k', 'h', 'e', 'i', 'space', 's', 'esc']}
				onKeyEvent={(key, e) => {
					if (key.length === 1) closeAllModals();

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
						case 'e':
							setExportModal(!exportModal);
							break;
						case 'i':
							setImportModal(!importModal);
							break;
						case 's':
							setSettingsModal(!settingsModal);
							break;
						case 'space':
							e.preventDefault();

							try {
								document
									.getElementById('currentNodeName')
									.focus();
								document
									.getElementById('currentNodeName')
									.select();
							} catch {}

							break;
						case 'esc':
							closeAllModals();
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
