function objectCopy(obj) {
  function fn() {}
  fn.prototype = obj;
  return new fn();
}

function createNewOne(targetObj) {
  let newOne = objectCopy(targetObj);
  newOne.sayAge = function sayAge() {
    console.log(this.age);
  };

  return newOne;
}

let parent = {
  name: "parent",
  age: "18",
  sayName() {
    console.log(this.name);
  },
  showColors() {
    console.log(this.colors);
  },
  colors: ["red", "green", "blue"],
};

const child1 = createNewOne(parent);
child1.name = "child1";
child1.age = "19";
child1.sayName();
child1.colors.push("black");
child1.showColors();
child1.sayAge();

const child2 = createNewOne(parent);
child2.name = "child2";
child1.age = "20";
child2.sayName();
child2.colors.push("white");
child2.showColors();
child1.sayAge();
