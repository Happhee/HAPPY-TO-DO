import AddTodoList from '../components/AddTodoList';
import { connect } from 'react-redux';
import { addTodoList } from '../actions/todoList';

function mapReduxDispatchToReactProps(dispatch) {
    return {
        onClick: function (todoText) {
            dispatch(addTodoList(todoText));
        }
    }

}
export default connect(null, mapReduxDispatchToReactProps)(AddTodoList);