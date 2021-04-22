import { Component } from "react";
import Form2 from "./components/Form2";
import TodoList from "./components/TodoList";
import Count from "./components/Count";
class Quiz extends Component {

 todos = [
  ];

  constructor() {
    super();
    this.state = { todos: [] };
    this.xyz = this.xyz.bind(this);
    this.clickTodo = this.clickTodo.bind(this);
    var index = 0
  }

  // Callback
 
  xyz(input) {
    this.index = input.id + 1
    this.todos.push( { id: this.index, name: input, isdone: false } )
    this.setState({ todos: this.todo });
    
  }

  clickTodo(todo){
    if (todo.isdone) {
        todo.isdone = false 
    }else{
        todo.isdone = true 
    }
    this.todos[todo.id] = todo
    this.setState({ todos: this.todo });
  }

  render() {
    return (
      <div>
        <Form2 onSayHi={this.xyz} />
        <Count todos={this.todos}/>
        <TodoList todos={this.todos} clickTodo = {this.clickTodo}/>
      </div>
    );
  }
}

export default Quiz;