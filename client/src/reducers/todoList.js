import * as types from '../actions/types';

const initialState = {
    todoList: [{ id: 0, selected: false, todoText: '모던자바읽기' }],
    remainTodo: 1,
};


export default function todoList(state = initialState, action) {


    switch (action.type) {
        //todoList 추가 + 남은 일의 개수 
        case types.ADD_TODO_LIST:

            return {
                ...state,
                todoList: [...state.todoList, { id: state.todoList.length, selected: false, todoText: action.payload }],
                remainTodo: state.remainTodo + 1
            };
        //완료한 리스트 
        case types.SUCCESS_TODO_LIST:
            if (state.todoList[action.payload].selected) {
                state.remainTodo += 1;
            }
            else {
                state.remainTodo -= 1;
            }
            state.todoList[action.payload].selected = !state.todoList[action.payload].selected

            return {
                ...state,
                todoList: [...state.todoList]
            };
        // 할일 삭제하기
        case types.DELETE_TODO_LIST:
            if (!state.todoList[action.payload].selected) {
                state.remainTodo -= 1;
            }
            state.todoList.splice(action.payload, 1);

            return {
                ...state,
                todoList: [...state.todoList]
            }
    }
    return state;
}

