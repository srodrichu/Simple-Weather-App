import React, { Component } from 'react'
import classes from './Card.module.css';
import DateLoc from '../DateLoc/DateLoc';
import Temp from '../Temp/Temp';
import Icon from '../Icon/Icon'
import Details from '../Details/Details'

export default class Card extends Component {
    constructor(props){
        super(props)
        this.state = {
            results: [],
            items: [],
            isLoaded: false,
        }

    }

    componentDidMount() {

        fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=9c83b67d6ce1c15bb092d373fe92847a')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json
            })

        })

        let results = [];
        for (let i=0;i<10;i++){
            results.push(`location ${i}`)
        }
        this.setState({
            results : results
        })
    }

    pushResultsTest(){
        let results = [];
        for (let i=0;i<10;i++){
            results.push(`location ${i}`)
        }
        this.setState({
            results : results
        })
    }




    render() {
        return (
            <div className={classes.container}>
                <div className={classes.basicInfo}>
                    <Temp />
                    <DateLoc results={this.state.results}/>
                </div>
                <div className={classes.detailedInfo}>
                    <Icon />
                    <Details />
                </div>
            </div>

        )
    }
}
