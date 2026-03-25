import React, { useState, useEffect, useRef } from 'react'

const UseRefs = () => {
  const [count,setCount] = useState("vraj");

  const refvalue  = useRef(0);

  useEffect(()=>{
    refvalue.innerHTML = 'vivek'
    console.log(refvalue.innerHTML)
  })

//in useState it fire re-render every time the state change


  // useEffect(()=>{
  //   setCount( count + 1);
  // },[count])


  // but we wamt to fire re-render only once and using useRef

  return (
    <div style={{display:'flex' ,justifyContent:'center', alignContent:'end'}}>
      <h1 ref={refvalue
}>  
      
      {count}
      </h1>
    </div>
  )
}

export default UseRefs