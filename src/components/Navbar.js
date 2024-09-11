import React from 'react'
import { Link } from "react-router-dom"
import DigitalTimer from './DigitalTimer'
export default function Navbar(props) {

    const {SetBackgroundColors, mode} = props
    // console.log(SetBackgroundColors)
    const onSetBackgroundColor = (val)=>{
        // console.log("hi this is val ---- ", 2)
        SetBackgroundColors(val)
    }
    const modeText = mode === 'dark' ? 'Dark mode' : 'Light mode'
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">DSA <i className="fa-solid fa-code"></i></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/random">Random challenge</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    POTD
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="https://www.geeksforgeeks.org/problem-of-the-day" target="_blank">GFG</a></li>
                                    <li><a className="dropdown-item" href="https://www.naukri.com/code360/problem-of-the-day" target="_blank">code360</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else comming soon</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/faqs">FAQs</Link>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li> */}
                        </ul>
                        <div>
                            <DigitalTimer/>
                        </div>
                        <div className={`form-check form-switch text-dark}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{modeText}</label>
                        </div>
                        <div className='d-flex flex-row justify-content-center'>
                            <button type="button" data-testid="hi" className='mx-2' onClick={() => onSetBackgroundColor(0)} style={{width:"20px",height:"20px", backgroundColor: "rgb(223, 230, 236)"}}></button>
                            <button type="button" data-testid="hi" className='mx-2' onClick={() => onSetBackgroundColor(1)} style={{width:"20px",height:"20px", backgroundColor: "rgb(159, 203, 242)"}}></button>
                            <button type="button" data-testid="hi" className='mx-2' onClick={() => onSetBackgroundColor(2)} style={{width:"20px",height:"20px", backgroundImage: "linear-gradient(to right, #9796f0, #fbc7d4)"}}></button>
                            <button type="button" data-testid="hi" className='mx-2' onClick={() => onSetBackgroundColor(3)} style={{width:"20px",height:"20px", backgroundImage: 'linear-gradient(to right, #ffffff, #73f4d4,  #defafe, #cffcf1,#00d9f5)'}}></button>
                        </div>
                        {/* <form className="d-flex mx-3 my-3 my-md-0 ">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}
