// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

// getLength() invocation
getLength(items, function(arrLength) {
  console.log(`Array length:`, arrLength);
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

// last() invocation
last(items, lastItem => console.log(`Last item in array:`, lastItem));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const sum = x + y;
  return cb(sum);
}

// sumNums() invocation
sumNums(3, 4, (sum) => console.log(`Sum:`, sum));

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

// multiplyNums() invocation
multiplyNums(3,7, product => console.log(`Product:`, product));

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return (list.includes(item)? cb(true) : cb(false));
}

// contains() invocation
contains(`Eneh`, items, (isPresent) => console.log(`Is item present?`, isPresent));

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const uniqueList = new Set(array);
  return cb([...uniqueList]);
}

// removeDuplicate() invocation
removeDuplicates([1,2,3,3,3,4,5], (distinctList) => console.log(distinctList));
