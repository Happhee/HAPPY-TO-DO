import * as types from '../actions/types';

const initialState = {
    todoList: []
};


export default function todoList(state = initialState, action) {

    switch (action) {
        case types.ADD_TODO_LIST:
            return {
                ...todoList,
                todoList: state.todoList.push(action.payload)
            };
            console.log(todoList);
            break;

    }

    return state;

}
