import BaseModal from './BaseModal';

const KeyboardModal = ({ keyboardModal, setKeyboardModal }) => {
	const shortcuts = [
		{
			key: 'k',
			description: 'Toggles this dialog',
		},
		{
			key: 'h',
			description: 'Toggles help dialog',
		},
		{
			key: 'e',
			description: 'Toggles export dialog',
		},
		{
			key: 'i',
			description: 'Toggles import dialog',
		},
		{
			key: 'Enter',
			description: 'Creates a sibling node',
		},
		{
			key: 'Tab',
			description: 'Creates a connected child node',
		},
		{
			key: 'Space',
			description: 'Focus input for editing node name',
		},
	];

	return (
		<BaseModal
			state={keyboardModal}
			setState={setKeyboardModal}
			title={'Keyboard shortcuts'}
		>
			{shortcuts.map((e) => (
				<div
					className='w-100p flex-sb border-bottom-ui-2 py-0-5r'
					key={e.key}
				>
					<span className='fw-600'>{e.key}</span>
					<p className='mb-0 ml-1r'>{e.description}</p>
				</div>
			))}
		</BaseModal>
	);
};

export default KeyboardModal;