import KeyboardModal from './KeyboardModal';
import HelpModal from './HelpModal';
import ExportModal from './ExportModal';
import ImportModal from './ImportModal';

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
		</>
	);
};

export default Modals;
