import React from 'react';
import styles from '../css/AddTodoList.module.css'
import { TiPencil } from "react-icons/ti";
function Title() {
    return (
        <div >
            <div className={styles.titleContainer}>
                <span  >HAPPY</span>
                <span >TO</span>
                <span >DO</span>
                <TiPencil size="50" textDecoration="underline" />
            </div>
        </div>
    )
}

export default Title;