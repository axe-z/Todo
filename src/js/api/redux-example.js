
import * as redux from 'redux'


import * as actions from './../actions/index';
let { changeName, addHobby, addMovie, removeHobby, removeMovie, startLocationFetch ,completeLocationFetch, fetchLocation} = actions;

 let store = require('./../store/configureStore').configure();

 ///subcribe aux changement
let unsubscribe = store.subscribe(() => {
  let state = store.getState();
  console.log('Du nouveau', store.getState()) //presente chaque ajout ou retirer
///mapReducer
  if(state.map.isFetching){
    document.getElementById('redux').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('redux').innerHTML =  `<a target="blank" class='subRedux' href="${state.map.url}">Voir votre position</a>`
  }

});
 //=============================================================
 //on part la le fetch,


 store.dispatch(fetchLocation());

//DISPATCHER
 store.dispatch(changeName('Ben'))
 store.dispatch(changeName('Benoit'));
 store.dispatch(changeName('Axe-Z'));
 store.dispatch(addHobby('Courrir'))
 store.dispatch(addHobby('Sauter a la corde'))
//unsubscribe();                                    //Benoit sortira pas. dispatch se fera pas.
 store.dispatch(addMovie('Run lola Run','thriller'))
 store.dispatch(addMovie('Shawshank Redemption','Drama'))
 store.dispatch(addMovie('Zoolander','Comedy'))
 store.dispatch(addMovie('A river runs throught it','Drama'))
 store.dispatch(removeHobby(2));
 store.dispatch(removeMovie(1))







///le complet avant la separation


