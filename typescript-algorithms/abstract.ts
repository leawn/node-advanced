abstract class Collection<T> {
    protected _store: T[] = [];

    size(): number {
        return this._store.length;
    }

    abstract isFull(): boolean;
}

interface IStack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size() : number;
}

class StackCollection<T> extends Collection<T> implements IStack<T> {
    constructor(private capacity: number = Infinity) {
        super();
    }

    push(val: T): void {
        if (this.isFull()) {
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

    isFull(): boolean {
        return this.capacity === this.size();
    }
}

// #########################################

interface IQueue<T> {
    push(item: T): void;
    pop(): T;
    size(): number;
}

class QueueCollection<T> extends Collection<T> implements IQueue<T> {
    constructor(private capacity: number = Infinity) {
        super();
    }

    push(val: T): void {
        if (this.isFull()) {
            throw Error("Queue has reached its max capacity, you cannot add more values.");
        }
        this._store.push(val);
    }

    pop(): T | undefined {
        return this._store.shift();
    }

    isFull(): boolean {
        return this.capacity === this.size();
    }
}