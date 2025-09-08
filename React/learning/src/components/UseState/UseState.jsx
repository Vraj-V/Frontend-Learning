import React,{useState} from 'react'
import './style.css'
const UseState = () => {
    // here we have declare the useState and it return the array
    // first index is the variable and second index is the function which update the variable
    // we can also use array destructuring to get the value
        // const myName = useState("vraj")

    const [name,setName] = useState("vraj-valand")

    const state=() => {
        setName("vivek")}
  return (
    <>
    <div className={"color"}>{name}</div>
    <button onClick={state}>Click</button>
    </>
  )
}

export default UseState