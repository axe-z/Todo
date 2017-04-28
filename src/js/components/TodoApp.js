import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;
import uuid from 'node-uuid';
import moment from 'moment';
import momentFr from '../api/momentFr';

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
      todos: TodoAPI.getTodos(),


    }
  },
  componentDidUpdate(){
    TodoAPI.setTodos(this.state.todos)

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
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    })
  },
  // handleToggle(id){    ///passe par todo et todolist
  // // console.log(id)
  //  let updatedTodos = this.state.todos.map((todo) => {
  //      if(todo.id === id ){
  //        todo.completed = !todo.completed
  //        todo.completedAt =  todo.completed ? moment().unix() : undefined
  //      }
  //    return todo;
  //  })
  //  this.setState({
  //    todos: updatedTodos
  //  })
  // },
  handleSearch(showCompleted,searchText){ ///passe par search

    this.setState({
      showCompleted: showCompleted,  ///on fait ca pour le mettre sur le state, et pouvoir l utiliser ailleurs
      searchText: searchText.toLowerCase()  ///on fait ca pour le mettre sur le state, et pouvoir l utiliser ailleurs
    })
    //  console.log(showCompleted,this.state.searchText)
  },
  render() {
      let { todos, showCompleted, searchText, completedAt } = this.state
      let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
    return (

      <div className="component ">
        <div className="apptodo">
          <h4>| <span className="titre">000</span>  A X E Z I V I T É S  <span className="titre">000</span>  |</h4>
          <Search onSearch={this.handleSearch} />
          <hr />
          <TodoList /*todos={filteredTodos} onToggle={this.handleToggle}*//>  {/*pu besoin de donner le data a todo.js  */}
          <hr />
          <br />
          <AddTodo onAddTodo={this.handleAddTodo}/>
        </div>
      </div>

    )
  }
});

export default TodoApp






///AVANT REDUX
// const TodoApp = React.createClass({
//   getInitialState(){
//     return {
//       showCompleted: false,  ///pas de crochet
//       searchText: '',
//       todos: TodoAPI.getTodos(),
//
//
//     }
//   },
//   componentDidUpdate(){
//     TodoAPI.setTodos(this.state.todos)
//
//   },
//   componentDidMount(){  ///est semblable a componentWillMount, will ne trouveras pas le node
//     let node =  findDOMNode(this);  ///retourne tout le div.
//     TweenMax.set(node, { filter: 'blur(0px)'})
//     var tl = new TimelineMax({paused: true});
//     tl.from(node,2,{  opacity: 0,  x:  -10,  delay: 1,  filter: 'blur(5px)', y: 100, scale: 1.6, ease: Expo.easeOut
//   }).play()
//  },
//   handleAddTodo(text){  //passe par addtodo
//     this.setState({
//       todos: [
//         ...this.state.todos,
//         {
//           id: uuid(),
//           text: text,
//           completed: false,
//           createdAt: moment().unix(),
//           completedAt: undefined
//         }
//       ]
//     })
//   },
//   handleToggle(id){    ///passe par todo et todolist
//   // console.log(id)
//    let updatedTodos = this.state.todos.map((todo) => {
//        if(todo.id === id ){
//          todo.completed = !todo.completed
//          todo.completedAt =  todo.completed ? moment().unix() : undefined
//        }
//      return todo;
//    })
//    this.setState({
//      todos: updatedTodos
//    })
//   },
//   handleSearch(showCompleted,searchText){ ///passe par search
//
//     this.setState({
//       showCompleted: showCompleted,  ///on fait ca pour le mettre sur le state, et pouvoir l utiliser ailleurs
//       searchText: searchText.toLowerCase()  ///on fait ca pour le mettre sur le state, et pouvoir l utiliser ailleurs
//     })
//       console.log(showCompleted,this.state.searchText)
//   },
//   render() {
//       let { todos, showCompleted, searchText, completedAt } = this.state
//       let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
//     return (
//
//       <div className="component ">
//         <div className="apptodo">
//           <h4>A X E Z I V I T É S</h4>
//           <Search onSearch={this.handleSearch} />
//           <hr />
//           <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
//           <hr />
//           <br />
//           <AddTodo onAddTodo={this.handleAddTodo}/>
//         </div>
//       </div>
//
//     )
//   }
// });
