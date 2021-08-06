// function scale(strng, k, n) {
//     let result = "";
//     let str = "";
//     for (let char of strng) {
//         if (char !== "\n") {
//             str += char.repeat(k);
//         } else {
//             for (let i = 0; i < n; i++) {
//                 result += str + "\n";
//             }
//             str = "";
//         }
//     }
//     return result;
// }

function scale(strng, k, n) {
    let result = "";
    let str = "";
    if (strng === "") return "";
    let arr = strng.split("\n");
    for (let s of arr) {
        for (let char of s) {
            str += char.repeat(k);
        }
        result += `${str}\n`.repeat(n);
        str = "";
    }
    return result.slice(0, result.length - 1);
}

let strng = "Kj\nSH";
let k = 1;
let n = 2;

console.log(scale(strng, k, n));