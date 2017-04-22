import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;



const Todo = React.createClass({
  render() {
 let { id, text, completed } = this.props

    return (
      <div className="millieu"/* onClick={() => {    //au lieu de faire un function en haut de render, qui va envoyer a todoapp onToggle,
        this.props.onToggle(id)  //on fait une simple fn sans nom. ca marche aussi, on aurait pu faire une fn aussi.
        }}*/>
        <label className='todo'>
          <input type="checkbox" checked={completed}  onChange={() => {    //au lieu de faire un function en haut de render, qui va envoyer a todoapp onToggle,
            this.props.onToggle(id)  //on fait une simple fn sans nom. ca marche aussi, on aurait pu faire une fn aussi.
          }}/>
          {text}
        </label>
        {/* <p>{text}</p> */}
      </div>
    )
  }
});

export default Todo
