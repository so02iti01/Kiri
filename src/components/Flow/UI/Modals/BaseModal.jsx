const BaseModal = ({ state, setState, title, children }) => (
	<div
		className='j-modal'
		aria-expanded={state}
		onClick={() => setState(false)}
	>
		<div
			className='j-modal-inner mnw-32r'
			onClick={(e) => e.stopPropagation()}
		>
			<div className='j-modal-content'>
				<h3 className='j-modal-title'>{title}</h3>

				<div className='j-inner-content w-100p'>{children}</div>
			</div>
		</div>
	</div>
);

export default BaseModal;