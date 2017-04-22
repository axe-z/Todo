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

export default AddTodo
