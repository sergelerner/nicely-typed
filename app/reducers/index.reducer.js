import { combineReducers } from 'redux';
import reservedReducer from './reserved.reducer';

const rootReducer = combineReducers({
  reserved: reservedReducer
});

export default rootReducer;
