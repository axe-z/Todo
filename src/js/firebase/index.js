import firebase from 'firebase';

//console.log(firebase)

try {
  var config = {
    apiKey: "AIzaSyBwwo23r7NuCSsLnYd_fpemx1ogEeef8dU",
    authDomain: "axe-z-todo-app.firebaseapp.com",
    databaseURL: "https://axe-z-todo-app.firebaseio.com",
    projectId: "axe-z-todo-app",
    storageBucket: "axe-z-todo-app.appspot.com",
    messagingSenderId: "618754070386"
  };
  firebase.initializeApp(config);
} catch(e) {

}


export let firebaseRef = firebase.database().ref();
export default firebase
