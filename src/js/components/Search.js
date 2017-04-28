import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;
//redux-example
var { connect } = require('react-redux');
var actions = require('../actions/actions')

// let { dispatch } = this.props;
//
export const Search = React.createClass({

  // handleOnSearch(e){
  //   let showCompleted = this.refs.showCompleted.checked //false sans true avec
  //   let searchText = this.refs.searchText.value.trim();
  //   this.props.onSearch(showCompleted,searchText)
  // },


  render() {
      let { dispatch, showCompleted, searchText } = this.props;
    return (
      <div>
        <div>
          <input type="search" ref="searchText" className="search2"  value={searchText} placeholder="rechercher les activités" onChange={() => {
            let searchText = this.refs.searchText.value ;
            dispatch(actions.setSearchText(searchText))
          }} />
        </div>
        <div>
          <label className="oldStuff">
            <input type="checkbox" className="check" ref="showCompleted" checked={showCompleted}
              onChange={() => {
                dispatch(actions.toggleShowCompleted());
              }}  />
            Inclure les activités completées.
          </label>
        </div>
      </div>
    )
  }
});

export default connect(
  (state) => {
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    }
  }
)(Search)
