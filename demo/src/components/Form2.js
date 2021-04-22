import { Component } from "react";
import ListLI from "./components/ListLI";
class Form2 extends Component{
    constructor(){
        super();
        this.state = {data:"",message: "",valuelist:{}};
        this.doKey = this.doKey.bind(this);
        //this.sayHi = this.sayHi.bind(this);
    }
    doKey(event){
        this.setState({data: event.target.value});
    }
    sayHi(){
        this.setState({message: "Hello "+this.state.data});
        this.setState({message: this.state.data});
        //this.props.onSayHi(this.state.data);
    }

    render(){
        return (
            <div>
                <input type="text" onChange={this.doKey}  />
                <button onClick={() => this.sayHi() }>Show It !</button>
                <p>{this.state.data}</p>
                <p>{this.state.message}</p>
                <ListLI users={this.state.valuelist} />
            </div>

        );

    }
}

export default Form2;