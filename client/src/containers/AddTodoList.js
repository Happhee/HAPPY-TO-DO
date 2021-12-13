import AddTodoList from '../components/AddTodoList';
import { connect } from 'react-redux';
import { addTodoList } from '../actions/todoList';
function mapReduxStateToReactProps(state) {
    return state.todoList;
}
function mapReduxDispatchToReactProps(dispatch) {
    return {
        onClick: function (todoText) {
            dispatch(addTodoList(todoText));
        }

    }
}
export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(AddTodoList);
