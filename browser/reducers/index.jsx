import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  filterText: require('./search.jsx').default,
});

export default rootReducer;
