import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './styles/jupiterui-overrides.css';
import './styles/k.css';
import './styles/flow.css';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
