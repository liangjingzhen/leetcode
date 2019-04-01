# 1比特与2比特字符

> [source](https://leetcode-cn.com/problems/1-bit-and-2-bit-characters/)

有两种特殊字符。第一种字符可以用一比特0来表示。第二种字符可以用两比特(10 或 11)来表示。

现给一个由若干比特组成的字符串。问最后一个字符是否必定为一个一比特字符。给定的字符串总是由0结束。

输入条件：
- 1 <= len(bits) <= 1000.
- bits[i] 总是0 或 1.
```js
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    var li = bits.length - 1;
    var i = 0;
    for ( ; i < li; ) {
        var s = bits[i];
        if (s === 1) {
            i += 2;
        } else {
            i += 1;
        }
    }
    // 判断最终的索引有没有超过输入的最大索引
    // 如果超过了，说明最后一次执行的是 s===1，可以判断为两比特字符
    // 否则就是一比特字符
    return i === li;
};
```

别人提交的一种很巧妙的解法：
```js
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let n = bits.length - 1;
    if (n < 1)
        return true;
    for (let i = n - 1; i >= 0; i--) {
        if (bits[i] == 0) {
            return ((n - i) & 1) === 1;
        }
    }
    return ((n - 1) & 1) === 1;
};
```

分析：  
因为`0`既可以存在于一比特字符，也可以存在于二比特字符中，不会影响最后的判断，所以只需要通过尾部连续的`1`（不包括最后的`0`）的数量就可以得出结论。  
又因为`1`一定是存在于二比特字符中的，因此当`1`的数量为奇数时，最后一个字符一定是二比特字符；否则，当`1`的数量为偶数时，最后一个字符一定是一比特字符。


