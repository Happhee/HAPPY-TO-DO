import * as types from './todoList';

export function addTodoList() {
    return {
        types: types.ADD_TODO_LIST
    };
}

export function deleteTodoList(todoList) {
    return {
        type: types.DELETE_TODO_LIST,
        todoList: todoList
    }
}

export function updateTodoList(todoList) {
    return {
        type: types.UPDATE_TODO_LIST,
        todoList: todoList
    }
}

export function successTodoList(todoList) {
    return {
        type: types.SUCCESS_TODO_LIST,
        todoList: todoList
    }
}