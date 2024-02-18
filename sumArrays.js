

// Write a function to sum up all the values in arrays A and B
// Do not use an Array method for this.

function sumArrays(arr1, arr2){
    let sum = 0;
    for (let num of arr1) {
        sum += num;
    }

    for (let num of arr2) {
        sum +=num;
    }

    return sum;
}

const A = [1, 2, 3, 4];
const B = [4, 5, 6,7];
const totalSum = sumArrays(A,B);
console.log(totalSum);
