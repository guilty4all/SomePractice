function lastSurvivor(letters, coords) {
    let str = letters.split("");
    coords.forEach((coord) => str.splice(coord, 1));
    return str.join("");
}

let letters = "zbk";
const coords = [0, 1];

console.log(lastSurvivor(letters, coords));