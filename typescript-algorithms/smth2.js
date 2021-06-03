function mixedFractionToImproper(a) {
    return [a[0] * a[2] + 1, a[2]];
}
console.log(mixedFractionToImproper([3, 1, 2]));
console.log(mixedFractionToImproper([6, 5, 13]));
