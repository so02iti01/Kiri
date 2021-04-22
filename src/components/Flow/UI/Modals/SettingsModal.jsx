import { useEffect, useState } from 'react';
import BaseModal from './BaseModal';

const SettingsModal = ({ settings, setSettings, settingsModal, setSettingsModal }) => {
	const [background, setBackground] = useState(settings.background);
	const [backgroundType, setBackgroundType] = useState(settings.backgroundType);
	const [snapToGrid, setSnapToGrid] = useState(settings.snapToGrid);
	const [miniMap, setMiniMap] = useState(settings.miniMap);

	useEffect(() => {
		setSettings({...settings, background});
	}, [background]);

	useEffect(() => {
		setSettings({...settings, backgroundType});
		console.log(settings)
	}, [backgroundType]);

	useEffect(() => {
		setSettings({...settings, snapToGrid});
	}, [snapToGrid]);

	useEffect(() => {
		setSettings({...settings, miniMap});
	}, [miniMap]);

	return (
		<BaseModal
			state={settingsModal}
			setState={setSettingsModal}
			title={'Settings'}
		>
			<h5>Document</h5>
			<div className='w-100p flex-sb'>
				<span>Show background?</span>
				<div className='flex flex-row align-c'>
					<label className='j-switch'>
						<input
							type='checkbox'
							defaultChecked={background}
							onChange={(e) =>
								setBackground(!background)
							}
						/>
						<span className='j-slider'></span>
					</label>
				</div>
			</div>
			
			<div className='w-100p flex-sb mt-0-5r'>
				<span>Dotted background?</span>
				<div className='flex flex-row align-c'>
					<label className='j-switch'>
						<input
							type='checkbox'
							defaultChecked={backgroundType === 'dots' ? 'on' : 'off'}
							onChange={(e) =>
								setBackgroundType(backgroundType === 'dots' ? 'lines' : 'dots')
							}
						/>
						<span className='j-slider'></span>
					</label>
				</div>
			</div>

			<div className='w-100p flex-sb mt-0-5r'>
				<span>Snap nodes to grid?</span>
				<div className='flex flex-row align-c'>
					<label className='j-switch'>
						<input
							type='checkbox'
							defaultChecked={snapToGrid}
							onChange={(e) =>
								setSnapToGrid(!snapToGrid)
							}
						/>
						<span className='j-slider'></span>
					</label>
				</div>
			</div>

			<div className='w-100p flex-sb mt-0-5r'>
				<span>Show MiniMap?</span>
				<div className='flex flex-row align-c'>
					<label className='j-switch'>
						<input
							type='checkbox'
							defaultChecked={miniMap}
							onChange={(e) =>
								setMiniMap(!miniMap)
							}
						/>
						<span className='j-slider'></span>
					</label>
				</div>
			</div>
		</BaseModal>
	);
};

export default SettingsModal;
