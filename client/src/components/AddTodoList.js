import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import { VscAdd } from 'react-icons/vsc';
import styles from '../css/AddTodoList.module.css'

function AddTodoList(props) {

    let [todoText, setTodoText] = useState('');
    return (

        <div className={styles.addTodoListContainer}>
            <p className={styles.date}>{props.nowDate}</p>
            <p className={styles.todoInput}>해야 할 일</p>

            <div className={styles.todoInput} >
                <TextField className={styles.todoInput} variant="standard"
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

            <div className={styles.remainTodo}>
                <span>남은일 </span>
                <span className={styles.remainTodoProps}>{props.remainTodo}</span><span>개</span>
            </div>
        </div>


    )
}
export default AddTodoList;