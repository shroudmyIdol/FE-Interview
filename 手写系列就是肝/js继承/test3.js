function A(name) {
  this.info = {
    name: name,
  };
}

A.prototype.sayName = function () {
  console.log(this.info.name);
};

function B(name, age) {
  A.call(this, name);
  this.age = age;
}

B.prototype = new A();

const child1 = new B("child1", 18);
child1.sayName();
const child2 = new B("child2", 20);
child2.sayName();
