import { useTheme } from 'jupiterui-components';

import { icons } from '../../../config/icons';

const ActionBar = ({
	exportModal,
	setExportModal,
	importModal,
	setImportModal,
}) => {
	const { themes: { theme, setTheme } } = useTheme();

	const actions = [
		{
			label: 'Export',
			icon: icons.download,
			callback: () => setExportModal(!exportModal),
		},
		{
			label: 'Import',
			icon: icons.upload,
			callback: () => setImportModal(!importModal),
		},
	];

	const altActions = [
		{
			label: 'View as grid',
			icon: icons.settings,
			callback: () => setExportModal(!exportModal),
		},
	];

	return (
		<div className='absolute top-16 left-16 backdrop-blur-5 radius-90 border-ui-2 flex flex-row align-c z-999 overflow-hidden mxh-2r'>
			<div className='h-100p flex-c px-0-5r'>
				<span className='fs-xs text-upper fw-600'>Kiri</span>
			</div>

			<div className='h-2-5r w-1 ui-2'></div>

			<div className='flex flex-row align-c justify-c h-100p'>
				<div className='p-0-25r flex flex-row align-c'>
					{actions.map((e) => (
						<button
							className='j-button radius-90 minimal app icon-only'
							onClick={e.callback}
							key={e.label}
							aria-label={e.label}
						>
							<i className='j-icon'>{e.icon}</i>
						</button>
					))}
				</div>

				<div className='h-2-5r w-1 ui-2'></div>

				<div className='p-0-25r flex flex-row align-c'>
					{/* {altActions.map((e) => (
						<button
							className='j-button radius-90 minimal app icon-only'
							onClick={e.callback}
							key={e.label}
							aria-label={e.label}
						>
							<i className='j-icon'>{e.icon}</i>
						</button>
					))} */}

					<button
						className='j-button radius-90 minimal app icon-only'
						onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
						aria-label={'Toggle theme'}
					>
						<i className='j-icon'>{theme === 'dark' ? icons.sun : icons.moon}</i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ActionBar;
