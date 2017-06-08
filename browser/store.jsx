import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index.jsx';
// Creates a logger in console as the state updates
import logger from 'redux-logger';
// Allows async actions to update store
import thunkMiddleware from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(logger, thunkMiddleware));

export default store;
