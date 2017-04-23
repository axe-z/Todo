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
        //  this.setState({
        //    todos: TodoAPI.filterTodos(todos, showCompleted, searchText)
        //  })
  },
  componentDidMount(){  ///est semblable a componentWillMount, will ne trouveras pas le node
    let node =  findDOMNode(this);  ///retourne tout le div.
    TweenMax.set(node, { filter: 'blur(0px)'})
    var tl = new TimelineMax({paused: true});
    tl.from(node,2,{  opacity: 0,  x:  -10,  delay: 1,  filter: 'blur(5px)', y: 100, scale: 1.6, ease: Expo.easeOut
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

    this.setState({
      showCompleted: showCompleted,  ///on fait ca pour le mettre sur le state, et pouvoir l utiliser ailleurs
      searchText: searchText.toLowerCase()  ///on fait ca pour le mettre sur le state, et pouvoir l utiliser ailleurs
    })
      console.log(showCompleted,this.state.searchText)
  },
  render() {
      let { todos, showCompleted, searchText } = this.state
      let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    return (
      <div className="component ">
        <div className="apptodo">
          <h2>AXEZIVITÉS</h2>
          <Search onSearch={this.handleSearch}/>
          <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
          <AddTodo onAddTodo={this.handleAddTodo}/>
        </div>
      </div>
    )
  }
});

export default TodoApp
