import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;
// const { Component } = React;

let  isAdmin = true; ///ca serait sur le dgb, ou user. profile

let adminComponent = (Component) => {
  return  class Admin extends Component {    //pas react.component, mais bien Componenet, ici compo2
    render() {
      if(isAdmin) {
        return (
          <div>
            {/* <Component />         {/* ca update pas , et pas le bon props*/} 
            {super.render()}      {/* ca update! , et prend le bon props*/}

          </div>
        )
      } else {
          return null
      }

    }
  };
};
// let adminComponent = (Component) => {
//   return  class Admin extends React.Component {
//     render() {
//       if(isAdmin) {
//         return (
//           <div>
//
//             <Component {...this.props}/>   {/* permet d aller cherccher la props passer dans app */}
//           </div>
//         )
//       } else {
//           return null
//       }
//
//     }
//   };
// };

 class Compo2 extends React.Component {
  constructor (props){
   super(props)
     this.state = {
      // count:  arguments[0].count   //ca marche
      count:  props.count
     }
     //console.log(arguments )
     this.onClick = this.onClick.bind(this)  //le faire d'avance
  }
  componentDidUpdate(){
    console.log('ca update')

    //et si en bas il y avait la meme methode...
  }
  componentDidMount(){
    let node =  findDOMNode(this);  ///retourne tout le div.
     TweenMax.from(node,1,{
       opacity: 0,  x:  200,  delay:0.5, scale: 4.2,
       ease: Power4.easeInOut
     })
  }
  onClick(){
    //console.log(this)
    //console.log(React.Component)
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
//    console.log(this.props)
    let { count } = this.state;
    return (
      <div className="millieu centrer">
        <h3>Compo2 avec Extends</h3>
        <p>Compteur est a { count }</p>
        {/* <button className="submit2" onClick={this.onClick.bind(this)}>Bouton deux</button> */}
        <button className="submit2" onClick={() => {
          this.setState({
            count: this.state.count + 1
          })
        }}>Bouton deux</button>

      </div>
    );
  }
}

Compo2.defaultProps = {
  count : 50
}
Compo2.propTypes = {
  count: React.PropTypes.number
}


 export default adminComponent(Compo2)
