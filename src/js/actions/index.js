
//GENERATORS
export let changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
};
//GENERATORS
export let addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
};

export let removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
};
//GENERATORS
export let addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  }
};

export let removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  }
};

export let startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH',
  }
};

export let completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url
  }
};

export let fetchLocation = () => {
  return (dispatch, getState) => {
    dispatch(startLocationFetch())  //ouvre le query .. mais fait rien ..
      $.getJSON('https://ipinfo.io', function(data){  ///va chercher le data
      let loc = data.loc;                             //log et lat
      let baseUrl = 'http://maps.google.com?q=';     //fait la moitier de l url
     dispatch(completeLocationFetch(baseUrl + loc))  ///lance le deuxieme dispatch, avec url complet
    })
  }
}
