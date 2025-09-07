import React,{useState} from 'react'
function App(){
  
  const [data,setData] = useState ({
    name:"",
    email:""
  })

 const HandleChange=(e)=>{
   console.log(e.target.value);
   console.log(e.target.value);
   setData((prev) => {
  return {
    ...prev,
    [name]: value,
  };
});
   
 }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(data);
  }
  return (
    <div>
  <form onSubmit={handleSubmit}>
     <label> Enter name :</label>
    <input type='text' name='name' placeholder="Enter you Name:"  onChange = { HandleChange} value = {data.name}></input>

         <label> Enter email:</label>
    <input type='text' name='email' placeholder="Enter you email:" onChange = { HandleChange} value = {data.email}></input>
  
  
  </form>
    </div>
    )
}
export default App;

// Fiz the code.
