function sumOfIntegersInString(s) {
    const arr = s.match(/\d{1,100}/g);
    return arr.reduce((a, b) => Number(a) + Number(b));
}

const s = "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog";

console.log(sumOfIntegersInString(s));