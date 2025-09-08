import React,{Component} from 'react'
import './style.css'
class Styling extends Component{
    constructor(props){
        super(props)
        this.state={
            activate:false
        }
    }
    changeColor = () =>{
        this.setState({
            activate:true
        })

    }
 
    render(){
        //  change the color using inline css and by declare object
            let obj= {
            color:'red',
            backgroundColor:'yellow'
            }
        
            // change the color using inline css and by declare object and using state
        if(this.state.activate){
            obj.backgroundColor="blue",
            obj.fontSize="50px"
            // obj.position="relative",
            // obj.marginTop="100px",
            // obj.marginLeft="100px"
        }

        // change the color from external css file style.css
        let x = this.props.check? 'color':'back';
        return(
        <div>
            <h1 className={x}> Hello Everyone some</h1>
            <button style={obj} onClick={this.changeColor}>Click here</button>
        </div>
        )
}
}

export default Styling