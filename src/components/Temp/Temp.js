import React from 'react'
import classes from './Temp.module.css'

export default function Temp(props) {


    const tempRound = (temp) => {
        const int = parseInt(temp);
        return Math.ceil(int)
    }

    return (
        <div>
            <h1 
            className={classes.temp}>
            {tempRound(props.temp)}°
            </h1>
        </div>
    )
}
