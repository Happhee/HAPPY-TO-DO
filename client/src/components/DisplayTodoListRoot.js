import React from 'react';
import DisplayTodoList from '../containers/DisplayTodoList';
import '../css/DisplayTodoListRoot.css';

function DisplayTodoListRoot() {
    return (
        <div className="displayTodoListRoot">
            <DisplayTodoList></DisplayTodoList>
        </div>
    )
}

export default DisplayTodoListRoot;