/*var hello = 'Hello';
var hello = 'Hello +';
let world = 'Hello World';
// let world = 'Hello';
// const helloWorld = 'Hello World!';

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  // console.log(helloWorld);
}

anotherFunction();

const helloWorld = () => {
  globalVar = "I'm global";
}

helloWorld();
console.log(globalVar);*/

const anotherFunction2 = () => {
  var localVar = globalVar = "I'm Global";
}

anotherFunction2();
console.log(globalVar);

