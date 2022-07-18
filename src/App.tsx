import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Components/Counter/Counter";
import {Settings} from "./Components/Settings/Settings";

function App() {

    const [start, setStart] = useState<number>(0);
    const [max, setMax] = useState<number>(5);
    let [counter, setCounter] = useState(start)

    useEffect(() => {
        let actualCounter = localStorage.getItem('counterValue')
        actualCounter && setCounter( JSON.parse(actualCounter))
    }, [] )

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(counter))
    }, [counter])

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
        setStart(value)
    }

    const updateSettings = () => {
        console.log(max, start)
        localStorage.setItem('startValue', JSON.stringify(start))
        localStorage.setItem('maxValue', JSON.stringify(max))
        setCounter(start)
    }


    return (
        <div className='App'>

            <Counter
                max={max}
                start={start}
                counter={counter}
                counterReset={counterReset}
                counterIncreaser={counterIncrease}
            />

            <Settings
                start={start}
                max={max}
                changeMax={changeMaxValue}
                changeStart={changeStartValue}
                updateSettings={updateSettings}
            />


        </div>
    );
}

export default App;
