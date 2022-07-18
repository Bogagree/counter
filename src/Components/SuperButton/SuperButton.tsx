import React from 'react';
import style from './SuperButton.module.css'

export type ButtonPropsType = {
    title: string
    callback: () => void
    disabled: boolean
}

const SuperButton = (props:ButtonPropsType) => {

    const buttonOnClickHandler = () => {
        props.callback()
    }

    return (
            <button
                className={style.btn}
                onClick={buttonOnClickHandler}
                disabled={props.disabled}>
                {props.title}
            </button>
    );
};

export default SuperButton;