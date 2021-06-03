var Stack = /** @class */ (function () {
    function Stack(capacity) {
        if (capacity === void 0) { capacity = Infinity; }
        this.capacity = capacity;
        this._store = [];
    }
    Stack.prototype.push = function (val) {
        if (this.size() === this.capacity) {
            throw Error("Stack reached max capacity, you cannot add more values");
        }
        this._store.push(val);
    };
    Stack.prototype.pop = function () {
        return this._store.pop();
    };
    Stack.prototype.peek = function () {
        return this._store[this.size() - 1];
    };
    Stack.prototype.size = function () {
        return this._store.length;
    };
    return Stack;
}());
