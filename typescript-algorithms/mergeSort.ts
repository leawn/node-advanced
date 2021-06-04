function mergeSort(list, l, r) {
    if (l === undefined || r === undefined) {
        mergeSort(list, 0, list.length - 1);
        return;
    }
    if (l >= r) return;
    let m = Math.floor(l + (r - l) / 2);
    mergeSort(list, l, m);
    mergeSort(list, m + 1, r);
    merge(list, l, m, r);
}

function merge(list, l, m, r) {
    let res = list.slice(l, r + 1);
    let i1 = l;
    let i2 = m + 1;
    let i = l;

    while (i1 <= m && i2 <= r) {
        const v1 = res[i1 - l];
        const v2 = res[i2 - l];

        if (v1 < v2) {
            list[i++] = v1;
            ++i1;
        } else {
            list[i++] = v2;
            ++i2;
        }
    }

    while (i1 <= m) list[i++] = res[i1++ - l];
    while (i2 <= m) list[i++] = res[i2++ - l];
}