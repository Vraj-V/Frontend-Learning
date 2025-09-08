import React, { useContext } from 'react'
import { NameContext } from '../../main.jsx'

const CompC = () => {
  const user = useContext(NameContext)
  return (
    <div>
        <h1>This is CompC</h1>
        <h2>Hello {user} </h2>
    </div>
  )
}

export default CompC