// puisque NAME, hobbies et moies n'est plus un obj, on ne doit pas retourner un obj.
//=============================================================
//NAME REDUCER et ACTION GENERATORS
//  let nameReducer = (state = 'Anonymous', action) => {
//    switch (action.type) {
//     case 'CHANGE_NAME':
//     return  action.name
//     default:
//     return state;
//   }
//  }
//  //GENERATORS
//  let changeName = (name) => {
//    return {
//      type: 'CHANGE_NAME',
//      name
//    }
//  };
// //=============================================================
//  //=============================================================
// //HOBBIES REDUCER et ACTION GENERATORS
// //les Index pour arrays
// let nextHobbyId = 1;
//
//  let hobbiesReducer = (state = [], action) => {
//    switch (action.type) {
//     case 'ADD_HOBBY':
//     return [                                     ///ensuite pour l arr hobbies
//         ...state,                                /// on retourne juste state
//         {
//           id: nextHobbyId++,                      //ajouter un Id
//           hobby: action.hobby                     //ensuite lobj qu on veut dans l arr
//         }
//       ];
//     case 'REMOVE_HOBBY':                         // RETIRER de l arr, ce qu'on ne veut pas
//     return state.filter((hobby) => {             // l arr est sur state
//           return hobby.id !== action.id          // on retourne tout ce qui n'a pas id: 2 finalement
//       })
//     default:
//     return state;
//   }
//  }
//  //GENERATORS
//  let addHobby = (hobby) => {
//    return {
//      type: 'ADD_HOBBY',
//      hobby
//    }
//  };
//
//  let removeHobby = (id) => {
//    return {
//      type: 'REMOVE_HOBBY',
//      id
//    }
//  };
// //=============================================================
// //=============================================================
// //MOVIES REDUCER et ACTION GENERATORS
// //les Index pour arrays
// let nextMovieId = 1;
//
//  let moviesReducer = (state = [], action) => {
//    switch (action.type) {
//     case 'ADD_MOVIE':
//     return [
//        ...state,                                /// on retourne juste state
//         {
//           id: nextMovieId++,                     //ajouter un Id
//           title: action.title,
//           genre: action.genre                    //ensuite lobj qu on va dans l arr
//         }
//       ];
//     // case 'REMOVE_MOVIE':                          // RETIRER de l arr, ce qu'on ne veut pas
//     // return state.filter((movie) => {             // l arr est sur state
//     //       return movie.title !== 'Zoolander'        // on retourne tout ce qui n'a pas id: 2 finalement
//     //   })
//       case 'REMOVE_MOVIE':                          // RETIRER de l arr, ce qu'on ne veut pas
//       return state.filter((movie) => {             // l arr est sur state
//             return movie.id !== action.id       // on retourne tout ce qui n'a pas id: 2 finalement
//         })
//     default:
//     return state;
//   }
//  }
//  //GENERATORS
//  let addMovie = (title, genre) => {
//    return {
//      type: 'ADD_MOVIE',
//      title,
//      genre
//    }
//  };
//
//  let removeMovie = (id) => {
//    return {
//      type: 'REMOVE_MOVIE',
//      id
//    }
//  };
//  //=============================================================
//  ///IP URL
//
//  let mapReducer = (state = {isFetching: false, url: undefined}, action) => {
//    switch (action.type) {
//     case 'START_LOCATION_FETCH' :
//     return {
//       isFetching: true,
//       url: undefined
//     }
//     case 'COMPLETE_LOCATION_FETCH' :
//     return {
//       isFetching: false,
//       url: action.url
//     }
//     default:
//      return state;
//    }
//  };
//
// //on part la le fetch,
//  let startLocationFetch = () => {
//    return {
//      type: 'START_LOCATION_FETCH',
//    }
//  };
//
//  let completeLocationFetch = (url) => {
//    return {
//      type: 'COMPLETE_LOCATION_FETCH',
//      url
//    }
//  };
//
// let fetchLocation = () => {
//   store.dispatch(startLocationFetch())  //ouvre le query .. mais fait rien ..
//     $.getJSON('https://ipinfo.io', function(data){  ///va chercher le data
//     let loc = data.loc;                             //log et lat
//     let baseUrl = 'http://maps.google.com?q=';     //fait la moitier de l url
//     store.dispatch(completeLocationFetch(baseUrl + loc))  ///lance le deuxieme dispatch, avec url complet
//   })
// }
//
// //passer 2 dispatch pour du ASYNC
// // let fetchLocation = () => {
// //   store.dispatch(startLocationFetch())  //ouvre le query .. mais fait rien ..
// //     axios.get('https://ipinfo.io').then(function (res) {
// //     let loc = res.data.loc;                             //log et lat
// //     let baseUrl = 'http://maps.google.com?q=';     //fait la moitier de l url
// //     store.dispatch(completeLocationFetch(baseUrl + loc))  ///lance le deuxieme dispatch, avec url complet
// //   })
// // }
//
//  //=============================================================
// //quand plusieurs reducer
// let reducer = redux.combineReducers({
//   name: nameReducer,
//   hobbies: hobbiesReducer,
//   movies: moviesReducer,
//   map: mapReducer
// })
//
// //Store , et initialiser DEV tools
//  let store = redux.createStore(reducer, redux.compose(
//    window.devToolsExtension ? window.devToolsExtension() : f => f
//  ));
//let actions = require('./../actions/index')






















///AVEC UN OBJ et un gros reducer
// let stateDefault = {
//   name: 'Anonymous',
//   hobbies: [],
//   movies: []
// }

 // let oldReducer = (state = stateDefault, action) => {
 //
 //   switch (action.type) {
 //    case 'CHANGE_NAME':
 //    return {
 //      ...state,     //pour le deuxieme tours, on doit ramener tout
 //      name: action.name
 //    }
 //    case 'ADD_HOBBY':        //pour l arr.
 //    return {                 /// on retourne tout avant
 //      ...state,
 //      hobbies: [            ///ensuite pour l arr hobbies
 //        ...state.hobbies,     /// on retourne tout avant (meme si rien, en partant) , sinon on overwrite
 //        {
 //          id: nextHobbyId++,   //ajouter un Id
 //          hobby: action.hobby     //ensuite lobj qu on veut dans l arr
 //        }
 //      ]
 //    }
 //    case 'REMOVE_HOBBY':    // RETIRER de l arr, ce qu'on ne veut pas
 //    return {               /// on retourne tout avant
 //      ...state,
 //      hobbies: state.hobbies.filter((hobby) => {
 //        return hobby.id !== action.id          // on retourne tout ce qui n'a pas id: 2 finalement
 //      })
 //    }
 //    case 'ADD_MOVIE':  //pour l arr.
 //    return {           /// on retourne tout avant
 //      ...state,
 //      movies: [           ///ensuite pour l arr hobbies
 //        ...state.movies,     /// on retourne tout avant (meme si rien, en partant) , sinon on overwrite
 //        {
 //          id: nextMovieId++,   //ajouter un Id
 //          title: action.title,
 //          genre: action.genre     //ensuite lobj qu on veut dans l arr
 //        }
 //      ]
 //    }
 //    case 'REMOVE_MOVIE':    // RETIRER de l arr, ce qu'on ne veut pas
 //    return {               /// on retourne tout avant
 //      ...state,
 //      movies: state.movies.filter((movie) => {
 //        return movie.id !== action.id          // on retourne tout ce qui n'a pas id: 2 finalement
 //      })
 //    }
 //    default:
 //     return state;
 //   }
 // };

