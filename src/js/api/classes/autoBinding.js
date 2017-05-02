// console.log('ca bind')
//
//
// let  obj = {
//   name: 'Ben',
//   printName: function () {
//    console.log(`allo ${this.name}`)
//   }
// }
//
// obj.printName();

/// le fuck arrive avec un function qui lance ca, en callback, le this chi.
// setTimeout(obj.printName.bind(obj), 1000)  //marche sans bind
// setTimeout(obj.printName.bind({name: 'bobo'}), 1000)



///higher order


// function one(name, location){
//  console.log(name, location)
// }
//
// function two(){
//  console.log('args', arguments)
//  one.apply(undefined, arguments)
// }
//
// two('ben','mtl')
// //apply
// two.apply(undefined, ['jen', 'laval'])

// 
// let add = (a,b) => {
//   return  a + b;
// }
// let square = (d) => {
//    return d * d
// }
//
// let callAndLog = (fn) => {
//   return function () {
//     let response = fn.apply(undefined, arguments)
//     console.log('response est', response)
//     return response
//   }
// }
//
//
// let addAndLog = callAndLog(add)
// addAndLog(44,-3) //response est 41
// addAndLog(4 , 3) //response est 7
//
//
// let squareAndLog = callAndLog(square)
// squareAndLog(3) //response est 9
