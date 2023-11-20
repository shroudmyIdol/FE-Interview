function objectCopy(obj) {
  function fn() {}
  fn.prototype = obj;
  return new fn();
}

function inhertParent(child, parent) {
  let prototype = parent.prototype;
  prototype.contructor = child;
  child.prototype = prototype;
}

function Parent(name) {
  this.name = name;
  this.friends = [1, 2, 3];
}

Parent.prototype.sayName = function () {
  console.log(this.name);
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

inhertParent(Child, Parent);

Child.prototype.sayAge = function () {
  console.log(this.age);
};

const child1 = new Child("child1", 18);
child1.sayName();
child1.friends.push(4);
console.log(child1.friends);
child1.sayAge();

const child2 = new Child("child2", 19);
child2.sayName();
console.log(child2.friends);
child2.sayAge();
