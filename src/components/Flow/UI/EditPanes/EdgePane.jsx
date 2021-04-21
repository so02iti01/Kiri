import { useState } from 'react';

const EdgePane = ({ info, edge, elements, setElements }) => {
	const [animatedEdge, setAnimatedEdge] = useState(false);

	return <></>;

	// return (
	// 	<div className='absolute top-16 right-16 mnw-10r ui border-ui-2 p-0-5r radius-8'>
	// 		<div className='flex flex-row align-c'>
	// 			<label className='j-switch'>
	// 				<input
	// 					type='checkbox'
	// 					checked={animatedEdge}
	// 					onChange={(e) =>
	// 						setAnimatedEdge(
	// 							e.target.value === 'on' ? true : false
	// 						)
	// 					}
	// 				/>
	// 				<span className='j-slider'></span>
	// 			</label>
	// 			<p className='mb-0 text-dynamic-06 ml-0-5r'>Animate edge</p>
	// 		</div>
	// 	</div>
	// );
};

export default EdgePane;
