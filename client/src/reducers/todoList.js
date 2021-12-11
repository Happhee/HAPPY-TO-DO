import * as types from '../actions/types';

const initialState = {
    todoList: [{ selected: false, todoText: '모던자바읽기' }]
};


export default function todoList(state = initialState, action) {

    //todoList 추가 
    switch (action.type) {
        case types.ADD_TODO_LIST:

            return {
                ...state.todoList,
                todoList: [...state.todoList, { selected: false, todoText: action.payload }]
            };
            break;
    }

    return state;
}
