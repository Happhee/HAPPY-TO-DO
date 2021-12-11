import DisplayTodoList from '../components/DisplayTodoList';
import { connect } from 'react-redux';

function mapReduxStateToReactProps(state) {
    return {
        todoList: state.todoList
    }

}
export default connect(mapReduxStateToReactProps)(DisplayTodoList);