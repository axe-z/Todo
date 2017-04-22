import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;



const AddTodo = React.createClass({
  onSubmitTodo(e){
   e.preventDefault();
   let afaire = this.refs.todoText.value;
   if(afaire && afaire.length >= 5 ){
     this.props.onAddTodo(afaire)
     this.refs.todoText.value = '';
   } else if(afaire && afaire.length < 5){

     this.refs.todoText.value = 'activite trop courte'
 
   }
  },
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitTodo} >
          <input ref='todoText' className="search" type="text" placeholder="entrer une nouvelle activite"/>
          <br />
          <button className="submit">Enregistrer</button>
        </form>
      </div>
    )
  }
});

export default AddTodo
