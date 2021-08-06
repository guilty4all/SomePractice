var isPalindrome = function(x) {
    let y = x.toString().split("").reverse().join("");
    return x === Number(y);
};

let x = 10;

console.log(isPalindrome(x));