// function printerError(s) {
//     const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
//     let count = 0;
//     for (const char of s) {
//         for (const el of arr) {
//             if (char === el) {
//                 count++;
//             }
//         }
//     }
//     return `${s.length - count}/${s.length}`;
// }

// function printerError(s) {
//     const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
//     let count = 0;

//     Array.of(s).forEach((char) =>{
//         arr
//     })
// }

function printerError(s) {
    const found = s.match(/[a-m]/g);
    return `${s.length - found.length}/${s.length}`;
}

let s = "aaabbbbhaijjjm";
console.log(printerError(s));