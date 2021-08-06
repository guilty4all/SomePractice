// function battle(x, y) {
//     let str = "ABCDIFGHIJKLMNOPQRSTUVWXYZ";
//     let countX = x
//         .split("")
//         .map((char) => str.indexOf(char))
//         .reduce((a, b) => a + b);
//     let countY = y
//         .split("")
//         .map((char) => str.indexOf(char))
//         .reduce((a, b) => a + b);

//     return countY > countX ? y : countX > countY ? x : "Tie!";
// }

//Best practice

function battle(x, y) {
    let countX = x.split("").reduce((a, b) => a + (b.charCodeAt() - 64), 0);
    let countY = y.split("").reduce((a, b) => a + (b.charCodeAt() - 64), 0);
    return countX > countY ? x : countY > countX ? y : "Tie!";
}

let x = "ONE";
let y = "TWO";
console.log(battle(x, y));