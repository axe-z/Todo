import React from "react";
import ReactDOM from "react-dom";
const { createElement } = React;
const { render, findDOMNode  } = ReactDOM;


const Compo1 = React.createClass({
  getInitialState(){
    return {
      count : this.props.count
    }
  },
  getDefaultProps(){
    return {
      count: 11
    }
  },
  propTypes : {
    count: React.PropTypes.number
  },
  componentDidMount(){
    let node =  findDOMNode(this);  ///retourne tout le div.
     TweenMax.from(node,1,{
       opacity: 0,  x:  200,  scale: 3.5,
       ease: Power4.easeInOut
     })
  },
  onClick(){
    this.setState({
      count: this.state.count + 1
    })
  },
  render() {
     let { count } = this.state;
    return (
      <div className="millieu centrer">
        <h3>Compo1 avec createClass</h3>
        <p>le compteur des create est de {count}</p>
        <button className="submit2" onClick={this.onClick}>Bouton un</button>
      </div>
    )
  }
});
export default Compo1
