import React, { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import ToggleButton from '@mui/material/ToggleButton';
import IconButton from '@mui/material/IconButton';
import { VscClose } from "react-icons/vsc";

const StyledHeartButtonCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,

    },
    [`&.${tableCellClasses.body}`]: {
        display: 'flex',
        justifyCotent: 'center'
    },
}));

const StyledTextCell = styled(TableCell)(({ theme }) => ({

    [`&.${tableCellClasses.body}`]: {
        textAlign: 'center',
        fontSize: '19px'
    },

}));

const StyledCloseButtonCell = styled(TableCell)(({ theme }) => ({

    [`&.${tableCellClasses.body}`]: {
        textAlign: 'center',
        fontSize: '19px'
    }
}));



function DisplayTodoList(props) {
    console.log(props.todoList)
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableBody>
                    {props.todoList.map((todoThing, index) => (
                        <TableRow
                            key={todoThing.todoText}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <StyledHeartButtonCell component="th" scope="row">
                                <ToggleButton
                                    value="check"
                                    selected={todoThing.selected}
                                    onChange={() => {
                                        props.onClick(index)
                                    }}>
                                    <IoHeartOutline />
                                </ToggleButton>
                            </StyledHeartButtonCell>

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
    )

}
export default DisplayTodoList;

