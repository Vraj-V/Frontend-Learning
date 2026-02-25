import React from 'react';
import { useState } from 'react'

function App() {
  const [user,setUser]= useState({
    Name: '',
    Email:''
  })
  const [list,setList] =useState([]);
  
  const handleChange=(e)=>{
    const {name,value} = e.target;
    setUser(prev=>{
      return{
        ...prev,
      [name]: value
    }} )
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(user);
    setList(prev=> prev,(user));
    setUser({Name:'',Email:''})
    console.log(list);
  }

  return (
    <div >
      <h1 >Hello, World!</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="Name" placeholder="your name" value={user.Name} onChange={handleChange}></input>
        
        
        <label>Email:</label>
        <input name="Email" placeholder="your name" value={user.Email} onChange={handleChange}></input>
        
        <button type ="submit" onClick={handleSubmit}>Click </button>
      </form>
      
    </div>
  )
}

export default App
