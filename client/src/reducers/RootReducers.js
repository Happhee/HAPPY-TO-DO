import { combineReducers } from 'redux';
import todoList from './TodoList';

//todoList 리듀서 추가
const RootReducers = combineReducers({
    todoList
});

export default RootReducers;