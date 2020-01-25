class FiniteStack {
    constructor(limit) {
        this.Limit = limit;
        this.Stack = new Array();
    }

    push(value) {
        if (this.Stack.length >= this.Limit) {
            this.Stack.shift();
        }

        this.Stack.push(value);
    }

    peek() {
        return this.Stack[this.Stack.length - 1];
    }

    pop() {
        return this.Stack.pop();
    }

    clear() {
        this.Stack = new Array();
    }

    contains(searchElement, fromIndex) {
        return this.Stack.indexOf(searchElement, fromIndex) > -1;
    }
}
