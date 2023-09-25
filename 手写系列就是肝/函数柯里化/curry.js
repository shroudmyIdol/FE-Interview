// 柯理化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术

// 第一版
var curry = function (fn) {
  var args = [].slice.call(arguments, 1);
  return function () {
    var newArgs = args.concat([].slice.call(arguments));
    return fn.apply(this, newArgs);
  };
};

// 第二版，利用上面的curry函数
function curry2(fn, length) {
  length = length || fn.length;

  var slice = Array.prototype.slice;

  return function () {
    if (arguments.length < length) {
      var combined = [fn].concat(slice.call(arguments));
      return curry2(curry.apply(this, combined), length - arguments.length);
    } else {
      return fn.apply(this, arguments);
    }
  };
}

// 第三版，极简版
function sub_curry(fn) {
  return function () {
    return fn();
  };
}

function curry3(fn, length) {
  length = length || 4;
  return function () {
    if (length > 1) {
      return curry3(sub_curry(fn), --length);
    } else {
      return fn();
    }
  };
}

var fn0 = function () {
  console.log(1);
};

var fn1 = curry3(fn0);

fn1()()();

// 流程
// 第一步 fn1() -> curry3(sub_curry(fn0)) -> curry3(function() { return fn0() })
// 第二步 fn1()() -> curry3(sub_curry(function() { return fn0() })) -> curry3(function() {return (function() { return fn0() })()})
// 第三步 fn1()()() 同上

// 最后都是curry3(function() {return fn0()});

// 当length === 1之后，执行(function() {return fn0()})()
// 相当于 fn0()


var fn0 = function(a, b, c, d) {
    return [a, b, c, d];
}

var fn1 = curry(fn0);

fn1("a", "b")("c")("d")


/**
 * 1. fn1("a", "b")
 *    curry(sub_curry(fn0, a, b))
 *    curry(function(..) => {
 *       return fn0("a","b", ...);
 *    })
 * 2. fn1("a", "b")("c")
 *    curry(sub_curry(fn0, a, b))("c")
 *    curry(function(..) => {
 *       return fn0("a","b", ...);
 *    })("c")
 *    curry(function(..) => {
 *       return fn0("a","b", "c", ...);
 *    })
 * 3. fn1("a", "b")("c")('d')
 *    curry(function(..) => {
 *       return fn0("a","b", "c", ...);
 *    })(d)
 *    fn0("a", "b", "c", "d")
 * 
 * */ 

// test
function add(a, b, c) {
  return a + b + c;
}

var addCurry = curry2(add);

console.log(addCurry(1)(2)(3));
