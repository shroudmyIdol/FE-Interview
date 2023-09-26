// 请编写一个函数，判断一个字符串是否是回文字符串。

function isPalindrome(s) {
  let first = 0;
  let end = s.length - 1;

  while (first < end) {
    if (s.charAt(first) !== s.charAt(end)) {
        return false;
    };
    
    ++first;
    --end;
  }

  return true;
}