/**]
 * 深拷贝：复制的对象和原来对象相互不影响
 * 浅拷贝：复制的对象和原来对象会相互影响
 */

function cloneDeep(target) {
  // 判断一些特殊情况
  if (target === null || typeof target !== "object") {
    return target;
  }
  let cloneTarget =
    Object.prototype.toString.call(target) === "[Object Array]" ? [] : {};

  for (let k in target) {
    cloneTarget[k] =
      target[k].constructor === Object ? cloneDeep(target[k]) : target[k];
  }

  return cloneTarget;
}

var a = {
  b: 123,
};

var b = cloneDeep(a);

b.b = 456;

console.log(a);
console.log(b);
