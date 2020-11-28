/**
 * A limitable LIFO data structure
 * @author André Lichtenthäler (Bikossor)
 * @license GPL-3.0
 */
class FiniteStack<T> {
    Limit: number;
    Stack: T[];

    constructor(limit: number) {
        this.Limit = limit;
        this.Stack = new Array<T>();
    }

    /**
     * Adds one ore more elements to the end of the `FiniteStack`
     * @param value The element(s) to add
     */
    push(value: T): void {
        if (this.Stack.length >= this.Limit) {
            this.Stack.shift();
        }

        this.Stack.push(value);
    }

    /**
     * Returns the last element from the `FiniteStack`
     */
    peek(): T {
        return this.Stack[this.Stack.length - 1];
    }

    /**
     * Returns and removes the last element from the `FiniteStack`
     */
    pop(): T {
        return this.Stack.pop();
    }

    /**
     * Empty the `FiniteStack`
     */
    clear(): void {
        this.Stack = new Array();
    }

    /**
     * Checks if the `FiniteStack` contains a specific value
     * @param searchElement The value to search for
     * @param fromIndex The index at which to begin to search for
     */
    contains(searchElement: T, fromIndex: number): boolean {
        return this.Stack.indexOf(searchElement, fromIndex) > -1;
    }
}
