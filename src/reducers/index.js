import { combineReducers } from 'redux';

import taskReducer from './reducer_task';

const rootReducer = combineReducers({
  tasks: taskReducer,
});

export default rootReducer;
