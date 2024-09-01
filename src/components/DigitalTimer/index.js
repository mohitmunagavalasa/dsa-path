// Write your code here
import { Component } from 'react'
import './index.css'

class DigitalTimer extends Component {
    constructor(props) {
        super(props)
        this.state = { timerLimit: 25, time: 25 * 60, start: false }
    }

    componentDidMount() {
        console.log('component did mount')
        this.tickId = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        console.log('component will unmount')
        clearInterval(this.tickId)
    }

    tick = () => {
        const { timerLimit, time, start } = this.state
        if (start) {
            const minutes = Math.floor(time / 60)
            const seconds = time % 60
            if (minutes === 0 && seconds === 0) {
                this.onReset()
                return
            }
            //   console.log(`${time} ${minutes} ${seconds}`)
            this.setState({ time: time - 1 })
        }
    }

    getTime = () => {
        const { time, timerLimit } = this.state
        const minutes = Math.floor(time / 60)
        const seconds = time % 60
        const res = `${minutes < 9 ? `0${minutes}` : minutes}:${seconds < 9 ? `0${seconds}` : seconds
            }`
        console.log("hi " , Math.floor((time / (timerLimit * 60)) * 100));    
        return res
    }

    updateStart = () => {
        this.setState(prevState => ({
            start: !prevState.start,
        }))
    }

    onReset = () => {
        this.setState({ timerLimit: 25, time: 25 * 60, start: false })
    }

    increment = () => {
        const { timerLimit, start, time } = this.state
        if (!start) this.setState({ timerLimit: timerLimit + 1, time: time + 60 })
    }

    decrement = () => {
        const { timerLimit, time, start } = this.state
        if (!start && timerLimit !== 0)
            this.setState({ timerLimit: timerLimit - 1, time: time - 60 })
    }

    render() {
        const { start, timerLimit, time } = this.state
        const startPauseText = start ? 'Pause' : 'Start'
        const timerText = start ? 'Running' : 'Paused'
        const icon = start
            ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
        const altText = start ? 'pause icon' : 'play icon'
        const timeRemaining = this.getTime()
        // console.log(timeRemaining)
        return (
            <>
                <button type="button" className="btn btn-outline-primary mx-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i className="fa-regular fa-clock"></i> {timeRemaining}
                    <div className="progress" style={{ height: "1px" }}>
                        <div className="progress-bar" role="progressbar" style={{ width: `${Math.floor((time / (timerLimit * 60)) * 100)}%` }} aria-valuenow={(time / (timerLimit * 60)) * 100} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-xl">
                        <div className="modal-content" style={{ backgroundImage: "linear-gradient(to bottom, #ffffff, #cffcf1, #defafe)" }}>
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Pomodoro Timer</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body p-0">
                                <div className="digital-timer-bg-container  pt-5">
                                    <div >
                                        <h1 className="title">Digital Timer</h1>
                                        <div className="container1">
                                            <div className="timer-bg-container">
                                                <div className="timer-container">
                                                    <h1 className="time">{timeRemaining}</h1>
                                                    <p className="time-state">{timerText}</p>
                                                </div>
                                            </div>
                                            <div className="timer-details-container">
                                                <div className="start-reset-container">
                                                    <div className="start">
                                                        <button id="start" type="button" onClick={this.updateStart}>
                                                            <img className="play-pause-btn" src={icon} alt={altText} />
                                                        </button>
                                                        <label htmlFor="start" className="start-stop-text">
                                                            {startPauseText}
                                                        </label>
                                                    </div>
                                                    <div className="start">
                                                        <button id="reset" type="button" onClick={this.onReset}>
                                                            <img
                                                                className="play-pause-btn"
                                                                src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                                                                alt="reset icon"
                                                            />
                                                        </button>
                                                        <label htmlFor="reset" className="start-stop-text">
                                                            Reset
                                                        </label>
                                                    </div>
                                                </div>
                                                <p className="set-timer-limit">Set Timer Limit</p>
                                                <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                    <button
                                                        type="button"
                                                        className="increment-decrement"
                                                        onClick={this.decrement}
                                                    >
                                                        -
                                                    </button>
                                                    <p className="time-set-text">{timerLimit}</p>
                                                    <button
                                                        type="button"
                                                        className="increment-decrement"
                                                        onClick={this.increment}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default DigitalTimer
