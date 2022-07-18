import React from 'react';
import style from "./Settings.module.css"
import {MySuperInput} from "../SuperInput/MySuperInput";
import {Button} from "@mui/material";

type SettingsPropsType = {
    max: number
    start: number
    changeMax: (newMax: number) => void
    changeStart: (newStart: number) => void
    updateSettings: () => void
}

export const Settings: React.FC<SettingsPropsType> = (props) => {


    function onChangeMaxHAndler(newMax:number) {
        props.changeMax(newMax)
    }

    return (
        <div>
            <div className={style.settings}>

                <MySuperInput title='Start' value={props.start} onChangeNumber={props.changeStart} />
                <MySuperInput title='Max' value={props.max} onChangeNumber={(newMax) => {onChangeMaxHAndler(+newMax)}} />

                <Button onClick={props.updateSettings} variant="contained">SET settings</Button>
            </div>
        </div>
    );
};