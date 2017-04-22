import uuid from 'node-uuid';

module.exports = {
  setTodos(todos){
   if($.isArray(todos)){    ///is aRray retourne un boolean si arr ou non
    localStorage.setItem('todos', JSON.stringify(todos))  //
    return todos;
   }
  },
  getTodos(){
let stringTodos = localStorage.getItem('todos') //va renvoyer le string fait par setitem
console.log(stringTodos)
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
  }
};
