import React,{useState} from "react";
import './Quiz.css'
const Quiz = ()=>{
    
    
    return(
        <>
            <div className="container">
                <h1>Quiz App</h1>
            <hr />
            <h2>What is sunday special?</h2>
            <ul>
                <li>Food</li>
                <li>game</li>
                <li>Party</li>
            </ul>
            <button>Next</button>
            <div className="index"> 1 of 5 Questions</div>
            </div>
        </>
    )
}


export default Quiz;