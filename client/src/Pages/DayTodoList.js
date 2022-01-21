import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import { VscAdd } from 'react-icons/vsc';
import Title from '../components/Title';

import AddTodoList from '../containers/AddTodoList';
import DisplayTodoList from '../containers/DisplayTodoList';

function DayTodoList(props) {

    return (
        <div className="addTodoList">
            <Title />
            <AddTodoList />
            <DisplayTodoList />
        </div>




    )
}
export default DayTodoList;