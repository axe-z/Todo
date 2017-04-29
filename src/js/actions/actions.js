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

export let startAddTodos = () => {
  return (dispatch, getState) => {
    let todosRef = firebaseRef.child('todos');
    todosRef.once('value')
    .then((snapshot) => {
      let todos = snapshot.val() || {};
      let parseTodos = [];
      Object.keys(todos).forEach( todoId  => {
        parseTodos.push({
          id: todoId,
          ...todos[todoId]
        });
      });
      dispatch(addTodos(parseTodos));
    });
  }
}



export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    let todoRef = firebaseRef.child(`todos/${id}`)
    let updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };
    return todoRef.update(updates)         //le return permet de chainer, pour les tests
    .then(() => {
      dispatch(updateTodo(id, updates))
    })
  }
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
