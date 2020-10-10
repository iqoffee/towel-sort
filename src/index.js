// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix == undefined || matrix == "") {
        return [];
    }
    let count = 0;
    let matrix2 = [];
    for (i of matrix) {
        if (count === 0 || count % 2 === 0) {
            matrix2.push(i);
            count++;
        } else {
            matrix2.push(i.reverse());
            count++;
        }
    }
    return matrix2
        .join()
        .split(",")
        .map((a) => Number(a));
};
