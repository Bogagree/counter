import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react';
import style from './MySuperInput.module.css'


type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type MySuperInputPropsType = DefaultInputPropsType & {
    title: string
    value: number
    onChangeNumber: (value: number) => void
}

export const MySuperInput: React.FC<MySuperInputPropsType> = (
    {   title, onChange, onChangeNumber, value, className,
        ...restProps}
) => {
    const [num, setNum] = useState<number>(value)

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setNum(+e.currentTarget.value)
        onChangeNumber(+e.currentTarget.value)
    }

    return (
        <div>
            <span className={style.input__label}>{title}</span>
            <input type="number" onChange={onChangeCallback} value={num} className={style.input__field}/>
        </div>
    );
};
