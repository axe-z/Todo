import React from "react";
import ReactDOM from "react-dom";
const { render, findDOMNode  } = ReactDOM;


const Search = React.createClass({
  handleOnSearch(e){
    let showCompleted = this.refs.showCompleted.checked //false sans true avec
    let searchText = this.refs.searchText.value.trim();

    this.props.onSearch(showCompleted,searchText)
  },

  render() {
    return (
      <div>
        <div>
          <input type="search" ref="searchText" className="search2" placeholder="rechercher les activités" onChange={this.handleOnSearch} />
        </div>
        <div>
          <label className="oldStuff">
            <input type="checkbox" className="check" ref="showCompleted" onChange={this.handleOnSearch}/>
            Afficher aussi les activités completées.
          </label>
        </div>
      </div>
    )
  }
});

export default Search
