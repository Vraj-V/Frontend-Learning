import React, { useState } from 'react'

const Toggle = () => {
    const [toggle,setToggle] = useState("false");

    const handleClick=()=>{
        if(toggle ==="false"){
            setToggle("true");
        }else{
            setToggle("false")
        }
        console.log(toggle)
    }
  return (
    <div className='main'  style={{backgroundColor : `${toggle ==="false" ? "white":"black"}`, height:"100vh"}}>
        <h1 className='title' style={{color: `${toggle ==="false" ? "black":"white"}`}}>{toggle === 'false' ? "White" : "Dark"}</h1>
        <button className='btn' onClick={handleClick}>Toggle</button>
    </div>
  )
}

export default Toggle