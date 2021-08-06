//regex

// function isValidIP(str) {
//     const regex =
//         /^(?=\d+\.\d+\.\d+\.\d+$)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\.?){4}$/;
//     return str === str.match(regex)[0];
// }

//best Practices

const net = require("net");
const isValidIP = (s) => net.isIP(s);

//Another one to

function isValidIP(str) {
    return (
        str.split(".").filter(function(v) {
            return v == Number(v).toString() && Number(v) < 256;
        }).length == 4
    );
}

let str = "12.255.56.1";
console.log(isValidIP(str));