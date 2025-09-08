import React,{Component} from "react";
import ChildComponent from "./ChildComponent.jsx";

class ParentComponent extends Component{
    
        ParentMethod = (childName)=>{
            alert("Hello from parent! " + childName)
        }
    
    render(){
        return(
            <div>
                <h1>Parent Component</h1>
                <ChildComponent callMethod={this.ParentMethod} />
            </div>
        )
    }
}
export default ParentComponent;