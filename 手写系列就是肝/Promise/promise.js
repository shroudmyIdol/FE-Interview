var promise = new Promise((resolve, reject)=> {
    if ('操作成功') {
        resolve(value);
    } else {
        reject(value1);
    }
});

promise.then((value) => {
    // success
}, (value) => {
    //failure
});


function Promise(executor) {
    let self = this
    self.status = 'pending'
    self.data = undefined
    // 在Promise结束之前有可能有多个回调添加到上面？
    self.onResolvedCallback = []
    self.onRejectCallback = []

    function resolve(value){
        if (self.status === 'pending') {
            self.status = 'fulfilled'
            self.data = value
            for(let i = 0; i < self.onResolvedCallback.length; i++){
                self.onResolvedCallback[i](value)
            }
        }
    }

    function reject(reason) {
        if (self.status === 'pending') {
            self.status = 'rejected'
            self.data = reason
            for(let i = 0 ; i < self.onRejectCallback.length; i++) {
                self.onRejectCallback[i](reason)
            }
        }
    }

    try {
        executor(resolve, reject)
    } catch (e) {
        throw e;
    }
}

Promise.prototype.then = function(onResolved, onRejected) {
    let self = this
    let promise2

    onResolved = typeof onResolved === 'function' ? onResolved : function(value) { return value}
    onRejected = typeof onRejected === 'function' ? onRejected : function(reason) { throw reason}

    if (self.status === 'resolved') {
        return promise2 = new Promise(function(resolve, reject) {
            try {
                let x = onResolved(self.data)
                if (x instanceof Promise) {
                    x.then(resolve, reject)
                }
                resolve(x);
            } catch(e) {
                reject(e)
            }
        })
    }

    if (self.status === 'rejected') {
        return promise2 = new Promise(function(resolve, reject) {
            try {
                let x = onRejected(self.data)
                if (x instanceof Promise) {
                    x.then(resolve, reject)
                }
            } catch(e) {
                reject(e)
            }
        })
    }

    if (self.status === 'pending') {
        return promise2 = new Promise(function(resolve, reject) {
            self.onResolvedCallback.push(function(value) {
                try {
                    let x = onResolved(value)
                    if (x instanceof Promise) {
                        x.then(resolve, reject)
                    }
                    resolve(x);
                } catch (e) {
                    reject(e)
                }
            });

            self.onRejectedCallback.push(function(value) {
                try {
                    let x = onRejected(value)
                    if (x instanceof Promise) {
                        x.then(resolve, reject)
                    }
                } catch (e) {
                    reject(e)
                }
            });
        })
    }
}

Promise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected);
}