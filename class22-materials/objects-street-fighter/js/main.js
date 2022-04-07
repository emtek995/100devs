//Create a street fighter constructor that makes fighting game
// characters with 4 properties and 3 methods

class StreetFighter {
    constructor(name) {
        this.name = name;
        this.hitPoints = 100;
        this.wins = 0;
        this.loses = 0;
    }

    punch = () => {console.log(`${this.name} punched`)};
    kick = () => {console.log(`${this.name} kicked`)}
    jump = () => {console.log(`${this.name} jumped`)}
}

let ken = new StreetFighter('Ken');
console.log(ken);
ken.punch();
ken.kick();
ken.jump();
StreetFighter.prototype.cool = true;
console.log(ken.cool)