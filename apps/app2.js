`use strict`;
// const increase = document.getElementById("increase");
// const decrease = document.getElementById("decrease");
// const reset = document.getElementById("reset");
// const read = document.getElementById("read");
// let showCounter = document.getElementById("showCounter");
// let counter = 0;
// function increaseCounter() {
//   document.getElementById("showCounter").innerHTML = counter;
//   counter++;
// }
// function decreaseCounter() {
//   document.getElementById("showCounter").innerHTML = counter;
//   counter--;
// }
// function resetCounter() {
//   counter = 0;
//   document.getElementById("showCounter").innerHTML = counter;
// }

let stepObj = {
  counter: 0,
  increase() {
    this.counter++;
    return this;
  },
  decrease() {
    this.counter--;
    return this;
  },
  reset() {
    this.counter = 0;
    return this;
  },
  read() {
    console.log(this.counter);
    return this;
  },
};
stepObj.increase().increase().decrease().read();
