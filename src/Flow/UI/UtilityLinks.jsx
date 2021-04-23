import { useEffect, useState } from "react";

const UtilityLinks = ({
	elements,
	setKeyboardModal,
	setHelpModal,
	settings,
}) => {
	const [nodeLength, setNodeLength] = useState();
	const [edgeLength, setEdgeLength] = useState();

	const actions = [
		{
			label: 'Keyboard shortcuts (K)',
			callback: () => setKeyboardModal(true),
			className: 'portrait-hide',
		},
		{
			label: 'Help (H)',
			callback: () => setHelpModal(true),
		},
	];

	const links = [
		{
			label: 'View repository',
			to: 'https://codeberg.org/athena/Kiri',
		},
	];

	useEffect(() => {
		setNodeLength(elements.filter((e) => e.source === undefined).length);
		setEdgeLength(elements.filter((e) => e.type === undefined).length);
	}, [elements])

	return (
		<div className='absolute bottom-16 left-0 right-0 w-100p px-1r'>
			<div
				className={`w-100p ${
					settings.miniMap ? 'flex flex-row align-c' : 'flex-sb align-e'
				}`}
			>
				<div className='flex flex-row align-c'>
					{actions.map((e) => (
						<button
							onClick={e.callback}
							className={`j-link shallow-link fs-xs text-dynamic-07 bg-transparent mr-0-5r ${e.className}`}
							key={e.label}
						>
							{e.label}
						</button>
					))}
				</div>

				<div className='flex flex-row align-c portrait-hide'>
					{links.map((e) => (
						<a
							href={e.to}
							target='_blank'
							rel='noreferrer'
							className='j-link shallow-link fs-xs text-dynamic-07 bg-transparent mr-0-5r'
							key={e.label}
						>
							{e.label}
						</a>
					))}

					<div className='px-0-5r py-0-25r backdrop-blur-5 border-ui-2 radius-4'>
						<span className='fs-sm text-dynamic-06'>
							<span>{nodeLength} node{nodeLength === 1 ? '' : 's'}</span>
							<span>{', '}{edgeLength} connector{edgeLength === 1 ? '' : 's'}</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UtilityLinks;
