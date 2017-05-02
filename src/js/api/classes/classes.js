// console.log('test')
//
// //raffraichir nos  classs
// class Person {
// constructor (name ='defaultNom', age= 40){
//  this.name = name,
//  this.age = age
//   }
//   getGReeting(){
//     return `Bonjour ${this.name}`
//   }
//   toString(){
//     return JSON.stringify(this)
//   }
//   printDesc(){
//     return `${this.name} a ${this.age}`
//   }
// }
//
// let moi = new Person('ben', 39);
// console.log(moi)
// console.log(moi.getGReeting());
//
// console.dir({age: 25}.toString())
// console.log(moi.toString())
// console.log(moi.printDesc())
//
// let lui = new Person( );
// console.log(lui.printDesc())
//
//
// class child extends Person {
//   constructor (name, age,like){
//    super(name, age)  ///on ramene eu du parent
//    this.like = like // et initialise ca dans le child
//   }
//   getGReeting(){
//     return `Bonjour ${this.name} je suis le child`
//   }
//   getFavoriteProject(){
//     return `je suis ${this.name} jai ${this.age} et j'aime les ${this.like}`
//   }
//
// }
// let anonymous = new child()
// console.log(anonymous.getGReeting())
//
//
// let trois = new child('ben',4,'Autos')
// console.log(trois.getFavoriteProject())
//
//
// console.log(typeof arguments)
// console.log($(arguments).each( arg => {
//   return  arg
// }))
