/**
 * 最长公共前缀
 *
 * https://leetcode-cn.com/explore/learn/card/array-and-string/200/introduction-to-string/781/
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * 示例 1:
 *
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 示例 2:
 *
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 说明:
 *
 * 所有输入只包含小写字母 a-z 。
 *
 * 解题思路：
 * 第一种：对每个字符串的相同位置的字符进行比较，直到找到最长的公共子串。为了减少比较次数，以最短的字符串长度为上限。
 * 第二种：取第一个字符串（或最短的那个）为初始公共前缀，然后与其余的字符串逐个比较。如果其他字符串都包含这个串，则返回当前字符串；否则，将公共字符串长度减一，重复前面的比较，直接长度为零。
 *
 * 下面实现第一种解法。
 *
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
    let len = strs.length;
    let pre = "";
    if (len === 1) {
        pre = strs[0];
    } else if (len > 1) {
        let i = 0, p = 0, premax = strs[0].length;
        for (let t = 1; t < strs.length; t++) {
            premax = Math.min(premax, strs[t].length);
        }
        while (p < premax) {
            let c = strs[i][p];
            for (i = 1; i < len; i++) {
                if (strs[i][p] !== c) {
                    return pre;
                }
            }
            pre += c;
            i = 0;
            p++;
        }

    }
    return pre;
};

let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));

strs = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs));