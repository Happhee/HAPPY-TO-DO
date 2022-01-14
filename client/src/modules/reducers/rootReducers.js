import { combineReducers } from 'redux';
import todoList from './todoList';

//todoList 리듀서 추가
const rootReducers = combineReducers({
    todoList
});

export default rootReducers;