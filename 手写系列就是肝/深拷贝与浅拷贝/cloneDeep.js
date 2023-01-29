// 深拷贝的原理总结
// 1. 深拷贝就是创建一个新的对象，新建一个内存地址，和原来的值相互不影响
// 2. 深拷贝需要考虑Map、Set、数组的数据类型
// 3. 深拷贝是一个深度的递归

// 面试够用版
function cloneDeep (obj) {
    if (obj instanceof Object) {
        let result = Object.prototype.toString.call(obj) === '[object Array]' ? [] : {};
        for (let i in obj) {
            result[i] = obj[i].constructor === Object ? cloneDeep(obj[i]) : obj[i];
        }
        return result;
    } else {
        return obj;
    }
}

// 克隆完整版
function cloneDeep (target, map = new WeakMap()) {
    // 排除一些非对象的情况，例如null或者非对象的情况，直接返回值
    if (target == null || typeof target !== 'object') {
        return target;
    }
    // 解决循环引用的问题，优先去存储空间里面找对应的对象有没有被拷贝过
    if (map.get(target)) {
        return map.get(target);
    }
    let cloneTarget = Array.isArray(target) ? [] : {};
    map.set(target, cloneTarget);

    //处理map
    if (target instanceof Map) {
        cloneTarget = new Map();
        target.forEach((v,k) => {
            cloneTarget.set(k, cloneDeep(v, map));
        })
    }

    //处理set
    if (target instanceof Set) {
        cloneTarget = new Set();
        target.forEach((v, k) => {
            const v1 = cloneDeep(v, map);
            cloneTarget.add(v1);
        });
    }

    //处理Array
    if (target instanceof Array) {
        cloneTarget = target.map(v => cloneDeep(v, map));
    }

    for(let k in obj) {
        let v1 = cloneDeep(target[k], map);
        cloneTarget[k] = v1;
    }

    return cloneTarget;
}