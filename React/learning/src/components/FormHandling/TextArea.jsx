import React, { useState } from 'react'

const TextArea = () => {
   const [textArea, setTextArea] = useState('');

   const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(e.target[0].value);
   }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label style={{verticalAlign:"top"}}>Comment</label>
            <textarea rows='3' cols='50'
                value={textArea}
                onChange={(e)=>setTextArea(e.target.value)
            }
        ></textarea>
        <button>Submit</button>
        </form>
    </div>
  )
}

export default TextArea