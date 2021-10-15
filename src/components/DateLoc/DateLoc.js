import classes from './DateLoc.module.css'
import React, { Component } from 'react'

export default class dateLoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(this.props.time),
            fontsize: '100px',
            showResults: 'none'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleFontSize = this.handleFontSize.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.handleSearchDisplay = this.handleSearchDisplay.bind(this)

    }

    componentDidMount(){
        this.handleFontSize(this.props.location)
    }

    componentWillUnmount(){
    }


    dateBuilder(){
        const unixTime = new Date().getTime()
        const d = new Date(unixTime + this.props.time)

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

    handleSearchDisplay(){
        if(this.props.showResults){
            this.setState({
                showResults: 'flex'
            })
        }else{
            this.setState({
                showResults: 'none'
            })
        }
    }

    handleKeyDown(e){
        if(this.props.location < 8){
            this.setState({
                fontsize: '100'
            })
        }else if (this.props.location.length > 8 && e.keyCode > 64 && e.keyCode < 91){
            this.setState({
                fontsize: `${this.state.fontsize * 0.90}`
            })
            console.log(e.keyCode)
        } else if (this.props.location.length > 9 && e.keyCode === 8){
                this.setState({
                    fontsize: `${this.state.fontsize * 1.08}`
            })
        }
    }

    handleChange(e){
        this.props.onChange(e)
        this.handleSearchDisplay()
    }

    handleFontSize(location){
        if(location.length > 9){
            let fontExp = location.length - 8
            let origSize = 100
            let newFontSize = origSize * (0.90 ** fontExp)

            this.setState({
                fontsize: newFontSize
            })
        }
    }

    handleClick(e){
        this.props.onClick(e)
        this.setState({
            showResults: 'none',
        })
        this.handleFontSize(e.target.value)
    }

    render() {
        return (
        <div className={classes.dateLoc}>
            <input 
            type='text' 
            className={classes.h2} 
            value={this.props.location}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            id='inputfield'
            style={{fontSize: this.state.fontsize + 'px'}}
            />
            <ul 
            className={classes.resultList} 
            style={{display : this.state.showResults}}
            >
                {this.props.searchResults.map((result, i) => (
                    
                        <button
                        type='button'
                        className={classes.resultsButton}
                        key={i}
                        onClick={this.handleClick}
                        value={result[0]}
                        id={result[2]}
                        >{result[0]}, {result[1]}
                        </button>
                    
                ))}
            </ul>
            <h3>{this.dateBuilder()}</h3>
        </div>
        )
    }
}

