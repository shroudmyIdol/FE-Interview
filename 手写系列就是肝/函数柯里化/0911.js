// 柯里化指的是将一个使用多个参数的函数转化为一系列使用单个参数函数的技术

function curry(fn, ...args) {
  let newFn =
    fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
  return newFn;
}

var fn = curry(function (a, b, c) {
  console.log([a, b, c]);
});

fn(1)(2)(3);

/**
 *  
 * 
 * */