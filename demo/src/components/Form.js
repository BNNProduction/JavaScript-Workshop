import { Component } from "react";

class Form extends Component{
    constructor(){
        super();
        this.state = {data:"TEST"};
        this.doKey = this.doKey.bind(this);
    }
    doKey(event){
        this.setState({data: event.target.value})
    }

    render(){
        return (
            <div>
                <input type="text" onChange={this.doKey}  />
                <p>Hello : {this.state.data}</p>
            </div>

        );

    }
}

export default Form;