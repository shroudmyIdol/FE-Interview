function objectCopy(obj) {
  function fn() {}
  fn.prototype = obj;
  return new fn();
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

const child1 = objectCopy(parent);
child1.name = "child1";
child1.sayName();
child1.colors.push("black");
child1.showColors();

const child2 = objectCopy(parent);
child2.name = "child2";
child2.sayName();
child2.colors.push("white");
child2.showColors();
