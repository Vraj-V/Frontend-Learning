import React from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
function IfElse(){

    const name ="vraj"
    if(name== "Rohan"){
    return(
        <div>
            <h1>IF correct</h1>
            <Component1/>
        </div>
    )
    }else{
        return(
            <div>
                <h1>ELSE correct</h1>
                <Component2/>
            </div>
        )
    }
}
export default IfElse