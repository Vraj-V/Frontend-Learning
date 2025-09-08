import React, { useState, useEffect} from 'react'

const UseArray = () => {

    let num =[1,24,5,55,454,541,11];
    const [numbers,setNumbers] = useState(num);


    

    const changeState  =()=>{
        // setNumbers([12,231,1231,2312]) // replace the array
        // setNumbers([...numbers,12,231,1231,2312]) // add to the array

        // setNumbers(numbers.filter((n) => n!==5)) // remove specific number
        
        // setNumbers(numbers.filter((n) => n%2===0)) // remove odd number
        // setNumbers(numbers.filter((n)=> n%2 !==0)) // remove even number

        setNumbers(previousState => {
            return [
                ...previousState,
                Math.floor(Math.random()*100)
            ];
        })
        // Above state add random number to the array
    }
  return (
    <>
    <div>
        <ul className={"background"}>
            {numbers.map((n,i) => <li key={i}>{n}</li>)}
        </ul>
        <button className={"button"} onClick={changeState}>random Number</button>
            </div>
  </>
  )
}

export default UseArray