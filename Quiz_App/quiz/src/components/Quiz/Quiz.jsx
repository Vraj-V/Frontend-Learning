import React,{useState} from "react";
import './Quiz.css'
import {data} from '../../assets/data';

const Quiz = ()=>{
    const [index,setIndex] = useState(0);
    const [question,setQuestion] = useState(data[index]);


    const checkAns =(e,ans) =>{
        if(question.ans === ans){
            e.target.classList.add("correct");
            setAnwer(ans);
        }else{
            e.target.classList.add("wrong");
           
        }
    }

    const pagination =()=>{
    
            setIndex(index+1);
            setQuestion(data[index+1]);
            let li = document.querySelectorAll("li");
            li.forEach((li)=>{
                li.classList.remove("correct");
                li.classList.remove("wrong");
            })
    }
    return(
        <>
            <div className="container">
                <h1>Quiz App</h1>
            <hr />
            <h2>{index+1} . {question.question} </h2>
            <ul>
                <li onClick={(e)=>{ checkAns(e,1)}}>{question.option1}</li>
                <li onClick={(e)=>{ checkAns(e,2)}}>{question.option2}</li>
                <li onClick={(e)=>{ checkAns(e,3)}}>{question.option3}</li>
                <li onClick={(e)=>{ checkAns(e,4)}}>{question.option4}</li>
            </ul>
            <button onClick={()=>{
                pagination()
            }}>Next</button>
            <div className="index"> 1 of 5 Questions</div>
            </div>
        </>
    )
}


export default Quiz;