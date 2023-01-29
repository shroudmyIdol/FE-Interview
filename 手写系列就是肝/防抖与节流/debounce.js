// 多次触发事件后，事件函数只能被执行一次，并且是在触发操作结束时执行。

/** 
* @param {function} fn - 需要防抖的函数
* @param {number} time - 多少时间执行一次
* @param {boolean} immediate - 是否立即执行
*/

function debounce(fn, time, immediate) {
    let timer;

    return function(...args) {
        timer && clearTimeout(timer);
        if (immediate && !timer) {
            fn.apply(this, args);
        }
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, time);
    }
}