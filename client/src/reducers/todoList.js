import * as types from '../actions/types';

const initialState = {
    todoList: [{ id: 0, selected: false, todoText: '모던자바읽기' }],
    remainTodo: 1,
};


export default function todoList(state = initialState, action) {


    //todoList 추가 
    switch (action.type) {
        case types.ADD_TODO_LIST:

            return {
                ...state,
                todoList: [...state.todoList, { id: state.todoList.length, selected: false, todoText: action.payload }]
            };

        //완료한 리스트 
        case types.SUCCESS_TODO_LIST:
            let newTodoList = { ...state.todoList }
            newTodoList[action.payload].selected = !newTodoList[action.payload].selected
            if (newTodoList[action.payload].selected) {
                state.remainTodo = state.remainTodo - 1;
            }

            return {
                ...state,
                todoList: [...state.todoList]
            }

    }

    return state;
}

