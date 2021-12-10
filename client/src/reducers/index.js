import { combineReducers } from 'redux';
import todoList from './todoList';

//todoList 리듀서 추가
const reducers = combineReducers({
    todoList: todoList
});

export default reducers;