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
        "school": true, // the distance is <- "gym" is i - 2, "school" is i, "store" is i
        "store": true
    }
];

const r = ["gym", "school", "store"]; // reqs

let d = {}; // distance should an object with distance property for each of the block

for (let i = 0; i <= b.length - 1; i++) {
    for (let j = 0; j <= r.length - 1; j++) {
        if (!b[i][r[j]]) { // if it is false, find where is true if it is true then set the distance to 0
            findNear(i, r[j]);
        }
    }
}

function findNear(p1: number, p2: string) {
    if (p1 <= 0) { // p1 === 0 ???
        // iterate only the next ones
        for (let i = 1; i <= b.length - 1; i++) {
            //if ()
        }
    } else {
        // first look the ones before, then the ones after
    }
}

function checkAfter(p1: number, p2: string) { // p1 is the index of the block, p2 is the req that we search for
    for (let i = p1 + 1; i <= b.length - 1; i++) {
        b[i][p2] ?
        i - p1 > d ?
        d = i - p1 :
        d :
        d
    }
}

function checkBefore(p1) {
    for (let i = p1 - 1; i > -1 ; i--) {}
}