import React from 'react';
import AddTodoList from '../containers/AddTodoList';
import '../css/AddTodoListRoot.css'
import { TiPencil } from "react-icons/ti";
function AddTodoListRoot() {
    return (
        <div >
            <div className="titleDiv">
                <span >HAPPY</span>
                <span >TO</span>
                <span >DO</span>
                <TiPencil size="50" textDecoration="underline" />
            </div>
            <AddTodoList></AddTodoList>
        </div>
    )
}

export default AddTodoListRoot;