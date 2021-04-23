const icons = {
	add: (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-5 w-5'
			viewBox='0 0 20 20'
			fill='currentColor'
		>
			<path
				fillRule='evenodd'
				d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
				clipRule='evenodd'
			/>
		</svg>
	),
	download: (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-5 w-5'
			viewBox='0 0 20 20'
			fill='currentColor'
		>
			<path
				fillRule='evenodd'
				d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
				clipRule='evenodd'
			/>
		</svg>
	),
	upload: (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-5 w-5'
			viewBox='0 0 20 20'
			fill='currentColor'
		>
			<path
				fillRule='evenodd'
				d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z'
				clipRule='evenodd'
			/>
		</svg>
	),
	delete: (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-5 w-5'
			viewBox='0 0 20 20'
			fill='currentColor'
		>
			<path
				fillRule='evenodd'
				d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
				clipRule='evenodd'
			/>
		</svg>
	),
	edit: (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-5 w-5'
			viewBox='0 0 20 20'
			fill='currentColor'
		>
			<path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' />
		</svg>
	),
	addChildNode: (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='16px'
			height='16px'
			fill='currentColor'
			className='bi bi-diagram-2-fill'
			viewBox='0 0 16 16'
		>
			<path
				fillRule='evenodd'
				d='M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5v-1zm-3 8A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5v-1zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5v-1z'
			/>
		</svg>
	),
	addSiblingNode: (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='16px'
			height='16px'
			fill='currentColor'
			className='bi bi-node-plus-fill'
			viewBox='0 0 16 16'
		>
			<path d='M11 13a5 5 0 1 0-4.975-5.5H4A1.5 1.5 0 0 0 2.5 6h-1A1.5 1.5 0 0 0 0 7.5v1A1.5 1.5 0 0 0 1.5 10h1A1.5 1.5 0 0 0 4 8.5h2.025A5 5 0 0 0 11 13zm.5-7.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2a.5.5 0 0 1 1 0z' />
		</svg>
	),
	list: (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-5 w-5'
			viewBox='0 0 20 20'
			fill='currentColor'
		>
			<path
				fillRule='evenodd'
				d='M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
				clipRule='evenodd'
			/>
		</svg>
	),
	grid: (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-5 w-5'
			viewBox='0 0 20 20'
			fill='currentColor'
		>
			<path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' />
		</svg>
	),
	settings: (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-5 w-5'
			viewBox='0 0 20 20'
			fill='currentColor'
		>
			<path
				fillRule='evenodd'
				d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
				clipRule='evenodd'
			/>
		</svg>
	),
	moon: (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-5 w-5'
			viewBox='0 0 20 20'
			fill='currentColor'
		>
			<path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
		</svg>
	),
	sun: (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-5 w-5'
			viewBox='0 0 20 20'
			fill='currentColor'
		>
			<path
				fillRule='evenodd'
				d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
				clipRule='evenodd'
			/>
		</svg>
	),
	lines: {
		step: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path d='M20.2 17.2l-7.7-7.7-4 4-5.7-5.7' />
				<path d='M15 18h6v-6' />
			</svg>
		),
		curved: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path d='M9 14l6 6 6-6' />
				<path d='M4 4h7a4 4 0 0 1 4 4v11' />
			</svg>
		),
		straight: (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='2'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<path d='M12 5v13M5 12l7 7 7-7' />
			</svg>
		),
	},
	stars: (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-5 w-5'
			viewBox='0 0 20 20'
			fill='currentColor'
		>
			<path
				fillRule='evenodd'
				d='M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z'
				clipRule='evenodd'
			/>
		</svg>
	),
};

export { icons };
