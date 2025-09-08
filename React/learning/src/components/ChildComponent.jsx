import React,{Component}from "react";
class ChildComponent extends Component{
    render(){
        return(
            <div>
                <button onClick={()=> this.props.callMethod("ROHIT")}>click</button>
            </div>
        )
    }
}
export default ChildComponent;