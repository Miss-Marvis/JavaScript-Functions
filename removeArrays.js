

//Write a function to remove the first item in array A,
//remove the last item in array B and return the new values of arrays A and B.
//You can use array methods for this.


function removeItems(arrA, arrB) {
    arrA.shift();
    arrB.pop();
    return [arrA, arrB];
}

const A = [1, 2, 3, 4];
const B = [4, 5, 6, 7,];
const newArray = removeItems(A, B);
console.log(newArray); 