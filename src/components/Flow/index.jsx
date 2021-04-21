import { useEffect, useState } from 'react';
import ActionBar from './UI/ActionBar';
import Actions from './UI/Actions';
import BottomLinks from './UI/BottomLinks';
import FlowPane from './FlowPane';
import Info from './UI/Info';
import Modals from './UI/Modals';

const Flow = () => {
	const initialElements = [
		{
			id: '1',
			type: 'input',
			data: { label: 'Central topic' },
			position: { x: 250, y: 25 },
		},
		// {
		// 	id: '2',
		// 	data: { label: 'Another Node' },
		// 	position: { x: 100, y: 125 },
		// },
		// {
		// 	id: 'e1-2',
		// 	source: '1',
		// 	target: '2',
		// 	animated: true,
		// },
	];

	const initialSettings = {
		backgroundType: 'dots',
		snapToGrid: false
	}

	const [elements, setElements] = useState(
		JSON.parse(localStorage.getItem('nodes')) || initialElements
	);
	const [settings, setSettings] = useState(initialSettings);
	const [info, setInfo] = useState({});

	useEffect(() => {
		localStorage.setItem('nodes', JSON.stringify(elements));
	}, [elements]);

	useEffect(() => {
		localStorage.setItem('settings', JSON.stringify(settings));
	}, [settings]);

	const getId = () => `node_${Math.random().toString(36).substring(7)}`;

	// Modals
	const [keyboardModal, setKeyboardModal] = useState(false);
	const [helpModal, setHelpModal] = useState(false);

	return (
		<>
			<FlowPane
				elements={elements}
				setElements={setElements}
				info={info}
				setInfo={setInfo}
				getId={getId}
				settings={settings}
				keyboardModal={keyboardModal}
				setKeyboardModal={setKeyboardModal}
				helpModal={helpModal}
				setHelpModal={setHelpModal}
			/>

			<Actions
				elements={elements}
				setElements={setElements}
				getId={getId}
			/>

			<Info info={info} />

			<ActionBar />

			<BottomLinks
				setKeyboardModal={setKeyboardModal}
				setHelpModal={setHelpModal}
			/>

			<Modals
				keyboardModal={keyboardModal}
				setKeyboardModal={setKeyboardModal}
				helpModal={helpModal}
				setHelpModal={setHelpModal}
			/>
		</>
	);
};

export default Flow;