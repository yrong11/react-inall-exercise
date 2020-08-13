import React from 'react';
import { NavLink } from 'react-router-dom';
import './timer.css'

class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            seconds: 0,
            showSecond: 'Start'
        };
    }
    tick = () => {
        const { seconds } = this.state;
        this.setState({
            seconds: seconds - 1,
            showSecond: seconds + ' Seconds'
        })
        if (seconds === 0) {
            this.setState({
                showSecond: 'End'
            })
            clearInterval(this.timer)
        }
    }

    handleInputTime = (event) => {
        this.setState({
            seconds: parseInt(event.target.value)
        })
    }

    startCountDown = () => {
        if (this.state.seconds) {
            this.timer = setInterval(() => {
                this.tick();
            }, 1000);
        }
    }

    render() {
        return (
            <div className="timer">
                <div><h1>在线倒计时器</h1></div>
                <div className="timer-1">
                    <div className="timer-2">
                        <label>设置时间
                            <input type='text'
                                onChange={this.handleInputTime}></input>
                        </label>
                        <div className="timer-3">
                            <button
                                onClick={this.startCountDown}>Start</button>
                        </div>
                    </div>
                    <div className="timer-4">
                        <p className="show-second">{this.state.showSecond}</p>
                    </div>
                </div>
                <div className="back-home">
                    <NavLink to='/'>返回主页</NavLink>
                </div>
            </div>

        )
    }
}
export default Timer;