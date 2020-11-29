/**
 * A limitable LIFO data structure
 * @author André Lichtenthäler (Bikossor)
 * @license GPL-3.0
 */
export class FiniteStack<T> {
    limit: number;
    private _stack: T[];
    length: number;

    public get items(): Array<T> {
        return this._stack;
    }

    constructor(limit: number) {
        this.limit = limit;
        this._stack = new Array<T>();
        this.length = 0;
    }

    /**
     * Adds one ore more elements to the end of the `FiniteStack`
     * @param value The element(s) to add
     */
    push(value: T): void {
        if (this.length >= this.limit) {
            this._stack.shift();
        }

        this.length = this._stack.push(value);
    }

    /**
     * Returns the last element from the `FiniteStack`
     */
    peek(): T {
        return this._stack[this.length - 1];
    }

    /**
     * Returns and removes the last element from the `FiniteStack`
     */
    pop(): T {
        this.length--;
        return this._stack.pop();
    }

    /**
     * Empty the `FiniteStack`
     */
    clear(): void {
        this._stack = new Array();
        this.length = 0;
    }

    /**
     * Checks if the `FiniteStack` contains a specific value
     * @param searchElement The value to search for
     * @param fromIndex The index at which to begin to search for
     */
    contains(searchElement: T, fromIndex: number): boolean {
        return this._stack.indexOf(searchElement, fromIndex) > -1;
    }
}
