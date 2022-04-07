//Create a mouse object that has four properties and three methods
let mouse = {
    feet: 4,
    legs: 4,
    heads: 2,
    runs: true,
    run: () => console.log('running'),
    sleep: () =>  console.log('sleeping'),
    eat: () => console.log('eating')
};
console.log(mouse);
mouse.run();
mouse.sleep();
mouse.eat();