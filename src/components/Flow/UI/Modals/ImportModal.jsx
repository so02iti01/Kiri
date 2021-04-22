import { useState } from 'react';

import BaseModal from './BaseModal';

const ImportModal = ({ setElements, importModal, setImportModal }) => {
	const [importData, setImportData] = useState('');

	return (
		<BaseModal
			state={importModal}
			setState={setImportModal}
			title={'Import nodes'}
		>
			<p>Paste content you previously exported from Kiri:</p>

			<textarea
				className='j-input'
				placeholder={'[ paste your nodes here ]'}
				onChange={(e) => setImportData(e.target.value)}
				value={importData}
			>
			</textarea>

			<div className='w-100p flex flex-row align-c justify-e'>
				<button
					className='j-button sm'
					onClick={() => {
						setElements(JSON.parse(importData));
						setImportModal(false);
					}}
				>
					<span>Import</span>
				</button>
			</div>
		</BaseModal>
	);
};

export default ImportModal;