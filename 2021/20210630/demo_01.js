// function* fn() {
//   console.log("one");
//   yield "1";
//   console.log("two");
//   yield "2";
//   console.log("three");
//   return "3";
// }
// let f = fn();
// f.next();
async function foo() {
  console.log(1);
  let a = await 100;
  console.log(a);
  console.log(2);
}
console.log(0);
foo();
console.log(3);
