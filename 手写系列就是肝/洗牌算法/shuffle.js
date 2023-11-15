/**
 * 给定一个数组进行洗牌算法
 * arr: [1,2,3,4,5]
 * arr: [5,1,4,3,2]
 */

// 洗牌，从前往后换
function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex =
      i + 1 + Math.floor(Math.random() * (arr.length - i - 2));
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
}

// 洗牌，从后往前换
function shuffle1(arr) {
  for (let i = arr.length - 1; i > 0; --i) {
    const randomIndex = Math.floor(Math.random() * i);
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
}

// 洗牌，随机打乱
function shuffle2() {
  const arr = [1, 2, 3, 4, 5];
  const newArr = [];
  while (arr.length > 0) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    newArr.push(arr[randomIndex]);
    arr.splice(randomIndex, 1);
  }
  return newArr;
}

let arr = [1, 2, 3, 4, 5];

console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
