// function partlist(arr) {
//     let resArr = [];
//     let firstStr = "";
//     let secondStr = "";
//     let count = arr.length;
//     for (let i = 0; i < count; i++) {
//         if (arr.length < 2) {
//             break;
//         }
//         if (resArr !== []) {
//             firstStr += " " + arr.shift();

//             console.log(firstStr);
//             secondStr = arr.join(" ");
//             resArr.push([firstStr, secondStr]);
//         } else {
//             firstStr += arr.shift().trim();
//             secondStr = arr.join(" ");
//             resArr.push([firstStr, secondStr]);
//         }
//     }
//     return resArr;
// }

// best pratice
function partlist(arr) {
    return arr
        .map((v, i) => [arr.slice(0, i).join(" "), arr.slice(i).join(" ")])
        .slice(1);
}

let arr = ["I", "wish", "I", "hadn't", "come"];

console.log(partlist(arr));