
//PURE VS IMPURE//PURE VS IMPURE//PURE VS IMPURE//PURE VS IMPURE//PURE VS IMPURE

//pur function  si on met 2 et 2 ca donnera tjrs la meme chose et no side effects, change rien ailleurs.
// function add(a,b){
//   return a + b
// }
// //non pure , a pourrait changer.
// let a = 3
// function add( b){
//   return a + b
// }
// //ou impure, ca change quelque chose a l exterieur. == side-effect
// let result
// function add( b){
//   result = a + b
//   return result;
// }
// //ou impure, on aura pas tjrs la meme reponse.
// function add(a,b){
//   return a + b + new Date().getSeconds();
// }
// //impure , mais avec es6, voir autre exemple.
// // function changeProp(obj){
// //   obj.name = 'Dave';
// //   return obj
// // }
//
// //pure, garde le meme obj.
// function changePropPur(obj){
//   return {
//     ...obj,
//     name: 'Dave'
//   }
// }
//
//
// let res = changePropPur({
//   name: 'Ben',
//   age: 40
// })
//
//
// let startValue = {
//   name: 'Ben',
//   age: 40
// }
// console.log(changePropPur(startValue))///garde dave Object {name: "Dave", age: 40}
// console.log(res) ///garde dave Object {name: "Dave", age: 40}

//PURE VS IMPURE//PURE VS IMPURE//PURE VS IMPURE//PURE VS IMPURE//PURE VS IMPURE//PURE VS IMPURE//PURE VS IMPURE
