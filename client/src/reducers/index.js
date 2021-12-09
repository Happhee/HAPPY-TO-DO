import { combineRuducers } from 'redux';
import todoList from './todoList';

const reducers = combineRuducers({
    todoList
});

export default reducers;