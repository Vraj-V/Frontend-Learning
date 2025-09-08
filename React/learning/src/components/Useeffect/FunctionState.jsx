import React, { useEffect } from 'react'

const FunctionState = () => {

    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('Vraj')
// 1# useEffect mutliple time call
            // useEffect is a function that is called after every render
            // it is called after every update
            // it is called after the first render
            // it is called after every state change

    // program :
                // useEffect(() => {
                //     console.log('UseEffect called')
                // })

// 2# useEffect single time call
                // useEffect is a function that is called only once
                // it is called only after the first render
                // it is called only once
                // it is called only once when the component is mounted
                // it is called only once when the component is created
                // it is called only once when the component is added to the DOM
    // program :
                            // useEffect(()=>{
                            //     console.log('UseEffect called only once', count)
                            // },[])

// 3# useEffect call when state change
                // useEffect is a function that is called only when the state changes
                // it is called only when the state changes
                // it is called only when the state changes
                // it is called only when the state changes
    // program :
                            // useEffect(()=>{
                            //     console.log('UseEffect called only when state change', count)
                            // },[count])

// 4# using two state in useEffect
                // useEffect is a function that is called only when the state changes
                // it is called only when the state changes
                // it is called only when the state changes
                // it is called only when the state changes
// program :
            useEffect(()=>{
                console.log('UseEffect called only when state change', count)
            },[count])

// 5# different state change in useEffect
                // useEffect is a function that is called only when the state changes
                // it is called only when the state changes
                // it is called only when the state changes
                // it is called only when the state changes
// program :
            useEffect(()=>{
                console.log('UseEffect called only when state change', name)
            },[name])

    return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <h1>{name}</h1>
        <button onClick={() => setName("Vivek")}>Update</button>
    </div>
  )
}

export default FunctionState