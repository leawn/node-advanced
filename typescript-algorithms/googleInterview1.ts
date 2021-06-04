const b = [ // blocks
    {
        "gym": false,
        "school": true, // the distance is 4 <- "gym" is i + 1, "school" is i, "store" is i + 4
        "store": false
    },
    {
        "gym": true,
        "school": false, // the distance is 3 <- "gym" is i, "school" is i - 1 / i + 1, "store" is i + 3
        "store": false
    },
    {
        "gym": true,
        "school": true, // the distance is 2 <- "gym" is i, "school" is i, "store" is i + 2
        "store": false
    },
    {
        "gym": false, // the best one for reqs = ["gym", "school", "store"]
        "school": true, // the distance is 1 <- "gym" is i - 1, "school" is i, "store" is i + 1
        "store": false
    },
    {
        "gym": false,
        "school": true, // the distance is 2 <- "gym" is i - 2, "school" is i, "store" is i
        "store": true
    }
];

const r = ["gym", "school", "store"]; // reqs

let d = {}; // distance should an object with distance property for each of the block

function findNear(p1: number, p2: string) {
    if (p1 === 0) { // p1 === 0 ???
        // iterate only the next ones
        checkAfter(p1, p2);
    } else if (p1 === b.length - 1){
        checkBefore(p1, p2);
    } else {
        checkBefore(p1, p2);
        checkAfter(p1, p2);
    }
}

function checkAfter(p1: number, p2: string) { // p1 is the index of the block, p2 is the req that we search for
    for (let i = p1 + 1; i <= b.length - 1; i++) {

        // b[i][p2] ?
        // i - p1 >= 0 ?
        // i - p1 > d[p1] ?
        // d[p1] = i - p1 :


        if (b[i][p2]) {
            if (i - p1 > 0) {
                if (i - p1 > d[p1]) {
                    d[p1] = i - p1
                    return
                }
            } else {
                if (p1 - i > d[p1]) {
                    d[p1] = p1 - i
                    return
                }
            }
        }
    }
}

function checkBefore(p1: number, p2: string) {
    for (let i = p1 - 1; i > -1 ; i--) {
        // b[i][p2] ?
        // i - p1 > d[p1] ?
        // d[p1] = i - p1 :
        // d[p1] :
        // d[p1]

        if (b[i][p2]) {
            if (i - p1 > 0) {
                if (i - p1 > d[p1]) {
                    d[p1] = i - p1
                    return
                }
            } else {
                if (p1 - i > d[p1]) {
                    d[p1] = p1 - i
                    return
                }
            }
        }
    }
}

function createD() {
    for (let z = 0; z <= b.length - 1; z++) { // now we have distance like that: "1: 0, 2: 0, 3: 0, ..."
        d[z] = 0;
    }
}

function findGreatestD() {
    let a: number[] = Object.keys(d).map(key => d[key]); // array
    let m = Math.min(...a); // minimum
    return a.indexOf(m);
}

function main() {
    createD();

    for (let i = 0; i <= b.length - 1; i++) {
        for (let j = 0; j <= r.length - 1; j++) {
            if (!b[i][r[j]]) { // if it is false, find where is true
                findNear(i, r[j]);
            }
            // if it is true, the max distance stays 0
        }
    }

    let s = findGreatestD(); // solution

    console.log(`The best home to live in is the ${s+1} one.`, b[s]);
}

main();

console.log(d);