let arr = [];
for (let i = 1; i > 0; i++) {
  let input = prompt("Enter your first Name , \n Enter your age");
  if (input !== "" && input !== null) {
    let num = input.split(",");
    let obj = {
      name: num[0],
      age: num[1],
    };
    let arrayPush = arr.push(obj);
  } else {
    break;
  }
}
const sortAge = () => {
  return arr.sort((a, b) => a.age - b.age);
};
console.log(sortAge());
