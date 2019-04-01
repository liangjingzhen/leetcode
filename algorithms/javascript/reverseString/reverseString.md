# Reverse String

> 编写一个函数，其作用是将输入的字符串反转过来。

```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var i = 0, j = s.length - 1;
    var arr = s.split("");
    while (i < j) {
        var tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
        i++;
        j--;
    }
    return arr.join("");
};
```