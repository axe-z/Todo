import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;
import Todo from "./Todo"

const TodoList = React.createClass({
  render() {
    let { todos } = this.props;
   let renderTodos = () => {
     return todos.map( todo => {
       return (
         <Todo key={todo.id} {...todo}/>
       );
     });
   }
    return (
   <div>
     {renderTodos()}
   </div>
    )
  }
});

export default TodoList
