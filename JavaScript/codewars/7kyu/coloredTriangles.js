// function triangle(row) {
//     let arr = row.split("");
//     let i = 0;

//     while (arr.length > 1) {
//         if (arr[i] === arr[i + 1] && arr[i] + arr[i + 1] !== "GG") {
//             arr.shift();
//             i += 1;
//             console.log(arr[i] + arr[i + 1]);
//             console.log(arr);
//             continue;
//         } else if (arr[i] + arr[i + 1] === "GG") {
//             arr.splice(i, 1, "G");
//             i += 1;
//             console.log(arr[i] + arr[i + 1]);
//             console.log(arr);
//             continue;
//         } else if (arr[i] + arr[i + 1] === "BG") {
//             arr.splice(i, 1, "R");
//             console.log(arr);
//             i += 1;
//             console.log(arr[i] + arr[i + 1]);
//             continue;
//         } else if (arr[i] + arr[i + 1] === "RG") {
//             arr.splice(i, 1, "B");
//             i += 1;
//             console.log(arr[i] + arr[i + 1]);
//             console.log(arr);
//             continue;
//         } else if (arr[i] + arr[i + 1] === "BR") {
//             arr.splice(i, 1, "G");
//             i += 1;
//             console.log(arr[i] + arr[i + 1]);
//             console.log(arr);
//             continue;
//         }
//     }
//     return arr[0];
// }

function triangle(row) {
    let arr = row.split("");
    let newArr = [];
    const m = new Map();
    m.set("B", 0);
    m.set("R", 1);
    m.set("G", 2);
    console.log(m.get("B"));

    while (arr.length !== 1) {
        for (let i = 0; i < arr.length;) {
            if (arr[i] === arr[i + 1]) {
                newArr.push(arr[i]);
                i += 1;
                continue;
            } else {
                let res = 3 - (m.get(arr[i]) + m.get(arr[i + 1]));
                if (res === 2) {
                    newArr.push("G");
                    i++;
                    continue;
                }
                if (res == 0) {
                    newArr.push("B");
                    i++;
                    continue;
                }
                if (res == 1) {
                    newArr.push("R");
                    i++;
                    continue;
                }
            }
        }
        arr = newArr;
        console.log(arr);
        newArr = [];
    }
    return arr[0];
}
const row = "RRGBRGBB";
triangle(row);