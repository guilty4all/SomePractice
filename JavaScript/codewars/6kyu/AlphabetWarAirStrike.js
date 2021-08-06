// function alphabetWar(fight) {
//     const rSide = "zdqm";
//     const lSide = "sbpw";
//     let rCount = 0;
//     let lCount = 0;
//     let wField = fight.split("");
//     for (let i = 0; i < fight.length; i++) {
//         if (/[zdqm]/.test(fight[i])) {
//             if (fight[i + 1] !== "*" && fight[i - 1] !== "*") {
//                 rCount += rSide.indexOf(fight[i]) + 1;
//             }
//         } else if (/[sbpw]/.test(fight[i])) {
//             if (fight[i + 1] !== "*" && fight[i - 1] !== "*") {
//                 lCount += lSide.indexOf(fight[i]) + 1;
//             }
//         } else if (fight[i] === "*") {
//             wField[i - 1] = "_";
//             wField[i] = "_";
//             wField[i - 1] = "_";
//         }
//     }
//     return lCount > rCount ?
//         "Left side wins!" :
//         rCount > lCount ?
//         "Right side wins!" :
//         "Let's fight again!";
// }

// best practice

function alphabetWar(fight) {
    fight = fight.replace(/[a-z]\*[a-z]|[a-z]\*|\*[a-z]/g, "");
    var l = 0;
    var r = 0;
    fight
        .split("")
        .forEach((i) => ("1sbpw".indexOf(i) > 0 ? (l += "1sbpw".indexOf(i)) : l));
    fight
        .split("")
        .forEach((j) => ("1zdqm".indexOf(j) > 0 ? (r += "1zdqm".indexOf(j)) : r));
    if (l == r) {
        return "Let's fight again!";
    }
    return l > r ? "Left side wins!" : "Right side wins!";
}

//Another one

const map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };

function alphabetWar(fight) {
    var res = fight
        .replace(/[^*]?\*[^*]?/g, "")
        .split("")
        .reduce((a, b) => a + (map[b] || 0), 0);
    return res ?
        (res < 0 ? "Left" : "Right") + " side wins!" :
        "Let's fight again!";
}

let fight = "zz*zzs";

console.log(alphabetWar(fight));