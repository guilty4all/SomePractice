// function thirt(n) {
//     let num = n;
//     let arr = [1, 10, 9, 12, 3, 4];
//     while (true) {
//         let temp = num;
//         let strN = num.toString().split("").reverse().map(Number);
//         num = 0;
//         for (let i = 0; i < strN.length; i++) {
//             num += strN[i] * arr[i % 6];
//         }
//         if (temp === num) break;
//     }
//     return num;
// }

//Best practice
function thirt(n) {
    const nums = [1, 10, 9, 12, 3, 4];
    var sum = ("" + n)
        .split("")
        .reverse()
        .reduce((sum, v, i) => sum + v * nums[i % nums.length], 0);
    return sum === n ? n : thirt(sum);
}

let n = 1234567;
console.log(thirt(n));