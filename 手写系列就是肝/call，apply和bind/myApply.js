Function.prototype.myApply = function (context, args) {
    if (!context) {
        context = window
    }
    let fn = new Symbol();
    context[fn] = this;
    let result = context[fn](...args);
    delete context[fn];
    return result;
}