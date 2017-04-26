import * as redux from 'redux'

// puisque NAME, hobbies et moies n'est plus un obj, on ne doit pas retourner un obj.
//=============================================================
//NAME REDUCER
export let nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
   case 'CHANGE_NAME':
   return  action.name
   default:
   return state;
 }
}

//=============================================================
//=============================================================
//HOBBIES REDUCER
//les Index pour arrays
let nextHobbyId = 1;

export let hobbiesReducer = (state = [], action) => {
  switch (action.type) {
   case 'ADD_HOBBY':
   return [                                     ///ensuite pour l arr hobbies
       ...state,                                /// on retourne juste state
       {
         id: nextHobbyId++,                      //ajouter un Id
         hobby: action.hobby                     //ensuite lobj qu on veut dans l arr
       }
     ];
   case 'REMOVE_HOBBY':                         // RETIRER de l arr, ce qu'on ne veut pas
   return state.filter((hobby) => {             // l arr est sur state
         return hobby.id !== action.id          // on retourne tout ce qui n'a pas id: 2 finalement
     })
   default:
   return state;
 }
}

//=============================================================
//=============================================================
//MOVIES REDUCER
//les Index pour arrays
let nextMovieId = 1;

export let moviesReducer = (state = [], action) => {
  switch (action.type) {
   case 'ADD_MOVIE':
   return [
      ...state,                                /// on retourne juste state
       {
         id: nextMovieId++,                     //ajouter un Id
         title: action.title,
         genre: action.genre                    //ensuite lobj qu on va dans l arr
       }
     ];
   // case 'REMOVE_MOVIE':                          // RETIRER de l arr, ce qu'on ne veut pas
   // return state.filter((movie) => {             // l arr est sur state
   //       return movie.title !== 'Zoolander'        // on retourne tout ce qui n'a pas id: 2 finalement
   //   })
     case 'REMOVE_MOVIE':                          // RETIRER de l arr, ce qu'on ne veut pas
     return state.filter((movie) => {             // l arr est sur state
           return movie.id !== action.id       // on retourne tout ce qui n'a pas id: 2 finalement
       })
   default:
   return state;
 }
}

//=============================================================
///Map reducer

export let mapReducer = (state = {isFetching: false, url: undefined}, action) => {
  switch (action.type) {
   case 'START_LOCATION_FETCH' :
   return {
     isFetching: true,
     url: undefined
   }
   case 'COMPLETE_LOCATION_FETCH' :
   return {
     isFetching: false,
     url: action.url
   }
   default:
    return state;
  }
};
