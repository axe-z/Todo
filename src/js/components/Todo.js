import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;



const Todo = React.createClass({
  render() {
 let { id, text } = this.props

    return (
      <div>
        <h4><span>{id} . </span> {text}</h4>
      </div>
    )
  }
});

export default Todo
