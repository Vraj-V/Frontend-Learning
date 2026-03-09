import React,{useState} from "react";
import './Quiz.css'
import {Link, useNavigate} from 'react-router-dom'
import {data} from '../../assets/data';
import Submit from "./Submit";

const Quiz = ()=>{
    const [index,setIndex] = useState(0);
    const [question,setQuestion] = useState(data[index]);
    const [answer,setAnwer] = useState(0)
    const navigate = useNavigate();

    const checkAns =(e,ans) =>{
        if(question.ans === ans){
            e.target.classList.add("correct");
            setAnwer(answer+1);
        }else{
            e.target.classList.add("wrong");
            alert("Wrong answer");
            let li = document.querySelectorAll("li");
            li.forEach((li)=>{
                li.classList.remove("correct");
                li.classList.remove("wrong");
            })
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

    const handleSubmit =()=>{
        navigate('/answer')
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
            <button onClick={index === 4 ? handleSubmit : pagination}>{index === 4 ? <Link to="/answer" data={answer} className="link">Submit</Link> : "Next"}</button>
            <div className="index"> Question {index+1} of 5 Questions</div>
            </div>
        </>
    )
}


export default Quiz;