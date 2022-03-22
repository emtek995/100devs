let input = 'derp'
let slogans = [`${input} Lifestyle`]


// templateString is the string from the array to fill
// templateVar is the string from the user input to injust
const fillTemplate = function(templateString, templateVar){
    return new Function("return `"+templateString +"`;").call(templateVar);
}

let f = () => {
    input = 'fa;slkdfj'
    slogan = slogans[0]
    console.log(fillTemplate(slogan, input));    
}

// console.log(fillTemplate(slogans[0], input));
f()