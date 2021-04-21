import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'jupiterui-components';

import Home from './routes/Home';

const App = () => {
	return (
		<Router>
			<ThemeProvider themes={true}>
				<Switch>
					<Route path='/' exact component={Home} />
				</Switch>
			</ThemeProvider>
		</Router>
	);
};

export default App;
