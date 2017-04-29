import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;
import _ from 'lodash';
//redux-example
var { connect } = require('react-redux');
var actions = require('../actions/actions')

export const AddTodo = React.createClass({
  onSubmitTodo(e){
   e.preventDefault();
   let { dispatch } = this.props;        ///va chercher le dispatch
   let todoText = _.capitalize(this.refs.todoText.value);
   if(todoText && todoText.length >= 5 ){
  // this.props.onAddTodo(afaire)
    dispatch(actions.startAddTodo(todoText))
     this.refs.todoText.value = '';
   } else if(todoText && todoText.length < 5){

     this.refs.todoText.value = 'activité trop courte'

   }
  },
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitTodo} >
          <input ref='todoText' className="search2" type="text" placeholder="entrer une nouvelle activité"/>
          <br />
          <button className="submit2">Enregistrer</button>
        </form>
      </div>
    )
  }
});

 //export default AddTodo
 export default connect()(AddTodo);
