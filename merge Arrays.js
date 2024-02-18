
// Write a function to return a new Array which contains
// values in arrays A and B



function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

const A = [1, 2, 3, 4];
const B = [4, 5, 6, 7];
const mergedArray = mergeArrays(A,B);
console.log(mergedArray);