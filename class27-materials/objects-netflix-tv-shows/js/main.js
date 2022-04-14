//Create a Netflix TV Show class with a constructor that makes Netflix TV 
//Shows with 4 properties and 3 methods

class Netflix {
    constructor(title, length, rating, genre) {
        this.title = title;
        this.rating = rating;
        this.genre = genre;
        this.length = length;
    }
    rate() {
        console.log('rate');
    }
    play() {
        console.log('play');
    }
    stop() {
        console.log('stop');
    }
}
