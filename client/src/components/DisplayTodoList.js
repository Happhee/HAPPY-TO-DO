import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import { VscAdd } from 'react-icons/vsc';

function DisplayTodoList(props) {
    let [todoText, setTodoText] = useState('');
    return (
        <div>
            <TextField label="해야 할 일" variant="standard" color="secondary" focused
                value={todoText} onChange={function (e) {
                    setTodoText(e.target.value);
                }} />
            <IconButton color="secondary" onClick={function () {
                props.onClick(todoText)
            }}>
                <VscAdd />
            </IconButton>
        </div>
    )

}
export default DisplayTodoList;