import * as types from '../actions/types';

const initialState = {
    todoList: []
};


export default function todoList(state = initialState, action) {

    //todoList 추가 
    switch (action.type) {
        case types.ADD_TODO_LIST:

            return {
                ...state.todoList,
                todoList: [...state.todoList, action.payload]
            };
            break;
    }

    return state;

}
