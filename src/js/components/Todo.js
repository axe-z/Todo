import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;
import moment from 'moment';
import momentFr from '../api/momentFr';
//redux
let { connect } = require('react-redux');
import * as actions from './../actions/actions';

//
export let Todo = React.createClass({
  render() {
 let { id, text, completed, createdAt, completedAt, dispatch } = this.props ///ajout de dispatch
let classNameNom = completed ? 'complet ' : '';
 let renderDate = () => {
   let message = '| Créée le ';
   let timestamp = createdAt;
    if(completed){
      message = ' | Completé le ' ;
      timestamp = completedAt;
    }
   return `${ message } ${moment.unix(timestamp).format(' DD MMM YY à h:mm')} `;
 }

    return (
      <div className="millieu">
        <label className='todo'>
          <input type="checkbox" checked={completed}  onChange={ () => {
            /*this.props.onToggle(id)*/  //on fait une simple fn sans nom. ca marche aussi, on aurait pu faire une fn aussi.
            dispatch(actions.toggleTodo(id))
          }}/>
          <p className={classNameNom}>{text}</p>
          <p className="date">{renderDate(id)}</p>
        </label>

        {/* <p>{text}</p> */}
      </div>
    )
  }
});

//export default Todo
//on donne a todo accet a dispatch pour qu il lance des actions
export default connect()(Todo);

 
