// function insurance(age, size, numofdays) {
//     if (numofdays < 0) return 0;
//     let result = 0;
//     let m = new Map([
//         ["age", 25],
//         ["economy", 0],
//         ["medium", 10],
//         ["full-size", 15],
//     ]);

//     result += age < 25 ? 10 * numofdays : 0;
//     return result + (m.get(size) || 15) * numofdays + numofdays * 50;
// }

//Best Practices:
function insurance(age, size, numofdays) {
    let ageCharge = age < 25 ? 10 : 0;
    let sizeCharge = size === "economy" ? 0 : size === "medium" ? 10 : 15;
    return numofdays < 0 ? 0 : (50 + ageCharge + sizeCharge) * numofdays;
}

let age = 30;
let size = "full-size";
let numofdays = 30;
console.log(insurance(age, size, numofdays));