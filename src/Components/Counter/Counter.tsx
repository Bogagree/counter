import React from 'react';
import Num from "../NumComponent/Num";
import SuperButton from "../SuperButton/SuperButton";
import style from './Counter.module.css'

type CounterPropsType = {
    counterIncreaser: () => void
    counterReser: () => void
    max: number
    start: number
    counter: number
}

export const Counter: React.FC<CounterPropsType> = (props) => {

    const error = props.start >= props.max

    return (

        <div className={style.counter}>
            <div className={style.counter__container}>

                <Num counter={props.counter} error={error} max={props.max}/>

                <div className={style.buttons_wrapper}>
                    <SuperButton title={"inc"} callback={props.counterIncreaser} disabled={props.counter >= props.max || error}/>
                    <SuperButton title={"reset"} callback={props.counterReser} disabled={props.counter === props.start || error}/>
                </div>
            </div>

        </div>
    );
};

export default Counter;