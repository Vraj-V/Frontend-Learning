import React from 'react'
import Styling from './components/Styling.jsx';

function App() {
  const hello =(name)=>{
    alert("Hello, World!"  +name);
  }
  return (
    <div>
      <button onClick={()=> hello("vivek")}>click</button>
 </div>
  )
}

export default App
