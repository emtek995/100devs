//Create a constructor with 4 properties and 3 methods
function Pizza(size, sauce, toppings, crust) {
    this.size = size;
    this.sauce = sauce;
    this.toppings = toppings;
    this.crust = crust;
}

Pizza.prototype.bake = function() {}
Pizza.prototype.deliver = function() {}
Pizza.prototype.eat = function() {console.log('yum')} 

let p = new Pizza('small', 'white', ['chicken'], 'thin');

p.bake();
p.deliver();
p.eat();