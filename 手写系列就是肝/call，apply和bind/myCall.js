Function.prototype.myCall = function (context, ...args) {
    if (!context) {
        context = window
    }
    const fn = new Symbol();
    context[fn] = this;
    let res = context[fn](...args);
    delete context[fn];
    return res;
}