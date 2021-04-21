const BottomLinks = ({ setKeyboardModal, setHelpModal }) => {
	const links = [
		{
			label: 'Keyboard shortcuts (K)',
			callback: () => setKeyboardModal(true),
		},
		{
			label: 'Help (H)',
			callback: () => setHelpModal(true),
		},
	];

	const rightLinks = [
		{
			label: 'View repository',
			to: 'https://codeberg.org/athena/Kiri',
		},
	];

	return (
		<div className='absolute bottom-16 left-0 right-0 w-100p px-1r flex flex-row align-c'>
			<div className='w-100p flex-sb'>
				<div className='flex flex-row align-c'>
					{links.map((e) => (
						<button
							onClick={e.callback}
							className='j-link shallow-link fs-xs text-dynamic-07 bg-transparent mr-0-5r'
							key={e.label}
						>
							{e.label}
						</button>
					))}
				</div>

				<div className='flex flex-row align-c'>
					{rightLinks.map((e) => (
						<a	
							href={e.to}
							target='_blank'
							rel="noreferrer"
							className='j-link shallow-link fs-xs text-dynamic-07 bg-transparent mr-0-5r'
							key={e.label}
						>
							{e.label}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default BottomLinks;
