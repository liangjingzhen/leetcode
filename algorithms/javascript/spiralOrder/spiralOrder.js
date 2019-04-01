/**
 * 螺旋矩阵
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 *
 * 示例 1:
 *
 * 输入:
 * [
 * [ 1, 2, 3 ],
 * [ 4, 5, 6 ],
 * [ 7, 8, 9 ]
 * ]
 * 输出: [1,2,3,6,9,8,7,4,5]
 * 示例 2:
 *
 * 输入:
 * [
 * [1, 2, 3, 4],
 * [5, 6, 7, 8],
 * [9,10,11,12]
 * ]
 * 输出: [1,2,3,4,8,12,11,10,9,5,6,7]
 */

/**
 * 解题思路：
 * 1.找到前进的拐点
 *     因为顺时针旋转，所以都是向右拐弯
 *     当前进的方向上，下一个元素已经访问过或到达边界，那么需要进行一次旋转
 * 2.确定终点
 *      到达拐点，而且旋转后第一个元素已经访问
 *      或者，访问过的元素计数到达最大值
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let res = [];
    if (matrix.length > 0) {
        let row = matrix.length,
            column = matrix[0].length,
            t = row + column - 1;

        let m = 0, n = 0, next = 0;
        while (next < t) {
            res.push(matrix[m][n]);
            matrix[m][n] = NaN;

            if (n )
            i++;
        }


    }
    return res;
};