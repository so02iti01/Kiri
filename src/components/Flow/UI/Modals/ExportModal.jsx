import BaseModal from './BaseModal';

const ExportModal = ({ elements, exportModal, setExportModal }) => {
	return (
		<BaseModal
			state={exportModal}
			setState={setExportModal}
			title={'Export'}
		>
			<div>
				<p>
					Copy the following content to save your current state
					(changes are, by default, saved in localStorage):
				</p>
				<code className="flex-code">{JSON.stringify(elements)}</code>
			</div>
		</BaseModal>
	);
};

export default ExportModal;
