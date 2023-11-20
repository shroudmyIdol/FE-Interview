function A() {
  this.info = {
    name: "123",
  };
}

A.prototype.sayHello = function () {
  console.log("hello");
};

function B() {
  A.call(this);
}

const b = new B();
console.log(b.info.name);
const c = new B();
c.info.name = "456";
console.log(c.info.name);
