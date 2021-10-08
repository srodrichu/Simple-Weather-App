import React from 'react'
import classes from './Details.module.css'

export default function Details() {
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
                    <h3>12%</h3>
                    <h3>78%</h3>
                    <h3>1km/h</h3>
                    <h3>10mm</h3>
                </div>
            </div>
        </div>
    )
}
