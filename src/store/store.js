import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';
import rootReducer from './reducers';
const configureStore = initialState => {
	const middlewares = [promise, thunk];
	const store = createStore(
		rootReducer,
		initialState,
		composeWithDevTools(applyMiddleware(...middlewares))
	);
	return store;
};

export default configureStore;
