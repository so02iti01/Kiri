import KeyboardModal from './KeyboardModal';
import HelpModal from './HelpModal';
import ExportModal from './ExportModal';
import ImportModal from './ImportModal';
import SettingsModal from './SettingsModal';

const Modals = ({
	elements,
	setElements,
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
	settings,
	setSettings,
}) => {
	return (
		<>
			<KeyboardModal
				keyboardModal={keyboardModal}
				setKeyboardModal={setKeyboardModal}
			/>
			<HelpModal helpModal={helpModal} setHelpModal={setHelpModal} />
			<ExportModal
				elements={elements}
				exportModal={exportModal}
				setExportModal={setExportModal}
			/>
			<ImportModal
				setElements={setElements}
				importModal={importModal}
				setImportModal={setImportModal}
			/>
			<SettingsModal
				settings={settings}
				setSettings={setSettings}
				settingsModal={settingsModal}
				setSettingsModal={setSettingsModal}
			/>
		</>
	);
};

export default Modals;
