// 请编写一个函数，实现数组的去重。

let arr = [1, 1, 1, 1, 3, 4, 5, 6];

// 1
console.log(Array.from(new Set(arr)));

console.log([...new Set(arr)]);

// 2
function rmDuplicate(arr) {
  let map = new Map();
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      newArr.push(arr[i]);
      map.set(arr[i], 1);
    }
  }

  return newArr;
}

console.log(rmDuplicate(arr));

// 3
function sortFun(arr) {
  arr = arr.sort();
  var array = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      array.push(arr[i]);
    }
  }

  return array;
}

console.log(sortFun(arr));
