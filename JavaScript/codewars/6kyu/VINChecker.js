// const checkVin = (vin) => {
//     const regex = /([A-H]|[J-N]|[P]|[R-Z]|[0-9]){17}/;
//     const chars = "ABCDEFGHJKLMNPRSTUVWXYZ";
//     const nums = "12345678123457923456789";
//     const weight = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];
//     let sum = 0;
//     if (regex.test(vin)) {
//         let str = vin.split("");
//         for (let i = 0; i < str.length; i++) {
//             if (isNaN(str[i])) {
//                 for (let j = 0; j < chars.length; j++) {
//                     if (str[i] === chars[j]) {
//                         sum += Number(nums[j]) * weight[i];
//                     }
//                 }
//             } else {
//                 sum += Number(str[i]) * weight[i];
//             }
//         }
//         console.log(sum % 11);
//         return Number(str[8]) === sum % 11 || (str[8] === "X" && sum % 11 === 10);
//     }
//     return false;
// };

//Best practice

const checkVin = (vin) => {
    // Ensure (1) all characters are uppercase
    // (2) 'I', 'O', and 'Q' are not present
    // (3) length is 17
    if (!/^[A-HJ-NPR-Z0-9]{17}$/.test(vin)) return false;

    const decoder = {
        A: 1,
        B: 2,
        C: 3,
        D: 4,
        E: 5,
        F: 6,
        G: 7,
        H: 8,
        J: 1,
        K: 2,
        L: 3,
        M: 4,
        N: 5,
        P: 7,
        R: 9,
        S: 2,
        T: 3,
        U: 4,
        V: 5,
        W: 6,
        X: 7,
        Y: 8,
        Z: 9,
    };

    const weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];

    const sum = vin.split("").reduce((acc, cur, idx) => {
        const val = isNaN(cur) ? decoder[cur] : cur;
        return acc + val * weights[idx];
    }, 0);

    const modulo = sum % 11;
    const checkDigit = vin[8]; // the 9th digit
    return modulo === 10 ? checkDigit == "X" : checkDigit == modulo;
};

let vin = "5YJ3E1EAXHF000347";
console.log(checkVin(vin));