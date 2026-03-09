import { useState } from 'react'
import './App.css'
import Quiz from './components/Quiz/Quiz'
import { Routes,Route } from 'react-router-dom'
import Submit from './components/Quiz/Submit'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Quiz/>}/>
        <Route path='/answer' element={<Submit />}/>
      </Routes>
    </>
  )
}

export default App
