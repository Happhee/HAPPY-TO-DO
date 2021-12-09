import * as types from '../actions/todoList';

const initialState = {
    todo_text: ''
};

// if(typeof state === 'undefined'){
//     return initialState;
// }

export default function todoList(state = initialState, action) {

    switch (action) {

        case types.ADD_TODO_LIST:
            return { todo_text: state.todo_text };
            break;

        case types.DELETE_TODO_LIST:
            return { todo_text: state.todo_text };
            break;
        case types.ADD_TODO_LIST:
            return { todo_text: state.todo_text };
            break;
        case types.ADD_TODO_LIST:
            return { todo_text: state.todo_text };
            break;

    }

    return state;

}
