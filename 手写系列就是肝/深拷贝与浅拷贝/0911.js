// 实现一个深拷贝

// 深拷贝：深度拷贝->深度复制->开辟一个新的内存，将原来对象的值复制一份存放在该内存中，与原来的值相互不影响

// 最简单的深拷贝,利用JSON对象操作, 弊端：无法复制函数
function cloneDeep1(targetObj) {
  return JSON.parse(JSON.stringify(targetObj));
}

// 面试够用版
function cloneDeep2(targetObj) {
  if (targetObj instanceof Object) {
    let result =
      Object.prototype.toString.call(targetObj) === "[Object Array]" ? [] : {};
    for (let i in targetObj) {
      result[i] =
        targetObj[i] === Object ? cloneDeep2(targetObj[i]) : targetObj[i];
      return result;
    }
  } else {
    return targetObj;
  }
}

// 增强版
// 考虑set、map相关的结构
// 解决循环引用的问题

function cloneDeep3(targetObj, cloneMap = new WeakMap()) {
  // 排除被拷贝的值为null或其它一些特殊情况
  if (targetObj === null || typeof targetObj !== "object") {
    return targetObj;
  }

  // 如果被拷贝的值存在cloneMap中，则直接拿map里面的值
  if (cloneMap.get(targetObj)) {
    return cloneMap.get(targetObj);
  }

  // 判断被拷贝的值是数组还是对象
  let cloneTarget = Array.isArray(targetObj) ? [] : {};
  cloneMap.set(targetObj, cloneTarget);

  // 处理map
  if (targetObj instanceof Map) {
    cloneTarget = new Map();
    targetObj.forEach((v, k) => {
      cloneTarget.set(k, cloneDeep3(v, cloneMap));
    });
  }

  // 处理set
  if (targetObj instanceof Set) {
    cloneTarget = new Set();
    targetObj.forEach((v) => {
      const v1 = cloneDeep3(v, cloneMap);
      cloneTarget.add(v1);
    });
  }

  if (Array.isArray(targetObj)) {
    cloneTarget = targetObj.map((v) => cloneDeep3(v, cloneMap));
  }

  for (let k in targetObj) {
    let cloneValue = cloneDeep3(targetObj[k], cloneMap);
    cloneTarget[k] = cloneValue;
  }

  return cloneTarget;
}


let test1 = {
  value: new Map()
};

cloneDeep3(test1);
