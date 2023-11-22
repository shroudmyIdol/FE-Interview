/**
 * 模拟实现 new 操作符
 * @param {Function} ctor 构造函数
 * @returns {Object | Error | Function | Regex | Date}
 */

function newOperator(ctor) {
  // 先判断ctor是不是函数
  if (typeof ctor === "Function") {
    throw new Error("newOperator function the first param must be a function");
  }

  // 创建一个新的对象
  const newObj = Object.create(ctor.prototype);

  // 创建构造函数的参数，arguments的第一个参数是ctor
  const args = [].slice.call(arguments, 1);
  // 调用构造函数, 返回结果
  // 调用apply是将ctor的this指针显示指向newObj
  const ctorResult = ctor.apply(newObj, args);

  // 由于new操作符始终会返回对象，所以需判断ctor是不是返回对象，如果是，则直接返回，否则返回一个空对象
  const isObject = typeof ctorResult === "Object" && ctorResult !== null;
  const isFunction = typeof ctorResult === "Function";
  if (isObject || isFunction) {
    return ctorResult;
  }
  return newObj;
}

function newOperator2(ctor, ...args) {
  // 构建一个新的对象
  let obj = {};

  // 新对象的原型指向ctor的原型
  obj.__proto__ = ctor.prototype;

  // 调用构造函数，将构造函数的指针指向obj
  let result = ctor.apply(obj, args);

  // 返回结果
  return result instanceof Object ? result : obj;
}
