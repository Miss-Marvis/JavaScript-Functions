// Write a function that takes a number as an Argument and returns
// a number. The argument represents a person's weight in pounds.
// The return value represents a person's weight in KG.


function poundsToKg(weightInPounds){
 //1 pound = 0.45359237
    return weightInPounds *0.45359237;
}

// Example Usage
console.log(poundsToKg(150));