Function.prototype.myBind = function (context, ...args) {
    if (!context) {
        context = window;
    }
    let that = this;
    let fn = new Symbol();
    let result = function (...args1) {
        if(this instanceof that) {
            this[fn] = that;
            let res = this[fn](...args, ...args1);
            delete this[fn];
            return res;
        } else {
            context[fn] = this;
            let res = context[fn](...args, ...args1)
            delete context[fn];
            return res;
        }
    }
    result.prototype = Object.create(that.prototype);
    return result;
}

// es6的写法
Function.prototype.myBind = function (target, ...rest) {
    let self = this;
    return function fn(...args) {
        return this instanceof fn ? new self(...rest, ...args) : self.apply(context, rest.concat(args));
    }
}