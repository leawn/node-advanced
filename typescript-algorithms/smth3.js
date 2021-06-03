function biggestPair(a) {
    var biggest = 0;
    for (var i = 0; i <= a.length - 2; i++) {
        a[i] + a[i + 1] > biggest ? biggest = a[i] + a[i + 1] : biggest;
    }
    return biggest;
}
console.log(biggestPair([1, 2, 4, 6, 9]));
