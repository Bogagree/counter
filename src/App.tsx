import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Components/Counter/Counter";
import {Settings} from "./Components/Settings/Settings";
import style from "./Components/Settings/Settings.module.css";

function App() {

    const [start, setStart] = useState<number>(0);
    const [max, setMax] = useState<number>(5);
    const [counter, setCounter] = useState<number>(start);


    useEffect(() => {
        let actualCounter = localStorage.getItem('counterValue')
        actualCounter && setCounter( JSON.parse(actualCounter))
    }, [] )

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(counter))
        localStorage.setItem('start', JSON.stringify(start))
        localStorage.setItem('max', JSON.stringify(max))
       // if(start >= max) setError(true)
        //else setError(false)
    }, [counter, start, max])
    // вопрос по массиву

    useEffect( () => {}, [])

    const counterIncrease = () => {
        if (counter < max) {
            setCounter(counter + 1)
        }
    }

    const counterReset = () => {
        setCounter(start)
    }

    const changeMaxValue = (value: number) => {
        setMax(value)
    }

    const changeStartValue = (value: number) => {
        setStart(value);
    }

    const updateSettings = () => {
        console.log(max, start)
        localStorage.setItem('startValue', JSON.stringify(start))
        localStorage.setItem('maxValue', JSON.stringify(max))
        setCounter(start)
    }

    let startFinalClassName = start < 0 ||  start > max ? style.warning: '' ;
    let maxFinalClassName = max < 0 ? style.warning : ''


    return (
        <div className='App'>

            <Counter
                max={max}
                start={start}
                counter={counter}
                counterReser={counterReset}
                counterIncreaser={counterIncrease}
            />

            <Settings
                start={start}
                max={max}
                changeMax={changeMaxValue}
                changeStart={changeStartValue}
                updateSettings={updateSettings}
                startClassName={startFinalClassName}
                maxClassName={maxFinalClassName}
            />

        </div>
    );
}

export default App;
