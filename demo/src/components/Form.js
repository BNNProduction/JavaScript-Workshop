import { Component } from "react";

class Form extends Component{
    constructor(){
        super();
        this.state = {data:"",message: ""};
        this.doKey = this.doKey.bind(this);
        //this.sayHi = this.sayHi.bind(this);
    }
    doKey(event){
        this.setState({data: event.target.value});
    }
    sayHi(){
        //this.setState({message: "Hello "+this.state.data});
        this.props.onSayHi(this.state.data);
    }

    render(){
        return (
            <div>
                <input type="text" onChange={this.doKey}  />
                <button onClick={() => this.sayHi() }>Show It !</button>
                <p>{this.state.data}</p>
                <p>{this.state.message}</p>
            </div>

        );

    }
}

export default Form;