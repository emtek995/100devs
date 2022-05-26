//Objects
//Please create a pokemon class with as much detail as possible in 10 minutes
class Pokeman {
    name = '';
    type = '';
    primaryAttack = '';
    secondaryAttack = '';

    constructor(name, type) {
        this.name = name;
        this.type = type;
    };

    attack = (attack) => {
        console.log(`attacked with ${attack}`);
    }
}