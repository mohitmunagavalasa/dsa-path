
import './App.css';
import Card from './components/Card'
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Random from './components/Random';
import data from './components/Data';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
    } else setMode('light')
    console.log(mode + "enabled")
  }

  // const myStyle = {padding:"20px",
  //   // background: `hsla(221, 59%, 75%, 1) linear-gradient(90deg, hsla(221, 59%, 75%, 1) 0%, hsla(216, 40%, 58%, 1) 100%)`,
  //   // background: '-moz-linear-gradient(90deg, hsla(221, 59%, 75%, 1) 0%, hsla(216, 40%, 58%, 1) 100%)',
  //   // background: '-webkit-linear-gradient(90deg, hsla(221, 59%, 75%, 1) 0%, hsla(216, 40%, 58%, 1) 100%)',
  //   // filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr="#9BB2E5", endColorstr="#698CBF", GradientType=1 )'

  //   background: `hsla(213, 77%, 14%, 1) linear-gradient(90deg, hsla(213, 77%, 14%, 1) 0%, hsla(202, 27%, 45%, 1) 100%)`,
  //   background: '-moz-linear-gradient(90deg, hsla(213, 77%, 14%, 1) 0%, hsla(202, 27%, 45%, 1) 100%)',
  //   background: '-webkit-linear-gradient(90deg, hsla(213, 77%, 14%, 1) 0%, hsla(202, 27%, 45%, 1) 100%)', 
  //   filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr="#08203E", endColorstr="#557C93", GradientType=1)'
  // }

  const myStyle = { backgroundColor: "#243748" }
  // const myStyle = {padding:"20px",backgroundColor:"#4b749f"}
  // const myStyle = {padding:"20px", backgroundColor :"#1f7ea1"}
  // const myStyle = {padding:"20px",backgroundColor:"#60696b"}
  const cardStyle = { backgroundColor: "#295270", color: "white" }

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/" element={<Card mode={mode} data={data} toggleMode={toggleMode} myStyle={myStyle} cardStyle={cardStyle} />} />
          <Route path="/random" element={<Random mode={mode} toggleMode={toggleMode} myStyle={myStyle} cardStyle={cardStyle} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
