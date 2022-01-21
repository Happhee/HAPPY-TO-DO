import React, { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import IconButton from '@mui/material/IconButton';
import { VscClose } from "react-icons/vsc";
import styles from '../css/DisplayTodoList.module.css';

const StyledTextCell = styled(TableCell)(({ theme }) => ({

    [`&.${tableCellClasses.body}`]: {
        textAlign: 'center',
        fontSize: '30px',
        fontWeight: '10',
        fontFamily: 'Do Hyeon, sans-serif',

    },

}));

const StyledCloseButtonCell = styled(TableCell)(({ theme }) => ({

    [`&.${tableCellClasses.body}`]: {
        textAlign: 'center',
        fontSize: '20px'
    }
}));



function DisplayTodoList(props) {
    console.log(props.todoList)
    return (
        <div className={styles.displayTodoListRoot}>

            <TableContainer component={Paper} >
                <Table aria-label="simple table">
                    <TableBody>
                        {props.todoList.map((todoThing, index) => (
                            <TableRow
                                key={todoThing.todoText}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    <IconButton
                                        value="check"
                                        selected={todoThing.selected}
                                        onClick={() => {
                                            props.onClick(index);
                                        }}>
                                        {todoThing.icon}
                                    </IconButton>
                                </TableCell>

                                <StyledTextCell align="right">
                                    {todoThing.todoText}
                                </StyledTextCell>
                                <StyledCloseButtonCell>
                                    <IconButton
                                        onClick={() => {
                                            props.onDelete(index);
                                        }}>
                                        <VscClose />
                                    </IconButton>
                                </StyledCloseButtonCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </div>

    )

}
export default DisplayTodoList;

