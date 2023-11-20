class A {
  constructor() {
    this.name = "123";
  }
  p(param) {
    return param;
  }
}

class B extends A {
  constructor() {
    super();
    console.log(super.name);
    console.log(super.p(123));
  }
}

new B();

// var obj = {
//   name: "hj",
//   say() {
//     return super.name;
//   },
// };

// console.log(obj.__proto__.name);

// obj.__proto__.name = "newHj";

// console.log(obj.say());
