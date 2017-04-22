import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;
import uuid from 'node-uuid';

import AddTodo from "./AddTodo"
import Todo from "./Todo"
import TodoList from "./TodoList"
import Search from "./Search"

const TodoApp = React.createClass({
  getInitialState(){
    return {
      showCompleted: false,  ///pas de crochet
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Donner a manger a Sardgio'
        },
        {
          id: uuid(),
          text: 'Sortir les vidanges le Jeudi soir'
        },
        {
          id: uuid(),
          text: 'Apprendre React'
        },
        {
          id: uuid(),
          text: 'Vivre la solitude completement'
        },
        {
          id: uuid(),
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
  handleAddTodo(text){
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    })
  },
  handleSearch(showCompleted,searchText){
    console.log(showCompleted,searchText)
    this.setState({
      showCompleted: showCompleted,  ///on fait ca pour le mettre sur le state, et pouvoir l utiliser ailleurs
      searchText: searchText.toLowerCase()  ///on fait ca pour le mettre sur le state, et pouvoir l utiliser ailleurs
    })
  },
  render() {
let { todos } = this.state
    return (
      <div className="component">
        <h1>Todo App</h1>
        <Search onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

export default TodoApp
