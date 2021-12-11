import React, { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IoHeartOutline } from "react-icons/io5";
import ToggleButton from '@mui/material/ToggleButton';

const StyledHeartButtonCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {

    },
}));

const StyledTextCell = styled(TableCell)(({ theme }) => ({

    [`&.${tableCellClasses.body}`]: {
        textAlign: 'start',
    },

}));




function DisplayTodoList(props) {

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableBody>
                    {props.todoList.todoList.map((todoThing) => (
                        <TableRow
                            key={todoThing.todoText}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <StyledHeartButtonCell component="th" scope="row">
                                <ToggleButton
                                    value="check"
                                    selected={todoThing.selected}
                                    onChange={() => {

                                    }}>
                                    <IoHeartOutline />
                                </ToggleButton>
                            </StyledHeartButtonCell>

                            <StyledTextCell align="right">
                                {todoThing.todoText}
                            </StyledTextCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

}
export default DisplayTodoList;

