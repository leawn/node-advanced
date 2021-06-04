var b = [
    {
        "gym": false,
        "school": true,
        "store": false
    },
    {
        "gym": true,
        "school": false,
        "store": false
    },
    {
        "gym": true,
        "school": true,
        "store": false
    },
    {
        "gym": false,
        "school": true,
        "store": false
    },
    {
        "gym": false,
        "school": true,
        "store": true
    }
];
var r = ["gym", "school", "store"]; // reqs
var d = {}; // distance should an object with distance property for each of the block
function findNear(p1, p2) {
    if (p1 === 0) { // p1 === 0 ???
        // iterate only the next ones
        checkAfter(p1, p2);
    }
    else if (p1 === b.length - 1) {
        checkBefore(p1, p2);
    }
    else {
        checkBefore(p1, p2);
        checkAfter(p1, p2);
    }
}
function checkAfter(p1, p2) {
    for (var i = p1 + 1; i <= b.length - 1; i++) {
        // b[i][p2] ?
        // i - p1 >= 0 ?
        // i - p1 > d[p1] ?
        // d[p1] = i - p1 :
        if (b[i][p2]) {
            if (i - p1 > 0) {
                if (i - p1 > d[p1]) {
                    d[p1] = i - p1;
                    return;
                }
            }
            else {
                if (p1 - i > d[p1]) {
                    d[p1] = p1 - i;
                    return;
                }
            }
        }
    }
}
function checkBefore(p1, p2) {
    for (var i = p1 - 1; i > -1; i--) {
        // b[i][p2] ?
        // i - p1 > d[p1] ?
        // d[p1] = i - p1 :
        // d[p1] :
        // d[p1]
        if (b[i][p2]) {
            if (i - p1 > 0) {
                if (i - p1 > d[p1]) {
                    d[p1] = i - p1;
                    return;
                }
            }
            else {
                if (p1 - i > d[p1]) {
                    d[p1] = p1 - i;
                    return;
                }
            }
        }
    }
}
function createD() {
    for (var z = 0; z <= b.length - 1; z++) { // now we have distance like that: "1: 0, 2: 0, 3: 0, ..."
        d[z] = 0;
    }
}
function findGreatestD() {
    var a = Object.keys(d).map(function (key) { return d[key]; }); // array
    var m = Math.min.apply(Math, a); // minimum
    return a.indexOf(m);
}
function main() {
    createD();
    for (var i = 0; i <= b.length - 1; i++) {
        for (var j = 0; j <= r.length - 1; j++) {
            if (!b[i][r[j]]) { // if it is false, find where is true
                findNear(i, r[j]);
            }
            // if it is true, the max distance stays 0
        }
    }
    var s = findGreatestD(); // solution
    console.log("The best home to live in is the " + (s + 1) + " one.", b[s]);
}
main();
console.log(d);
