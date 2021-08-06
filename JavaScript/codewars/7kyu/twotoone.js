function longest(s1, s2) {
    let charSet = new Set(s1 + s2);
    return Array.from(charSet).sort().join("");
}

let s1 = "xyaabbbccccdefww";
let s2 = "xxxxyyyyabklmopq";

console.log(longest(s1, s2));