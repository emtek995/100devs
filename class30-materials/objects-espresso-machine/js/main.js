//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachine {
    constructor(waterTemp, tampStrength, grindSize, shotSize) {
        this.waterTemp = waterTemp;
        this.tampStrength = tampStrength;
        this.grindSize = grindSize;
        this.shotSize = shotSize;
    }

    brew = () => {
        console.log('brewing');
    }

    steam = () => {
        console.log('steaming milk');
    }

    clean = () => {
        console.log('cleaning...')
    }
}