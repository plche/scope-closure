/*const helloWorld = () => {
  const hello = 'Hello World';
  console.log(hello);
};

helloWorld();
console.log(hello);*/

var scope = "I'm global";

const functionScope = () => {
  var scope = "I'm just local";
  const func = () => {
    return scope;
  }
  console.log(func());
};

functionScope();
console.log(scope);
