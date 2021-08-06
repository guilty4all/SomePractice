function matrix(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i][i] < 0) {
            array[i][i] = 0;
        } else {
            array[i][i] = 1;
        }
    }
    return array;
}

let array = [
    [-1, 4, -5, -9, 3, 4],
    [6, -4, -7, 4, -5, 9],
    [3, 5, 0, -9, -1, -2],
    [1, 5, -7, -8, -9, 0],
    [-3, 2, 1, -5, 6, 7],
    [-3, 2, 1, -5, 6, 7],
];

console.log(matrix(array));