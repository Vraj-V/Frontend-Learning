    import React,{useState} from 'react'

    //   const Form = () => {
    //       const [name,setName] = useState("");
    //       const [email,setEmail] = useState("");
    //       const handleSubmit =(e)=>{
    //           e.preventDefault();
    //           console.log(name,email)
    //           setName('')
    //           setEmail('')

    //       }
    //     return (
    //       <div className='main'>
    //           <form action="" onSubmit={handleSubmit}>
    //               <div>
    //                   <label htmlFor="name">Name : </label>
    //                   <input type="text" name='name' value={name} onChange={(e)=>{
    //                       setName(e.target.value)
    //                   }}/>
    //               </div>
    //               <div>
    //                   <label htmlFor="email">Email : </label>
    //                   <input type="text" name='email' value={email} onChange={(e)=>{
    //                       setEmail(e.target.value)
    //                   }} />
    //               </div>
    //               <button className='btn'>Submit</button>
    //           </form>

    //       </div>
    //     )
    //   }

    //   export default Form



    const Form = () => {
        const [data,setData] = useState({
            name :'',
            email: ""
        })

        const handleChange=(e)=>{
            const {name,value} = e.target;

            setData(prev=> ({
                ...prev,
                [name]: value
            }))
        }

        const handleSubmit=(e)=>{
            e.preventDefault();
            console.log(data);
            setData({
                name :'',
                email: ""
            })
        }
    return (
    <div className='main'>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name : </label>
                    <input type="text" name='name' value={data.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email : </label>
                    <input type="text" name='email' value={data.email} onChange={handleChange}/>
                </div>
                <button className='btn'>Submit</button>
            </form>

        </div>
    )
    }

    export default Form;