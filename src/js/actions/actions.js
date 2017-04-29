import firebase, { firebaseRef } from './../firebase/index'
import moment from 'moment';

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

export let startAddTodo = (text) => {
  return (dispatch, getState) => {
   let todo = {
      // id: uuid(),   on a pu besoin de l id , firebase va le faire
       text ,
       completed: false,
       createdAt: moment().unix(),
       completedAt: null
   }
   let todoRef = firebaseRef.child('todos').push(todo)

   return todoRef.then(() => {
     dispatch(addTodo({
       ...todo,
       id: todoRef.key
     }));
   })
  }
}

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};





//comme dasn le cours d examples
// export let startLocationFetch = () => {
//   return {
//     type: 'START_LOCATION_FETCH',
//   }
// };
//
// export let completeLocationFetch = (url) => {
//   return {
//     type: 'COMPLETE_LOCATION_FETCH',
//     url
//   }
// };
//
// export let fetchLocation = () => {
//   return (dispatch, getState) => {
//     dispatch(startLocationFetch())  //ouvre le query .. mais fait rien ..
//       $.getJSON('https://ipinfo.io', function(data){  ///va chercher le data
//       let loc = data.loc;                             //log et lat
//       let baseUrl = 'http://maps.google.com?q=';     //fait la moitier de l url
//      dispatch(completeLocationFetch(baseUrl + loc))  ///lance le deuxieme dispatch, avec url complet
//     })
//   }
