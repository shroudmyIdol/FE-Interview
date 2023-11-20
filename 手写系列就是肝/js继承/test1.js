class Person {
  isShow = true;
  info = {
    name: "hj",
    age: "28",
  };

  getInfo() {
    console.log(this.isShow);
    console.log(this.info);
  }
}

function child() {}

// 原型指向父类的实例
child.prototype = new Person();

child1 = new child();
// 修改子类的引用对象，同时也会修改父类的
child1.info.gender = "man";

child1.getInfo();

child2 = new child();
// 修改子类的基本类型数据，不会修改父类的
child2.isShow = false;

child2.getInfo();

child1.getInfo();
