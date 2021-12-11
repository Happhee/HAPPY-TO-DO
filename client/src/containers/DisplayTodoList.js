import DisplayTodoList from '../components/DisplayTodoList';
import { connect } from 'react-redux';
import { successTodoList } from '../actions/todoList';


function mapReduxStateToReactProps(state) {
    return state.todoList
}
function mapReduxDispatchToReactProps(dispatch) {
    return {
        onClick: function (todoId) {
            dispatch(successTodoList(todoId));
        }
    }

}


export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(DisplayTodoList);