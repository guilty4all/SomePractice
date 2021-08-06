// function accum(s) {
//     let result = "";
//     for (let i = 0; i < s.length; i++) {
//         result += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + "-";
//     }
//     return result.slice(0, result.length - 1);
// }

//Best Practices

function accum(s) {
    return s
        .split("")
        .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
        .join("-");
}

let s = "ZpglnRxqenU";
console.log(accum(s));