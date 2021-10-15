import React from 'react'
import classes from './Details.module.css'

export default function Details(props) {
    return (
        <div className={classes.container}>
            <h1>Details</h1>
            <div className={classes.details}>
                <div className={classes.detailTitle}>
                    <h3>Cloudy</h3>
                    <h3>Humidity</h3>
                    <h3>Wind</h3>
                    <h3>Rain</h3>
                    
                </div>
                <div className={classes.detailOut}>
                    <h3>{props.cloudy}%</h3>
                    <h3>{props.humidity}%</h3>
                    <h3>{props.wind}km/h</h3>
                    <h3>{props.rain}mm</h3>
                </div>
            </div>
        </div>
    )
}
