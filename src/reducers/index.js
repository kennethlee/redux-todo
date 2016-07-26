import { combineReducers } from 'redux';

import taskReducer from './reducer_task';
import filterReducer from './reducer_filter';

const rootReducer = combineReducers({
  tasks: taskReducer,
  activeFilter: filterReducer,
});

export default rootReducer;
