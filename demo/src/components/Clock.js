import { Component } from "react";

class Clock extends Component{
    constructor(){
        super();
        this.state = {date:new Date()};
    }

    componentDidMount(){
       this.interval = setInterval(() => {
            this.setState({date:new Date()});
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        return <p>Current Date = {this.state.date.toLocaleString()}</p>;
    }
}
export default Clock;
