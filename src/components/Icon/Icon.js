import React from 'react'
import './Icon.css'
import WeatherIcon from 'react-icons-weather'
import 'weather-icons/css/weather-icons.css'

export default function Icon() {
    return (
        <div className='icon'>
            <WeatherIcon name="owm" iconId="200" flip="horizontal" rotate="90"/>
        </div>
    )
}
