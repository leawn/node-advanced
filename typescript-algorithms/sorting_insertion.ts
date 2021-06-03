function insertionSort<T>(
    array: T[],
    cmp: { (a: T, b: T): number } = (a: any, b: any) => a - b
): T[] {
    var current: T;
    let j: number;
    for (let i = 1; i < array.length; i++) {
        current = array[i];
        j = i - 1;
        while (j >= 0 && cmp(array[j], current) > 0) {
            array[j+1] = array[j];
            j -= 1;
        }
        array[j+1] = current;
    }
    return array;
}

console.log(insertionSort([1, 2, 4, -12, 5, 0, 1]));