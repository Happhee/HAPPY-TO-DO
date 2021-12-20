import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import { VscAdd } from 'react-icons/vsc';

function AddTodoList(props) {

    let [todoText, setTodoText] = useState('');
    return (
        <div className="addTodoList">
            <p className="date">{props.nowDate}</p>
            <p className="todoInput">해야 할 일</p>

            <div >
                <TextField className="todoInput" variant="standard"
                    color="secondary" focused
                    value={todoText} onChange={function (e) {
                        setTodoText(e.target.value);
                    }} />
                <IconButton color="secondary" onClick={function () {
                    props.onClick(todoText)
                    setTodoText('');
                }}>
                    <VscAdd />
                </IconButton>
            </div>

            <div className="remainTodo">
                <span>남은일 </span>
                <span className="remainTodoProps">{props.remainTodo}</span><span>개</span>
            </div>
        </div>


    )
}
export default AddTodoList;