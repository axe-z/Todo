import firebase from 'firebase';

//console.log(firebase)

  var config = {
    apiKey: "AIzaSyBwwo23r7NuCSsLnYd_fpemx1ogEeef8dU",
    authDomain: "axe-z-todo-app.firebaseapp.com",
    databaseURL: "https://axe-z-todo-app.firebaseio.com",
    projectId: "axe-z-todo-app",
    storageBucket: "axe-z-todo-app.appspot.com",
    messagingSenderId: "618754070386"
  };
  firebase.initializeApp(config);


  let firebaseRef = firebase.database().ref();

 //SET
 //  firebaseRef.set({
 //    app: 'Todo App',
 //    isRunning: true,
 //    user: {
 //      name: 'Axe-z',
 //      age: 1
 //    }
 //  }).then( () => {
 //   console.log('bravo')
 // }, (e) => {
 //    console.log(e)
 //  });
 //
 // firebaseRef.child('user').set({
 //   name: 'Mike'
 // })

 // firebaseRef.set({
 //   app: {
 //     name: 'Todo App',
 //     version: '0.0.1'
 //   },
 //   isRunning: true,
 //   user: {
 //        name: 'AXE-Z',
 //        age: 2
 //    }
 // })
//  firebaseRef.child('app').set({
//    name: 'React Todo app',
//    version: '0.0.2'
//   })
// firebaseRef.child('user').set({
//   name: 'axe-z',
//   age: 40
// })

///UPDATE
// firebaseRef.set({
//   app: {
//     name: 'Todo App',
//     version: '0.0.1'
//   },
//   isRunning: true,
//   user: {
//        name: 'AXE-Z',
//        age: 2
//    }
// })

// firebaseRef.update({
//     isRunning: false,
// })
//
// firebaseRef.update({
// 'app/name': 'Todo React app',
// 'app/version' : '0.0.3'
// })
//
// firebaseRef.child('app').update({
//    name: 'React Todo app',
//    version: '0.0.2'
// }).then(() => {
//   console.log('bravo')
// }).catch((e) => {
//   console.log(e)
// })


// firebaseRef.update({
// 'app/name': 'Todo React app',
// 'user/name' : 'axe-z'
// }).then(() => {
//   console.log('bravo')
// }).catch((e) => {
//   console.log(e)
// })

// //REMOVE
// // firebaseRef.remove() // detruit TOUT mouhahahahha tuuf tuff .
//
// firebaseRef.child('user/age').remove()   //detruit seulement l age
//
// firebaseRef.update({
//   'user/age': 20, ///va le remettre
//   isRunning: null    ///va le deleter
// })
//
// firebaseRef.update({
//   'salaire/paye': 20000 ///va le setter , meme si pas la avant, update ajoute aussi.
// })




//ramener le database
// firebaseRef.once('value')
// .then((snapshot) => {
//   console.log(snapshot.val())  //Object {app: Object, salaire: Object, user: Object}
// })
// .catch(e => {
//   console.log('marche pas', e)
// })
//
// //avec child
// firebaseRef.child('app').once('value')
// .then((snapshot) => {
//   console.log(snapshot.val(), snapshot.key)   //Object {name: "Todo React app", version: "0.0.1"} "app"
// })
// .catch(e => {
//   console.log('marche pas', e)
// })



//ON et OFF

// firebaseRef.child('salaire').on('value', (snapshot) => {
//   console.log('a la valeur', snapshot.val())
// })
//
// firebaseRef.update({   // active le on.
//   'salaire/paye': 40000
// })
//
// firebaseRef.update({    /// n active PAS le on
//   'user/age': 30,
// })
//
// firebaseRef.off()
//
// firebaseRef.update({   // active le on ENCORE il faut + firebaseRef.child('salaire').off()
//   'salaire/paye': null
// })
//
// firebaseRef.child('salaire').off()


//nommer le callback//nommer le callback//nommer le callback//nommer le callback//nommer le callback
// let logData = (snapshot) => {
//   console.log('value', snapshot.val())
// };
//
// firebaseRef.on( 'value', logData );
//
// firebaseRef.update({   //log
//   'salaire/paye': 60000
// });
//
// firebaseRef.off('value', logData)  //va seulement arreter d ecouter ceux qui ont SE logdata
//
// firebaseRef.update({    //log pas
//   'salaire/paye': 80000
// });





//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS//ARRAYS


firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '0.0.1'
  },
  isRunning: true,
  user: {
       name: 'AXE-Z',
       age: 2
   }
 });


// let noteRef = firebaseRef.child('notes');

// let newNoteRef = noteRef.push();
//
// newNoteRef.set({
//   text: 'Walk the dog'
// })
//
// //plus vite , on peut skipper le set.
// noteRef.push({
//   text: 'ferme la porte'
// });
// console.log(newNoteRef.key) //sort le premier id

//resultat:
// {
//   "app" : {
//     "name" : "Todo App",
//     "version" : "0.0.1"
//   },
//   "isRunning" : true,
//   "notes" : {
//     "-Kiq3p0wkC4trP5UUuaY" : {
//       "text" : "Walk the dog"
//     },
//     "-Kiq3p0xXsj4mtDaT-Ax" : {
//       "text" : "ferme la porte"
//     }
//   },
//   "user" : {
//     "age" : 2,
//     "name" : "AXE-Z"
//   }
// }


//CHILD_ADDED CHILD_CHANGER CHILD_REMOVED

// noteRef.on('child_added', (snap) => {
//   console.log('snap added', snap.key, snap.val()) //snap -Kiq5EZmDTvNFuKQu_6a Object {text: "Walk the dog"}
// })                                          //snap -Kiq5OOSb4XXGaaK0wg9 Object {text: "ferme la porte"}
//
//
//
// noteRef.on('child_changed', (snap) => {
//   console.log('snap changed', snap.key, snap.val())
// })
//
// noteRef.on('child_removed', (snap) => {
//   console.log('snap removed', snap.key, snap.val())
// })


///// avec todos
let todosRef = firebaseRef.child('todos');

///listeners
todosRef.on('child_added', (snap) => {
  console.log('snap added', snap.key, snap.val()) //snap -Kiq5EZmDTvNFuKQu_6a Object {text: "Walk the dog"}
})                                          //snap -Kiq5OOSb4XXGaaK0wg9 Object {text: "ferme la porte"}

todosRef.on('child_changed', (snap) => {
  console.log('snap changed', snap.key, snap.val())
})

todosRef.on('child_removed', (snap) => {
  console.log('snap removed', snap.key, snap.val())
})

todosRef.push({
  text: 'apprendre firebase'
});

todosRef.push({
  text: 'finaliser l app'
});

todosRef.push({
  text: 'connecter React a firebase'
});

//donne =
// snap added -Kiq9db4Arafyc6tjIG5 Object {text: "apprendre firebase"}
// snap added -Kiq9dbBaNIoi4j1PNgr Object {text: "finaliser l app"}
// snap added -Kiq9dbCfd0_PcLaq4ny Object {text: "connecter React a firebase"}
