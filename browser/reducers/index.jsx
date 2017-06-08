import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  searchValues: require('./search.jsx').default,
  results: require('./results.jsx').default
});

export default rootReducer;
