import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import User from './reducers/user';

const reducerMap = combineReducers({
	user: User,
});

let devToolsExtension = (f: any) => f;

const middlewares: any[] = [
	thunkMiddleware,
];
if (process.env.NODE_ENV === 'development') {
	const logger = createLogger({ collapsed: true });
	middlewares.push(logger);
	if ((window as any).__REDUX_DEVTOOLS_EXTENSION__) {
		devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__();
	}
}

const reduxStore = createStore(reducerMap, compose(
	applyMiddleware(...middlewares),
	devToolsExtension,
));

export default reduxStore;