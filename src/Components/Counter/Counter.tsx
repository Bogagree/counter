import React from 'react';
import Num from "../NumComponent/Num";
import SuperButton from "../SuperButton/SuperButton";
import style from './Counter.module.css'


type CounterPropsType = {
    counterIncreaser: () => void
    counterReset: () => void
    max: number
    start: number
    counter: number
}

export const Counter: React.FC<CounterPropsType> = (props) => {
    return (

        <div className={style.counter}>
            <div className={style.counter__container}>
                <Num counter={props.counter}/>
                <div className={style.buttons_wrapper}>
                    <SuperButton title={"inc"} callback={props.counterIncreaser} disabled={props.counter === props.max}/>
                    <SuperButton title={"reset"} callback={props.counterReset} disabled={props.counter === props.start}/>
                </div>
            </div>

        </div>
    );
};

export default Counter;