//  let store = redux.createStore(reducer, redux.compose(
//    window.devToolsExtension ? window.devToolsExtension() : f => f
//  ));
//
//  ///subcribe aux changement
// let unsubscribe = store.subscribe(() => {
//   let state = store.getState();
// //   console.log('name est', state.name )
// // if(state.hobbies.length > 0){
// //   console.log('dans mes hobbies', ...state.hobbies)
// // }
// //ou
//  console.log('Du nouveau', store.getState()) //relance tout
//
// });

// store.dispatch({
//   type: 'CHANGE_NAME',
//   name: 'Ben'
// })
// store.dispatch({
//   type: 'CHANGE_NAME',
//   name: 'Benoit'
// })
//unsubscribe();                                    //Benoit sortira pas. dispatch se fera pas.
// store.dispatch({
//   type: 'ADD_HOBBY',
//   hobby: 'Courrir'
// })
// store.dispatch({
//   type: 'ADD_HOBBY',
//   hobby: 'Sauter a la corde'
// })
// store.dispatch({
//   type: 'ADD_MOVIE',
//   title: 'Run lola Run',
//   'genre': 'thriller'
// })
// store.dispatch({
//   type: 'ADD_MOVIE',
//   title: 'Shawshank Redemption',
//   'genre': 'Drama'
// })
// store.dispatch({
//   type: 'ADD_MOVIE',
//   title: 'Zoolander',
//   'genre': 'Comedy'
// })
// store.dispatch({
//   type: 'REMOVE_HOBBY',
//   id: 2
// })
// store.dispatch({
//   type: 'REMOVE_MOVIE',
//   id: 1
// })

//
// //en es5
//  // let reducer = (state, action) => {
//  //   state = state || { name: 'Anonymous' }
//  // };
//
//
//
//
//  //es6
//  let reducer = (state = {name: 'Anonymous'}, action) => {
// //   console.log('Nouvelle action: ', action )  //permet de visualiser l entree des actions
//    switch (action.type) {
//     case 'CHANGE_NAME':
//     return {
//       ...state,
//       name: action.name
//     }
//     default:
//      return state;
//    }
//  };
//
//
//  let store = redux.createStore(reducer, redux.compose(
//    window.devToolsExtension ? window.devToolsExtension() : f => f
//  ));
//
//  ///subcribe aux changement
// let unsubscribe = store.subscribe(() => {
//   let state = store.getState();
//   //document.getElementById('redux').innerHTML = state.name //permet meme de jouer en html
//   console.log('name est', state.name )
// });
//
//
//
//
//  //let currentState = store.getState();
// // console.log(currentState) // Object {name: "Anonymous"} parfait
//
// ///plus long . plus clair
//  // let action = {
//  //   type: 'CHANGE_NAME',
//  //   name: 'Ben'
//  // }
//  // store.dispatch(action);  //mais on verra rien pour l instant si pas de console dnas le reducer.
//
// //shortcut.
//  store.dispatch({
//    type: 'CHANGE_NAME',
//    name: 'Ben'
//  })
//  //unsubscribe();  //BEnoit sortira pas. dispatch se fera pas.
//  store.dispatch({
//    type: 'CHANGE_NAME',
//    name: 'Benoit'
//  })
//
//
//  //console.log('name devrait etre Ben', store.getState()) //name devrait etre Ben Object {name: "Ben"}
