var Queue = /** @class */ (function () {
    function Queue(capacity) {
        if (capacity === void 0) { capacity = Infinity; }
        this.capacity = capacity;
        this._store = [];
    }
    Queue.prototype.push = function (val) {
        if (this.size() === this.capacity) {
            throw Error("Queue has reached its max capacity, you cannot add more values.");
        }
        this._store.push(val);
    };
    Queue.prototype.pop = function () {
        return this._store.shift();
    };
    Queue.prototype.size = function () {
        return this._store.length;
    };
    return Queue;
}());
