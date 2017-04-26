import uuid from 'node-uuid';

module.exports = {

  //METTRE LE DATA SUR LOCALSTORAGE////////////////////////////////////////////////
  setTodos(todos){
   if($.isArray(todos)){    ///is aRray retourne un boolean si arr ou non
    localStorage.setItem('todos', JSON.stringify(todos))  //
    return todos;
   }
  },

  //ALLER SUR LOCALSTORAGE CHERCHER LE DATA/////////////////////////////////////////
  getTodos(){
let stringTodos = localStorage.getItem('todos') //va renvoyer le string fait par setitem
//console.log(stringTodos)
let todos = [];
try {
  todos = JSON.parse(stringTodos)     //pourrait retourner un obj, si y a un fuck... il faut un array
} catch (e){
 console.log(e)
}
return $.isArray(todos) ? todos : [];  ///check avant de retourner que c est un arr. sinon on retourne du vide en arr
//ou
// if($.isArray(todos)){ ///check avant de retourner que c est un arr.
//   return todos;
// } else {
//   return [];   //sinon on retourne du vide.
// }
  },

///FILTER///////////////////////////////////////////////////////////////////////////
 filterTodos(todos, showCompleted, searchText,  completedAt ){
   var filteredTodos = todos;
  //filter par showCompleted
  //if(showCompleted)
 filteredTodos = filteredTodos.filter(function (todo){
    return !todo.completed || showCompleted
  })
 //Filtrer par mots avec indexof
///donc ce qui est retourner est ce qui est true ..
//searchText.length === 0  si y a rien d ecrit , renvoit tout,
//todoText.indexOf(searchText) > -1 ;  si ce que t as est dans le text , return 1 ou 0 donc > -1
filteredTodos = filteredTodos.filter((todo) => {
 let todoText = todo.text.toLowerCase();
  return searchText.length === 0 ||  todoText.indexOf(searchText) > -1 ;    ////va tout retourner, rien d ecrit

})

 //  //filter par searchText avec sort()
 // A soit AVANT B, on retourne -1
 // B soit AVANT A, on retourne 1
 // Si on ne veut pas de changement on retourne 0
filteredTodos.sort((a,b) => {
    return !a.completed ? 1 : -1
})
filteredTodos.sort((a,b) => {
    return !a.completedAt ? 1 : -1
})



   return filteredTodos; //par default si aucune option
 }




////////////////////////////////////////////////////////////////////////////////


}; //export
