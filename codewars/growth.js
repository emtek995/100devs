function nbYear(p0, percent, aug, p) {
    let count = 0;
    let total = p0;
    while (total < p) {
        total = total + total * (percent / 100) + aug;
        count++; 
    }
    return count;
}

console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);
 