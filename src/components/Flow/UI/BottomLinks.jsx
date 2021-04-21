const BottomLinks = ({ setKeyboardModal, setHelpModal }) => {
	const links = [
		{
			label: 'Keyboard shortcuts (K)',
			callback: () => setKeyboardModal(true)
		},
		{
			label: 'Help (H)',
			callback: () => setHelpModal(true)
		},
	]

	return (
		<div className='absolute bottom-20 left-20 flex flex-row align-c'>
			{links.map(e => (
				<button
					onClick={e.callback}
					className='j-link shallow-link fs-xs text-dynamic-07 bg-transparent mr-0-5r'
					key={e.label}
				>
					{e.label}
				</button>
			))}
		</div>
	);
};

export default BottomLinks;
