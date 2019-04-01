/**
 * 对角线遍历
 *
 * 给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。
 *
 * 示例:
 * 输入:
 * [
 * [ 1, 2, 3 ],
 * [ 4, 5, 6 ],
 * [ 7, 8, 9 ]
 * ]
 *
 * 输出:  [1,2,4,7,5,3,6,8,9]
 *
 * 说明:
 *     1. 给定矩阵中的元素总数不会超过 100000 。
 *
 * https://leetcode-cn.com/explore/learn/card/array-and-string/199/introduction-to-2d-array/774/
 */


// 解题思路：
//    1. 确定对角线遍历方向
//        元素下标和为偶数的时候，向上遍历；和为奇数的时候，向下遍历
//    2. 找到变换方向的条件
//        向上遍历时：达到上边界或者右边界
//        向下遍历时：达到左边界或者下边界
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
    if (matrix.length === 0) return [];
    var m = matrix[0].length, // M 列宽
        n = matrix.length, // N 行高
        up = true, // 是否向上遍历
        r = [];

    // 从左上角开始遍历
    var i = 0, // 列下标
        j = 0; // 行下标
    while (i < n && j < m) {
        r.push(matrix[i][j]);
        // 达到上边界或者右边界
        if ((i + j) % 2 === 0 && (i === 0 || j === (m - 1))) {
            up = false;
            // 先判断是否到达右边界，以免列下标越界
            if (j === (m - 1)) {
                i++;
            } else if (i === 0) {
                j++;
            }
            continue;
        }
        // 达到左边界或者下边界
        if ((i + j) % 2 === 1 && (j === 0 || i === (n - 1))) {
            up = !up;
            // 先判断是否到达右边界，以免行下标越界
            if (i === (n - 1)) {
                j++;
            } else if (j === 0) {
                i++;
            }
            continue;
        }
        if (up) {
            i--;
            j++;
        } else {
            i++;
            j--;
        }
    }
    return r;
};

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let numbers = findDiagonalOrder(matrix);
console.log(numbers);