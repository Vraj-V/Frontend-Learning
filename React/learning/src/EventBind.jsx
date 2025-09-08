import React,{Component} from 'react'
class EventBind extends Component{
    constructor(){
        super();
        this.state = {
            name: 'Raj'
        };

        this.HandleEvent = this.HandleEvent.bind(this);
    }

    HandleEvent(){
        this.setState({
            name: 'Vijay'
        })
    }


    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.HandleEvent}>Click Me</button>
            </div>
        )
    }
}

export default EventBind;