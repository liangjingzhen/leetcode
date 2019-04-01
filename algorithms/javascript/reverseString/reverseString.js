/**
 * 编写一个函数，其作用是将输入的字符串反转过来。
 *
 * https://leetcode-cn.com/explore/learn/card/array-and-string/201/two-pointer-technique/783/
 *
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var i = 0, j = s.length - 1;
    // var arr = s.split("");
    var arr = s;
    while (i < j) {
        var tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
        i++;
        j--;
    }
    return arr.join("");
};

let s = ["h","e","l","l","o"];
console.log(reverseString(s));