const anotherFunction = () => {
    // Declaring 'i' variable with 'var' and not 'let' in 'for' loop, we create a closure
    for (var i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
};

anotherFunction();
