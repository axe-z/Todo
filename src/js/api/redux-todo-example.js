import * as redux from 'redux'

// let reducer = (state = {searchText :'', showCompleted: false, todos: [] }, action) => {
//    return state
//  };

//ou faire son default a l 'exterieur pour pas faire laite en inline.

let stateDefault = {
  searchText : '',
  showCompleted: false,
  todos: []
}


 let reducer = (state = stateDefault, action) => {
//   console.log('Nouvelle action: ', action )  //permet de visualiser l entree des actions
   switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
    return {
      ...state,
      searchText: action.searchText
    }
    case 'CHANGE_BOOL':
    return {  ...state,  showCompleted: action.showCompleted }
    default:
     return state;
   }
 };

 let store = redux.createStore(reducer, redux.compose(
   window.devToolsExtension ? window.devToolsExtension() : f => f
 ));

 ///subcribe aux changement
let unsubscribe = store.subscribe(() => {
  let state = store.getState();
  //document.getElementById('redux').innerHTML = state.searchText + ' ' + state.showCompleted
  console.log('searchText', state.searchText )
  console.log('showCompleted est', state.showCompleted)
});


 store.dispatch({
   type: 'CHANGE_SEARCH_TEXT',
   searchText: 'Change le text par un dispatch'
 })
 store.dispatch({
   type: 'CHANGE_BOOL',
   showCompleted: true
 })
 store.dispatch({
   type: 'CHANGE_SEARCH_TEXT',
   searchText: 'Sardgio le petit chat italien'
 })
 store.dispatch({
   type: 'CHANGE_SEARCH_TEXT',
   searchText: 'Sandwich au thon yark'
 })

// let currentState = store.getState();
// console.log(currentState) // Object {searchText: "", showCompleted: false, todos: Array(0)} parfait
//Object {searchText: "Change le text par un dispatch", showCompleted: true, todos: Array(0)}
