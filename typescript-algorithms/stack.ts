interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size() : number;
}

class Stack<T> implements IStack<T> {
    private _store: T[] = [];

    constructor(private capacity: number = Infinity) {}

    push(val: T): void {
        if (this.size() === this.capacity) {
            throw Error("Stack reached max capacity, you cannot add more values.");
        }
        this._store.push(val);
    }

    pop(): T | undefined {
        return this._store.pop();
    }

    peek(): T | undefined {
        return this._store[this.size() - 1];
    }

    size() : number {
        return this._store.length;
    }
}