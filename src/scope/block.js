/*const fruits = () => {
    fruit4 = 'pineapple';
    var fruit5 = 'orange';
  if (true) {
      var fruit1 = 'apple';
      let fruit2 = 'banana';
      const fruit3 = 'kiwi';
      console.log(fruit2);
      console.log(fruit3);
  }
  console.log(fruit1);
  /!*console.log(fruit2);
  console.log(fruit3);*!/
};

fruits();
// console.log(fruit1); // ReferenceError: fruit1 is not defined
console.log(fruit4);
console.log(fruit5); // ReferenceError: fruit5 is not defined*/

/*let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);*/

/*var x = 1;
{
    var x = 2;
    console.log(x);
}
console.log(x);*/

/*const anotherFunction = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
};

anotherFunction();*/

const anotherFunction = () => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
};

anotherFunction();
