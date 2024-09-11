
import './App.css';
import Card from './components/Card'
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Random from './components/Random';
import data from './components/Data';
import faqsList from './components/FaqsArr'
import Faqs from './components/Faqs';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const themeArr = [
  {
    myStyle:{},
    cardStyle:{}
  },
  {
    myStyle :{backgroundColor: "rgb(159, 203, 242)"},
    cardStyle:{backgroundColor: "rgb(202, 225, 245)"}
  },{
    myStyle: {backgroundImage: "linear-gradient(to right, #9796f0, #fbc7d4)"},
    cardStyle:{backgroundImage: "linear-gradient(to right, #9796f0, #fbc7d4)" ,opacity: 0.85, color: "#000000"}
  },{
    myStyle : {backgroundImage: 'linear-gradient(to right, #ffffff, #73f4d4,  #defafe, #cffcf1,#00d9f5)'},
    cardStyle : {backgroundImage :'linear-gradient(to right, #ffffff, #cffcf1, #defafe)' ,opacity: 0.7, color: "#000000"}
  }
]

function App() {
  const [mode, setMode] = useState('light')
  const [myStyleState, setMyStyleState] = useState([{backgroundColor: "rgb(159, 203, 242)"}, {backgroundColor: "rgb(202, 225, 245)"}])
  // const [myCardStyle, setMyCardStyle] = useState()
  let myStyle = ""
  let cardStyle = ""
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
    } else{
      setMode('light')
    } 
  }


  // console.log("index ", [themeArr[0].cardStyle, themeArr[0].cardStyle])
  const SetBackgroundColors = (val)=>{
    console.log("hello this is mohit", val)
    console.log([themeArr[val].myStyle, themeArr[val].cardStyle])
    setMyStyleState([themeArr[val].myStyle, themeArr[val].cardStyle])
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

  // const myStyle = {backgroundImage: "linear-gradient(to right, #ffffff, #cffcf1, #defafe)"}
  // const myStyle = { backgroundColor: "#243748"} // mypriroty
  // const myStyle = {padding:"20px",backgroundColor:"#4b749f"}
  // const myStyle = {padding:"20px", backgroundColor :"#1f7ea1"}
  // const myStyle = {padding:"20px",backgroundColor:"#60696b"}
  // const cardStyle = { backgroundColor: "#295270", color: "white" } // mypriority
  // const cardStyle = { backgroundImage: "linear-gradient(to right, #ffffff, #cffcf1, #defafe)" ,opacity: 0.7, color: "#000000", fontWeight:600}
  if (mode === 'dark') {
    myStyle = { backgroundColor: "#243748"}
    cardStyle = { backgroundColor: "#295270", color: "white" }
  }else{
    // cardStyle = { backgroundImage: "linear-gradient(to right, #9796f0, #fbc7d4)" ,opacity: 0.7, color: "#000000"}
    // myStyle = { backgroundImage: "linear-gradient(to right, #9796f0, #fbc7d4)"}

    // myStyle = {backgroundColor: "rgb(159, 203, 242)"} // light blue
    // cardStyle = {backgroundColor: "rgb(202, 225, 245)"}

    // myStyle = myStyleState
    // cardStyle = myCardStyle

    myStyle = myStyleState[0]
    cardStyle = myStyleState[1]
    console.log("this is style", myStyle)
    console.log("this is card style", cardStyle)

    // cardStyle = {backgroundImage :'linear-gradient(to right, #ffffff, #cffcf1, #defafe)' ,opacity: 0.7, color: "#000000"}
    // myStyle = {backgroundImage: 'linear-gradient(to right, #ffffff, #73f4d4, #defafe, #cffcf1)'}
    // myStyle = {backgroundImage: 'linear-gradient(to right, #ffffff, #73f4d4,  #defafe, #cffcf1,#00d9f5)'}
  }  

  return (
    <>
      <Router>
        <Navbar SetBackgroundColors={SetBackgroundColors} themeArr={themeArr} mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/" element={<Card mode={mode} data={data} toggleMode={toggleMode} myStyle={myStyle} cardStyle={cardStyle} />} />
          <Route path="/random" element={<Random mode={mode} toggleMode={toggleMode} myStyle={myStyle} cardStyle={cardStyle} />} />
          <Route path="/faqs" element={<Faqs faqsList={faqsList} />} />
          {/* <Route path="/faqs" element={<h1>hello</h1>} /> */}
          {/* <Route path="/digitaltimer" element={<DigitalTimer/>} /> */}
        </Routes>
      </Router>
    </>

  );
}

export default App;
