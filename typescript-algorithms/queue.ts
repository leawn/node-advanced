interface IQueue<T> {
    push(item: T): void;
    pop(): T;
    size(): number;
}

class Queue<T> implements IQueue<T> {
    private _store: T[] = [];

    constructor(private capacity: number = Infinity) {}

    push(val: T): void {
        if (this.size() === this.capacity) {
            throw Error("Queue has reached its max capacity, you cannot add more values.");
        }
        this._store.push(val);
    }

    pop(): T | undefined {
        return this._store.shift();
    }

    size(): number {
        return this._store.length;
    }
}