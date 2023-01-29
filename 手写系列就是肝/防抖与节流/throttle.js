// 事件触发后，在规定时间内，事件处理函数不能再次被调用。

/**
 * 简单版实现,通过判断距离上一次执行函数的时间是否大于设置的时间间隔
 * @param {funciton} fn - 需要节流执行的函数
 * @param {number} time - 多少时间间隔内执行一次
*/

function throttle(fn, time) {
  let prev = 0;
  return function () {
    let now = new Date().getTime();
    if (now - prev > time) {
        fn.apply(this, args);
        prev = now;
    }
  }
}