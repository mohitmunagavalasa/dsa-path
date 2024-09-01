import React, { useState } from 'react'
import data from './Data'
import Card from './Card'
// import { v4 as uuidv4 } from 'uuid'


export default function Random(props) {

    // const [selectValue, setSelectValue] = useState(1);
    
    const dataLength = data.length

    const topicIndex = Math.floor(Math.random() * dataLength)
    const topicDetails = data[topicIndex]
    const questionIndex = Math.floor(Math.random() * (data[topicIndex]["questions"].length))
    const eachItem = data[topicIndex]["questions"][questionIndex]

    const [problemData, setProblemData] = useState([{ ...topicDetails, questions: [eachItem] }]);
    

    const onChangeSelect = (event) => {
        const problemData1 = []
        const problemId = []
        // console.log(selectValue)
        const value = parseInt(event.target.value);
        console.log(value);
        // setSelectValue(value);
        
        // console.log(selectValue);
        for (let i = 0; i < 1000; i++) {
            // console.log(i + "hi" + typeof value + " " + typeof problemId.length)
            if (value === problemId.length){ break;}
            const topicIndex = Math.floor(Math.random() * dataLength)
            if (problemId.indexOf(topicIndex) === -1) {
                console.log(problemId)
                problemId.push(topicIndex)

                const topicDetails = data[topicIndex]
                const questionIndex = Math.floor(Math.random() * (data[topicIndex]["questions"].length))
                const eachItem = data[topicIndex]["questions"][questionIndex]
                problemData1.push({ ...topicDetails, questions: [eachItem] })
            }
        }
        setProblemData(problemData1)
    };


    // uuid concept - total update 


    const myStyle = props.myStyle 
    const textStyle = (props.mode === "dark") ? "text-light" : ""

    return (
        <div className='p-3' style={{ ...myStyle, minHeight: "100vh" }}>
            {/* <Problem myStyle={props.myStyle} cardStyle={props.cardStyle} problemData={problemData} mode={props.mode} toggleMode={props.toggleMode}/> */}
            <div className='d-flex flex-row justify-content-center align-items-center'>
                <h3 className={`text-center mx-3 ${textStyle}`}>Test Your Problem solving Skills</h3>
                <form>
                    <div className="form-row align-items-center">
                        <div className="col-auto my-1">
                            <label className={`mr-sm-2 ${textStyle}`} for="inlineFormCustomSelect">No of codes</label>
                            <select onChange={onChangeSelect} className="custom-select mr-sm-2 mx-1" id="inlineFormCustomSelect">
                                <option value="1" selected>One</option>
                                {/* <option value="1">One</option> */}
                                <option value="3">Three</option>
                                <option value="5">Five</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
            <Card mode={props.mode} data={problemData} toggleMode={props.toggleMode} myStyle={props.myStyle} cardStyle={props.cardStyle} />
        </div>
    )
}
