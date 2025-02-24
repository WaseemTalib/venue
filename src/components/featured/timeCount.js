import React, { Component } from 'react';
import Slide from 'react-reveal/Slide'


class timeCount extends Component {

    state = {
        deadline: 'Dec, 16, 2020',
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0',
    }

    getTime(deadline) {
        let time = Date.parse(deadline) - Date.parse(new Date());
        if( time < 0){
            console.log("time Passed")
        }else{
            let seconds = Math.floor((time/1000)%60)
            let minutes = Math.floor((time/1000/60)%60)
            let hours = Math.floor((time/(1000*60*60))%24)
            let days = Math.floor((time/(1000*60*60*24))%24)
            
            this.setState({
                days,
                hours,
                minutes,
                seconds
            })
        }
    }

    componentDidMount() {        
        setInterval(() => this.getTime(this.state.deadline), 1000);
    }

    render() {
        return (
            <Slide left delay={1000}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        Event Stats in
                </div>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.days}
                        </div>
                            <div className="countdown_tag">
                                days
                        </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                            {this.state.hours}
                        </div>
                            <div className="countdown_tag">
                                Hrs
                        </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                            {this.state.minutes}
                        </div>
                            <div className="countdown_tag">
                                mins
                        </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                            {this.state.seconds}
                        </div>
                            <div className="countdown_tag">
                                sec
                        </div>
                        </div>
                    </div>
                </div>
            </Slide>
        );
    }
}

export default timeCount;