import * as types from './types'

export function addTodoList(todoText) {
    return {
        type: types.ADD_TODO_LIST,
        payload: todoText
    };
}

export function deleteTodoList(todoText) {
    return {
        type: types.DELETE_TODO_LIST,
        payload: todoText
    }
}

export function updateTodoList(todoText) {
    return {
        type: types.UPDATE_TODO_LIST,
        payload: todoText
    }
}

export function successTodoList(todoId) {
    return {
        type: types.SUCCESS_TODO_LIST,
        payload: todoId
    }
}