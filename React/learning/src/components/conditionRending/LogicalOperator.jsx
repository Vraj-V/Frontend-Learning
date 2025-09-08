import React from 'react'

const LogicalOperator = () => {
    const name = "Rohan";
    const age = 20;
  return (
    <div>
        {name =="Rohan" && <h1>Hi Rohan</h1>}
        {age>18? <h1>You can vote</h1>: <h1>You cannot vote</h1>}
    </div>
  )
}

export default LogicalOperator