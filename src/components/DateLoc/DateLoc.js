import classes from './DateLoc.module.css'
import React, { Component } from 'react'

export default class dateLoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: 'London',
            date: new Date()
        };
    }

    componentDidMount(){
        this.timerID = setInterval( () => this.tick(),
        1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }


    tick(){
        this.setState({
            date: new Date()
        })
    }

    dateBuilder(d){
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'];
        let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        let hour = (d.getHours()<10?'0':'') + d.getHours();
        let minute = (d.getMinutes()<10?'0':'') + d.getMinutes();

        return `${hour}:${minute} - ${day}, ${date} ${month} ${year}`
    }

    render() {
        return (
        <div className={classes.dateLoc}>
            <input type='text' className={classes.h2} value={this.state.location}/>
            <ul className={classes.resultList} >
                {this.props.results.map((result) => (
                    
                        <button
                        type='button'
                        className={classes.resultsButton}
                        >{result}
                        </button>
                    
                ))}
            </ul>
            <h3>{this.dateBuilder(this.state.date)}</h3>
        </div>
        )
    }
}

