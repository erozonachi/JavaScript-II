// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const countDown = () => {
  let startCount = 101;

  function decrement() {
    return startCount -= 1;
  }

  return decrement;
}
const newCountDown = countDown();
console.log(newCountDown());
console.log(newCountDown());
console.log(newCountDown());


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counter = 0;
  const countUp = () => counter += 1;

  return countUp;
};

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;

  const counterObject = {
    increment: () => counter += 1,
    decrement: () => counter -= 1,
  }

  return counterObject;
};

const newCounterFac = counterFactory();
console.log(newCounterFac.increment()); // 1
console.log(newCounterFac.increment()); // 2
console.log(newCounterFac.increment()); // 3

console.log(newCounterFac.decrement()); // 2
