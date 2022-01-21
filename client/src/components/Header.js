import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { IconButton } from '@mui/material';
import { VscAdd } from 'react-icons/vsc';
import styles from '../css/Header.module.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
function Header(props) {

    return (
        <div className={styles.container}>
            <header>
                <h1>HAPPY TO DO</h1>
            </header>
            <section>
                <nav>
                    <ul>
                        <Link className={styles.menu} to="/calendar">달력</Link>
                        <Link className={styles.menu} to="/">오늘의 기록</Link>
                    </ul>
                </nav>
            </section>
        </div>


    )
}
export default Header;