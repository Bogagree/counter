import style from './Num.module.css'

export type NumPropsType = {
    counter: number
}

export const Num = (props: NumPropsType) => {
    let max = 5

    let finalClassName = props.counter === max ? style.num + ' ' + style.max : style.num

    return (
        <div>
            <div className={finalClassName} >{props.counter}</div>
        </div>
    );
};

export default Num;