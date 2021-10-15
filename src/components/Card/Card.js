import React, { Component } from 'react'
import classes from './Card.module.css';
import DateLoc from '../DateLoc/DateLoc';
import Temp from '../Temp/Temp';
import Icon from '../Icon/Icon'
import Details from '../Details/Details'
import cities from '../../assets/city.list.json'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const api = {
    key: '9c83b67d6ce1c15bb092d373fe92847a',
    base: 'api.openweathermap.org/data/2.5/'
}

function getUserCoords() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition( position => {
            resolve([position.coords.latitude, position.coords.longitude])
        })
    })
}


export default class Card extends Component {
    constructor(props){
        super(props)
        this.state = {
            location : '',
            searchResults: [],
            items: {},
            isLoaded: false,
            temp : '',
            time: 0,
            timezone : '',
            timestamp: '',
            cloudy : '',
            humidity : '',
            wind : '',
            rain: '',
            weatherID: '200',
            showResults: null
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.apiSearch = this.apiSearch.bind(this);
        this.pushInfo = this.pushInfo.bind(this);


    }

    componentDidMount() {

        getUserCoords()
        .then(([lat,lon]) => 
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api.key}&units=metric`)
            .then(res => res.json())
            .then(json => this.pushInfo(json))
            )
        
    }

    handleChange(e){
        this.setState({
            location : e.target.value,
        })
        if (this.state.location.length > 1){
            let sResults = cities.filter(x => x.name.startsWith(this.state.location) ? x.name : null)
            this.setState({
                searchResults : sResults.map( x => [x.name, x.country, x.id]),
                showResults : true   
            })
        if (e.key === 'Enter'){
            this.search();
        }

        }
    }

    handleClick(e){
        let locationArr = e.target.value
        let cityID = e.target.id
        this.setState({
            location : locationArr,
        }, this.apiSearch(cityID))
    }

    pushInfo(json){

        this.setState({
            isLoaded: true,
            location: json.name,
            items: json,
            temp: json.main.temp,
            time: (json.timezone - 3600)*1000,
            weatherID: `${json.weather[0].id}`,
            cloudy: json.clouds.all,
            humidity: json.main.humidity,
            wind: json.wind.speed,
            rain: json.rain ? json.rain["1h"] : 0
        })
    }

    apiSearch (cityID){

        fetch(`https://${api.base}weather?id=${cityID}&appid=${api.key}&units=metric`)
        .then(res => res.json())
        .then(json => this.pushInfo(json))
        .catch( err => {
            console.log(`Error reading message: ${err}`)
        })
    }

    render() {
        return (
            <div className={classes.container}>
                {!this.state.isLoaded ? <LoadingSpinner /> : 
                <div className={classes.basicInfo}>
                    <Temp temp={this.state.temp}/>
                    <DateLoc 
                    searchResults={this.state.searchResults} 
                    location={this.state.location} 
                    time={this.state.time}
                    onChange={this.handleChange} 
                    onClick={this.handleClick}
                    showResults={this.state.showResults}
                    />
                </div>
                }
                {!this.state.isLoaded ? null : 
                <div className={classes.detailedInfo}>
                    <Icon weatherID={this.state.weatherID}/>
                    <Details 
                        cloudy={this.state.cloudy}
                        humidity={this.state.humidity}
                        wind={this.state.wind}
                        rain={this.state.rain}
                    />
                </div>
                }
            </div>

        )
    }
}
