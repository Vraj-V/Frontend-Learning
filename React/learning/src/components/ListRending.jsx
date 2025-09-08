import React from 'react'

const ListRending = () => {
    const studentNames = [
        {
            name: "Vraj",
            age:21
    },
    {
            name: "Vivek",
            age:11
    },
    {
            name: "Mansu",
            age:25
    },
]

const surname =["vraj ","vviek"]
  return (
    <div>
        {surname.map((sur,index)=> <h1 key={index}>{sur}</h1>)}
        {studentNames.map(std=><h1>My name is {std.name} and age is {std.age}</h1>)}
    </div>
  )

}

export default ListRending