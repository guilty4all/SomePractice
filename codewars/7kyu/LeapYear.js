// function isLeapYear(year) {
//     if (year % 4 === 0) {
//         if (year % 100 !== 0) {
//             return true;
//         } else if (year % 400 === 0) {
//             return true;
//         } else {
//             return false;
//         }
//     } else {
//         return false;
//     }
// }

//Best practice

function isLeapYear(year) {
    return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}

let year = 1234;
console.log(isLeapYear(year));