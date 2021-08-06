function alphabetWar(fight) {
    const war = {
        r: {
            m: 4,
            q: 3,
            d: 2,
            z: 1,
        },
        l: {
            w: 4,
            p: 3,
            b: 2,
            s: 1,
        },
    };

    let rSide = 0;
    let lSide = 0;
    let strArr = fight.split("");
    for (let el of strArr) {
        if (Object.keys(war.r).includes(el)) {
            rSide += war.r[el];
        } else {
            if (Object.keys(war.l).includes(el)) {
                lSide += war.l[el];
            }
        }
    }
    if (rSide === lSide) {
        return "Let's fight again!";
    } else if (rSide > lSide) {
        return "Right side wins!";
    } else {
        return "Left side wins!";
    }
}

let fight = "zdqmwpbs";
console.log(alphabetWar(fight));