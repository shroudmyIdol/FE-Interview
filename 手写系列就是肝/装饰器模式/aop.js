Function.prototype.before = function (beforeFn) {
  const _self = this;
  return function () {
    beforeFn.apply(this, arguments);
    return _self.apply(this, arguments);
  };
};

Function.prototype.after = function (afterFn) {
  const _self = this;
  return function () {
    _self.apply(this, arguments);
    return afterFn.apply(this, arguments);
  };
};

function o1() {
  console.log(1);
}
function o2() {
  console.log(2);
}
function o3() {
  console.log(3);
}

var decorator = o1.after(o2);
decorator = decorator.after(o3);
decorator();