// import { Modal } from 'jupiterui-components';

const BaseModal = ({ state, setState, title, children }) => (
	<div className='j-modal' aria-expanded={state} onClick={() => setState(false)}>
		<div className='j-modal-inner mnw-32r' onClick={(e) => e.preventDefault()}>
			<div className='j-modal-content'>
				<h3 className='j-modal-title'>{title}</h3>

				<div className='j-inner-content w-100p'>{children}</div>
			</div>
		</div>
	</div>
);

const KeyboardModal = ({ keyboardModal, setKeyboardModal }) => {
	const shortcuts = [
		{
			key: 'K',
			description: 'Toggles this dialog',
		},
		{
			key: 'H',
			description: 'Toggles help dialog',
		},
		{
			key: 'Enter',
			description: 'Creates a sibling node',
		},
		{
			key: 'Tab',
			description: 'Creates a connected child node',
		},
	];

	return (
		<BaseModal
			state={keyboardModal}
			setState={setKeyboardModal}
			title={'Keyboard shortcuts'}
		>
			{shortcuts.map((e) => (
				<div className='w-100p flex-sb border-bottom-ui-2 py-0-5r' key={e.key}>
					<span className='fw-600'>{e.key}</span>
					<p className='mb-0 ml-1r'>{e.description}</p>
				</div>
			))}
		</BaseModal>
	);
};

const HelpModal = ({ helpModal, setHelpModal }) => {
	return (
		<BaseModal state={helpModal} setState={setHelpModal} title={'Help'}>
			<p>Hey</p>
		</BaseModal>
	);
};

const Modals = ({
	keyboardModal,
	setKeyboardModal,
	helpModal,
	setHelpModal,
}) => {
	return (
		<>
			<KeyboardModal
				keyboardModal={keyboardModal}
				setKeyboardModal={setKeyboardModal}
			/>
			<HelpModal helpModal={helpModal} setHelpModal={setHelpModal} />
		</>
	);
};

export default Modals;
