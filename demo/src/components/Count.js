import { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.todos.filter(
        todo => todo.isdone ===  false
      );
    const all = this.props.todos.length;
    return (
      <p>
        {data.length} remaining out of {all} tasks
      </p>
    );
  }
}

export default Count;