
import React from 'react'

export default function Problem(props) {
    const parentId = props.problemData.id;
    const questions = props.problemData.questions;
    // console.log(parentId);
    // console.log(questions);
    const myStyle = (props.mode==="dark") ? props.myStyle :{}
    const cardStyle = (props.mode === "dark") ? props.cardStyle : {}
    // const myStyle = (props.mode==="dark") ? {backgroundColor:"#243748"} :{}
    // const myStyle = (props.mode === "dark") ? {backgroundColor:"#698cbf"}:{}

    const bulletStyle = (props.mode === "dark") ? {listStyleType: 'disc', color: 'white' } :{}  
    const btnStyle = (props.mode === 'dark') ? "" : "-outline"

    return (
        questions.map((eachItem) =>
            <>
                <div className="accordion m-3" id={`accordionExample${parentId}a${eachItem.id}`}>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id={`heading${parentId}a${eachItem.id}`}>
                            <button {...myStyle} {...cardStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${parentId}a${eachItem.id}`} aria-expanded="true" aria-controls={`collapse${parentId}a${eachItem.id}`}>
                                {eachItem.id}. {eachItem.title}
                            </button>
                        </h2>
                        <div id={`collapse${parentId}a${eachItem.id}`} style={myStyle} className="accordion-collapse collapse" aria-labelledby={`heading${parentId}a${eachItem.id}`} data-bs-parent={`#accordionExample${parentId}a${eachItem.id}`}>
                            <div className="accordion-body">
                                {/* <h6>Count Digits</h6> */}
                                <p className={`text-${props.mode === 'light'?'dark':'light'}`}>For problem statement visit below Coding Question link and practice it. Don't worry if you are not able to solve it, check vedio solution -`&gt;` understand properly -`&gt;` try it (Bruteforce, Better, Optimal Approach)</p>
                                <ul style={bulletStyle}>
                                    <li><h6 className={`text-${props.mode === 'light'?'dark':'light'}`}>Learn: <a href={`${eachItem.vedioLec}`} target="_blank"><i class="fa-brands fa-youtube"></i> Concept </a></h6></li>
                                    <li><h6 className={`text-${props.mode === 'light'?'dark':'light'}`}>Article: <a href={`${eachItem.article}`} target="_blank"><i className="fa-regular fa-file"></i> Doc</a></h6></li>
                                    <li>
                                        <h6 className={`text-${props.mode === 'light'?'dark':'light'}`}>Practice : <i class="fa-regular fa-keyboard"></i></h6>
                                        <div className="flex flex-row justify-content-center">
                                            {eachItem.leetcode !== "" && <a href={`${eachItem.leetcode}`} target="_blank" className='m-1'><button type="button" className={`btn btn${btnStyle}-warning btn-sm m-1`}>leetcode</button></a>}
                                            {eachItem.gfg !== "" && <a href={`${eachItem.gfg}`} target="_blank" className='m-1'><button type="button" className={`btn btn${btnStyle}-success btn-sm m-1`}>GFG</button></a>}
                                            {eachItem.codingNinjas !== "" && <a href={`${eachItem.codingNinjas}`} target="_blank" className='m-1'><button type="button" className={`btn btn${btnStyle}-secondary btn-sm m-1`}>code 360</button></a>}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    )

    
}
