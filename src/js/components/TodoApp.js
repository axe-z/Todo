import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;
import uuid from 'node-uuid';

import AddTodo from "./AddTodo"
import Todo from "./Todo"
import TodoList from "./TodoList"
import Search from "./Search"
let TodoAPI = require('../api/TodoAPI');

const TodoApp = React.createClass({
  getInitialState(){
    return {
      showCompleted: false,  ///pas de crochet
      searchText: '',
      todos: TodoAPI.getTodos()

    }
  },
  componentDidUpdate(){
    TodoAPI.setTodos(this.state.todos)
  },
  componentDidMount(){  ///est semblable a componentWillMount, will ne trouveras pas le node
    let node =  findDOMNode(this);  ///retourne tout le div.
    TweenMax.set(node, { filter: 'blur(0px)'})
    var tl = new TimelineMax({paused: true});
    tl.from(node,2,{  opacity: 0,  x:  -10,  delay: 1,  filter: 'blur(2px)', y: 300, scale: 2, ease: Expo.easeOut
  }).play()
 },
  handleAddTodo(text){  //passe par addtodo
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    })
  },
  handleToggle(id){    ///passe par toto et todolist
  // console.log(id)
   let updatedTodos = this.state.todos.map((todo) => {
       if(todo.id === id ){
         todo.completed = !todo.completed
       }
     return todo;
   })
   this.setState({
     todos: updatedTodos
   })
  },
  handleSearch(showCompleted,searchText){ ///passe par search
    console.log(showCompleted,searchText)
    this.setState({
      showCompleted: showCompleted,  ///on fait ca pour le mettre sur le state, et pouvoir l utiliser ailleurs
      searchText: searchText.toLowerCase()  ///on fait ca pour le mettre sur le state, et pouvoir l utiliser ailleurs
    })
  },
  render() {
let { todos } = this.state
    return (
      <div className="component ">
        <div className="apptodo">
          <h2>AXEZIVITÉS</h2>
          <Search onSearch={this.handleSearch}/>
          <TodoList todos={todos} onToggle={this.handleToggle}/>
          <AddTodo onAddTodo={this.handleAddTodo}/>
        </div>
      </div>
    )
  }
});

export default TodoApp
