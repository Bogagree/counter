import style from './Num.module.css'

export type NumPropsType = {
    counter: number
    error: boolean
    max: number
}

export const Num = (props: NumPropsType) => {

    let finalClassName = props.counter === props.max ? style.num + ' ' + style.max : style.num

    let warningText = props.counter === props.max ? style.num + ' ' + style.max : style.num


    return !props.error
        ? <div className={warningText}>{props.counter}</div>
        : <div className={finalClassName}>incorrect value</div>

};

export default Num;