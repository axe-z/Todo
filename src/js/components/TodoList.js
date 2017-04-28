import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;

let { connect } = require('react-redux');
import Todo from "./Todo"

let TodoAPI = require('./../api/TodoAPI');



export let TodoList = React.createClass({
  render() {
    let { todos, showCompleted, searchText } = this.props;

     let renderTodos = () => {
    //   console.log(todos.map((todo) =>  todo.id))
    //   console.log(TodoAPI.filterTodos(todos, showCompleted, searchText))
    if(todos.length === 0){
      return (
        <p className="vide">|<span className="titre">000</span>Rien a completer pour le moment<span className="titre">000</span>| </p>
      );
    }
 
          return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
            return (
              <Todo key={todo.id} {...todo}/>
            );
          });
        };
    return (
   <div>
     {renderTodos()}
   </div>
    )
  }
});


//export default TodoList

export default connect(   ///connect, a pour seul arg, state, qui a tout lui. mais on passe juste les todos.
  (state) => {
   return state           //revient a la meme chose que les 3 en bas
    //  {  //
    //   // todos: state.todos,        ///les trois sont le complet en return seulement state
    //   // showCompleted: state.showCompleted,
    //   // searchText: state.searchText
    // }
  }
)(TodoList)  //a quoi connect donne l acces a todos.
