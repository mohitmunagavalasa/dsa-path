import React from 'react'
import Problem from './Problem';

export default function Card(props) {
    // console.log(props.myStyle)
    // const myStyle = (props.mode==="dark") ? props.myStyle : {}
    // const cardStyle = (props.mode === "dark") ? props.cardStyle : {}
    const myStyle = props.myStyle
    const cardStyle = props.cardStyle
    const data = props.data
    console.log(data)
    return (
        <div style= {{...myStyle, padding:"20px", minHeight:"100vh"}} className='my-0'>
        <div className='container'>
            {/* <div className="accordion" id={`accordionExample${1}`}> */}
            {data.map((eachItem) => {
                // console.log(eachItem)
                return (
                    <div className="accordion m-3" id={`accordionExample${1}`}>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id={`heading${eachItem.id}`} >
                            <button style={{...myStyle, ...cardStyle}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${eachItem.id}`} aria-expanded="true" aria-controls={`#collapse${eachItem.id}`}>
                                {`#Day${eachItem.id}: ${eachItem.topic}`}
                            </button>
                        </h2>
                        <div id={`collapse${eachItem.id}`} style={myStyle} className="accordion-collapse collapse" aria-labelledby={`heading${eachItem.id}`} data-bs-parent={`accordionExample${eachItem.id}`}>
                            <div className="accordion-body">
                                <Problem myStyle={props.myStyle} cardStyle={props.cardStyle} problemData={eachItem} mode={props.mode} toggleMode={props.toggleMode}/>
                            </div>
                        </div>
                    </div>
                    </div>
                )
            })}
            {/* </div> */}
        </div>
        </div>




        // <div className='container my-5'>
        //     <div className="accordion" id={`accordionExample${eachItem.id}`}>
        //         <div className="accordion-item">
        //             <h2 className="accordion-header" id="headingOne">
        //                 <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        //                     #Day1: Math Basics 
        //                 </button>
        //             </h2>
        //             <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        //                 <div className="accordion-body">
        //                     <div className="accordion" id={"accordionExample1"}>
        //                         <div className="accordion-item">
        //                             <h2 className="accordion-header" id="headingOneone">
        //                                 <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseOneone"} aria-expanded="true" aria-controls={"collapseOneone"}>
        //                                     Count Digits
        //                                 </button>
        //                             </h2>
        //                             <div id={"collapseOneone"} className="accordion-collapse collapse" aria-labelledby={"headingOneone"} data-bs-parent={"#accordionExample1"}>
        //                                 <div className="accordion-body">
        //                                     {/* <h6>Count Digits</h6> */}
        //                                     <p>Given a number n. Count the number of digits in n which evenly divide n. Return an integer, total number of digits of n which divides n evenly.</p>
        //                                     <ul>
        //                                         <li><h6>Learn: <a href="https://www.youtube.com/watch?v=1xNbjMdbjug&feature=youtu.be" target="_blank">Concept</a></h6></li>
        //                                         <li><h6>Article: <a href="https://takeuforward.org/data-structure/count-digits-in-a-number/" target="_blank"><i className="fa-regular fa-file"></i> Doc</a></h6></li>
        //                                         <li>
        //                                             <h6>Practice:</h6>
        //                                             <div className="flex flex-row justify-content-center">
        //                                                 <a href="https://www.geeksforgeeks.org/problems/count-digits5716/1" className='m-1'><button type="button" className="btn btn-outline-secondary btn-sm">GFG</button></a>
        //                                                 <a href="https://www.naukri.com/code360/problems/count-digits_8416387" className='m-1'><button type="button" className="btn btn-outline-secondary btn-sm">code 360</button></a>
        //                                             </div>
        //                                         </li>
        //                                     </ul>    
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>





        // <div className='container m-3'>
        //     <div className="accordion" id={`accordionExample${eachItem.id}`}>
        //         <div className="accordion-item">
        //             <h2 className="accordion-header" id="headingOne">
        //                 <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        //                     Accordion Item #1
        //                 </button>
        //             </h2>
        //             <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        //                 <div className="accordion-body">
        //                     <div className="accordion" id={"accordionExample1"}>
        //                         <div className="accordion-item">
        //                             <h2 className="accordion-header" id="headingOneone">
        //                                 <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseOneone"} aria-expanded="true" aria-controls={"collapseOneone"}>
        //                                     Accordion Item #1
        //                                 </button>
        //                             </h2>
        //                             <div id={"collapseOneone"} className="accordion-collapse collapse" aria-labelledby={"headingOneone"} data-bs-parent={"#accordionExample1"}>
        //                                 <div className="accordion-body">
        //                                     hi 
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>


        // working 
        // <div className='container m-3'>
        //     <div className="accordion" id={`accordionExample${eachItem.id}`}>
        //         <div className="accordion-item">
        //             <h2 className="accordion-header" id="headingOne">
        //                 <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        //                     Accordion Item #1
        //                 </button>
        //             </h2>
        //             <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        //                 <div className="accordion-body">
        //                     <div className="accordion" id={"accordionExample1"}>
        //                         <div className="accordion-item">
        //                             <h2 className="accordion-header" id="headingOneone">
        //                                 <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapseOneone"} aria-expanded="true" aria-controls={"collapseOneone"}>
        //                                     Accordion Item #1
        //                                 </button>
        //                             </h2>
        //                             <div id={"collapseOneone"} className="accordion-collapse collapse" aria-labelledby={"headingOneone"} data-bs-parent={"#accordionExample1"}>
        //                                 <div className="accordion-body">
        //                                     {/* <h6>Count Digits</h6> */}
        //                                     <p>Given a number n. Count the number of digits in n which evenly divide n. Return an integer, total number of digits of n which divides n evenly.</p>
        //                                     <h6>solve in:</h6>
        //                                     <div className="flex flex-row justify-content-center">
        //                                         <a href="https://www.geeksforgeeks.org/problems/count-digits5716/1" className='m-1'><button type="button" className="btn btn-outline-secondary btn-sm">GFG</button></a>
        //                                         <a href="https://www.naukri.com/code360/problems/count-digits_8416387" className='m-1'><button type="button" className="btn btn-outline-secondary btn-sm">code 360</button></a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

    )
}
