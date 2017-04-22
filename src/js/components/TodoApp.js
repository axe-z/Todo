import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;

import AddTodo from "./AddTodo"
import Todo from "./Todo"
import TodoList from "./TodoList"
import Search from "./Search"

const TodoApp = React.createClass({
  getInitialState(){
    return {
      todos: [
        {
          id: 1,
          text: 'Donner a manger a Sardgio'
        },
        {
          id: 2,
          text: 'Sortir les vidanges le Jeudi soir'
        },
        {
          id: 3,
          text: 'Apprendre React'
        },
        {
          id: 4,
          text: 'Vivre la solitude completement'
        },
        {
          id: 5,
          text: 'Canadiens vs Rangers sur TVA'
        },
      ]
    }
  },
  componentDidMount(){  ///est semblable a componentWillMount, will ne trouveras pas le node
    let node =  findDOMNode(this);  ///retourne tout le div.
    TweenMax.set(node, { filter: 'blur(0px)'})
    var tl = new TimelineMax({paused: true});
    tl.from(node,2,{
      opacity: 0,  x:  -10,  delay: 0.9,  filter: 'blur(5px)', rotationY: 0, y: 300, scale: 2, ease: Expo.easeOut
    }).play()
 },
  render() {

let { todos } = this.state
    return (
      <div className="component">
        <h1>Todo App</h1>

        <TodoList todos={todos}/>

      </div>
    )
  }
});

export default TodoApp
