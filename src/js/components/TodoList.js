import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;
import Todo from "./Todo"

const TodoList = React.createClass({
  render() {
    let { todos } = this.props;
    if(todos.length === 0){
      return (
        <p className="vide">Rien a completer pour le moment</p>
      );
    }
   let renderTodos = () => {
     return todos.map( todo => {
       return (
         <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
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
