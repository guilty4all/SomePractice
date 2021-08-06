// function solution(str) {
//     let result = [];
//     for (let i = 0; i <= str.length - 1; i++) {
//         if (str.length % 2 !== 0 && i === str.length - 1) {
//             result.push(str[i] + "_");
//         } else {
//             result.push(str[i] + str[i + 1]);
//             i += 1;
//         }
//     }
//     return result;
// }

//Best Practice

function solution(str) {
    var i = 0;
    var result = new Array();
    if (str.length % 2 !== 0) {
        str = str + "_";
    }
    while (i < str.length) {
        result.push(str[i] + str[i + 1]);
        i += 2;
    }
    return result;
}

let str = "abc";
console.log(solution(str));