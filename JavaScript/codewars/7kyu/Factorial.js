//Recusive solution

// function factorial(n) {
//     return n <= 1 ? 1 : n * factorial(n - 1);
// }

function factorial(n) {
    if (n < 0 || n > 12) throw new RangeError("Range must be between 0 and 12");
    return n > 1 ? n * factorial(n - 1) : 1;
}
//Simple solution

// function factorial(num) {
//     let sum = 1;
//     for (let i = 1; i <= num; i++) sum *= i;
//     return sum;
// }

let n = 12;
console.log(factorial(n));