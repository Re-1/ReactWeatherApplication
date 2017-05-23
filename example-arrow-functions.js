//names
var names = ['Andrew','Julie','Jen'];

// //foreach
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// //arrow function
//
// names.forEach((name) => console.log('arrowfunc',name));
//
// //pets
// var pets = ['Cat','Mouse','Dog'];
//
// //foreach
// pets.forEach(function (pet) {
//   console.log('forEach', pet);
// });
//
// //arrow function
// pets.forEach((pet) => console.log('arrowfunc',pet))
//
// //cars
// var cars = ['BMW','Audi','Volvo'];
//
// //foreach
// cars.forEach(function (car) {
//   console.log('forEach', car);
// });
//
// //arrow function
// cars.forEach((car) => console.log('arrowfunc',car));
//
// //ex.2
// var returnMe = (name) => name +'!';
// console.log(returnMe('Monika'));
//
// //ex .3
// var person = {
//   name: 'M0ni',
//   greet: function () {
//       names.forEach((friend) => console.log(this.name + ' says hello to ' + friend));
//   }
// };
//
// person.greet();
// //Challenge
function add (a,b) {
  return a+b;
}

console.log(add(1, 3));
console.log(add(9, 5));

//addstatement
var addStatement = (a, b) => {
  return a + b
};
console.log(addStatement(4, 7));
