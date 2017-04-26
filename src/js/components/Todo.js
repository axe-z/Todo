import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;
import moment from 'moment';
import momentFr from '../api/momentFr';

const Todo = React.createClass({
  render() {
 let { id, text, completed, createdAt, completedAt } = this.props
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
      <div className="millieu"/* onClick={() => {    //au lieu de faire un function en haut de render, qui va envoyer a todoapp onToggle,
        this.props.onToggle(id)  //on fait une simple fn sans nom. ca marche aussi, on aurait pu faire une fn aussi.
        }}*/>
        <label className='todo'>
          <input type="checkbox" checked={completed}  onChange={() => {    //au lieu de faire un function en haut de render, qui va envoyer a todoapp onToggle,
            this.props.onToggle(id)  //on fait une simple fn sans nom. ca marche aussi, on aurait pu faire une fn aussi.
          }}/>
          <p className={classNameNom}>{text}</p>
          <p className="date">{renderDate()}</p>
        </label>

        {/* <p>{text}</p> */}
      </div>
    )
  }
});

export default Todo
