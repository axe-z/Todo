import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;
let { connect } = require('react-redux');
//import Todo from "./Todo"
let Todo = require("./Todo")

//TODOLIST, EST LA LISTE DE TOUS LES TACHES.

let TodoList = React.createClass({
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
         <Todo key={todo.id} {...todo} /*onToggle={this.props.onToggle}*//>
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


//export default TodoList
///on donne a todolist , les todos.
module.exports = connect(   ///connect, a pour seul arg, state, qui a tout lui. mais on passe juste les todos.
  (state) => {
    return {
      todos: state.todos
    }
  }
)(TodoList)  //a quoi connect donne l acces a todos.
