function decodeMorse(morseCode) {
    return morseCode
        .split("   ") // get word code 3 spaces apart
        .map((word) =>
            word
            .split(" ") // get character code 1 spaces apart
            .map((character) => MORSE_CODE(character)) // decode Morse code character
            .join("")
        )
        .join(" ") // add spaces between words
        .trim();
}

let morseCode = "···· · −·−−   ·−−− ··− −·· ·";
console.log(decodeMorse(morseCode));