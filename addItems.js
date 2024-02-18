
//Write a function to add a new item after the last item in Array A
//add a new item before the first item in Array B and return the new values 
// of A and B. You can use array methods for this.

function addItems(arrA, arrB, newItemA, newItemB){
    arrA.push(newItemA);
    arrB.unshift(newItemB);
    return [arrA, arrB];
}

const A = [1, 2, 3, 4];
const B = [4, 5, 6, 7];
const updatedArrays = addItems(A, B, 5,3);
console.log(updatedArrays);