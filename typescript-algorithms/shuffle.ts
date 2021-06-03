import getRandom from "./GetRandom";

function shuffleInPlace<T>(array: T[]): T[] {
    if (array.length <= 1) return array;

    for (let i = 0; i < array.length; i++) {
        const randomChoiceIndex = getRandom(i, array.length - 1);

        [array[i], array[randomChoiceIndex]] = [array[randomChoiceIndex], array[i]];
    }

    return array;
}