/**
 * A limitable LIFO data structure
 * @author André Lichtenthäler (Bikossor)
 * @license GPL-3.0
 */
export class FiniteStack<T> {
    limit: number;
    stack: T[];

    constructor(limit: number) {
        this.limit = limit;
        this.stack = new Array<T>();
    }

    /**
     * Adds one ore more elements to the end of the `FiniteStack`
     * @param value The element(s) to add
     */
    push(value: T): void {
        if (this.stack.length >= this.limit) {
            this.stack.shift();
        }

        this.stack.push(value);
    }

    /**
     * Returns the last element from the `FiniteStack`
     */
    peek(): T {
        return this.stack[this.stack.length - 1];
    }

    /**
     * Returns and removes the last element from the `FiniteStack`
     */
    pop(): T {
        return this.stack.pop();
    }

    /**
     * Empty the `FiniteStack`
     */
    clear(): void {
        this.stack = new Array();
    }

    /**
     * Checks if the `FiniteStack` contains a specific value
     * @param searchElement The value to search for
     * @param fromIndex The index at which to begin to search for
     */
    contains(searchElement: T, fromIndex: number): boolean {
        return this.stack.indexOf(searchElement, fromIndex) > -1;
    }
}
