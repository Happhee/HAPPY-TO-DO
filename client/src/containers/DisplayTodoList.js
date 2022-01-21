import DisplayTodoList from '../components/DisplayTodoList';
import { connect } from 'react-redux';
import { deleteTodoList, successTodoList } from '../modules/actions/todoList';


function mapReduxStateToReactProps(state) {
    return state.todoList
}
function mapReduxDispatchToReactProps(dispatch) {
    return {
        onClick: function (todoId) {
            dispatch(successTodoList(todoId));
        },
        onDelete: function (todoId) {
            dispatch(deleteTodoList(todoId));
        }

    }

}


export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(DisplayTodoList);