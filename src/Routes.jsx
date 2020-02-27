import React, { Suspense, lazy } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';

const Home = lazy(() => import('./containers/Home/Home'));
const Machines = lazy(() => import('./containers/Machines/Machines'));
const store = configureStore();

const Routes = () => {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Provider store={store}>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/machines' component={Machines} />
						<Route path='*'>
							<Redirect to='/' />
						</Route>
					</Switch>
				</Provider>
			</Suspense>
		</Router>
	);
};

export default Routes;
