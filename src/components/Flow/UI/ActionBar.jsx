import { icons } from '../../../config/icons';

const ActionBar = () => {
	return (
		<div className='absolute top-20 left-20 ui radius-4 border-ui-2 p-0-5r flex flex-row align-c h-3r'>
			{/* <div className='h-100p flex-c'>
				<span className='fs-sm fw-500'>Flow.IO</span>
			</div> */}
			<div className='flex flex-row align-c h-100p mr-1r'>
				<button className='j-button minimal app icon-only'>
					<i className='j-icon'>{icons.download}</i>
				</button>
			</div>
		</div>
	);
};

export default ActionBar;
