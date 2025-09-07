import React,{useState} from 'react'
function MultiHandle(){
  const [Data,setData] = useState ({
    name:"",
    email:""
  })

 const HandleChange=(e)=>{
   console.log(e.target.value);
   console.log(e.target.value);
   setData=((prev)=>{
     return (
       ...prev,[e.target.value] : e.target.value;
       )
       })
 }
  const HandleSubmit=(e)=>{
    e.preventDefault();
    console.log(data);
  }
  return (
    <div>
  <form onsubmi={HandleSubmit}>
     <label> Enter name :</label>
    <input type='text' name='name' placeholder="Enter you Name:"  onChange = { HandleChange} value = {data.name}></input>

         <label> Enter email:</label>
    <input type='text' name='email' placeholder="Enter you email:" onChange = { HandleChange} value = {data.email}></input>
  
  
  </form>
    </div>
    )
}
export default MultiHandle();
