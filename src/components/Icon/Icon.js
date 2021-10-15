import React from 'react'
import './Icon.css'
import WeatherIcon from 'react-icons-weather'
import 'weather-icons/css/weather-icons.css'

export default function Icon(props) {



    return (
        <div className='icon'>
            <WeatherIcon name="owm" iconId={props.weatherID} flip="horizontal" rotate="90"/>
        </div>
    )
}
