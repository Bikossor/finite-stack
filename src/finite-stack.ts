/**
 * A limitable LIFO data structure
 * @author André Lichtenthäler (Bikossor)
 * @license GPL-3.0
 */
class FiniteStack {
    Limit: number;
    Stack: any[];

    constructor(limit: number) {
        this.Limit = limit;
        this.Stack = new Array();
    }

    /**
     * Adds one ore more elements to the end of the `FiniteStack`
     * @param value The element(s) to add
     */
    push(value: any): void {
        if (this.Stack.length >= this.Limit) {
            this.Stack.shift();
        }

        this.Stack.push(value);
    }

    /**
     * Returns the last element from the `FiniteStack`
     */
    peek(): any {
        return this.Stack[this.Stack.length - 1];
    }

    /**
     * Returns and removes the last element from the `FiniteStack`
     */
    pop(): any {
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
    contains(searchElement: any, fromIndex: number): boolean {
        return this.Stack.indexOf(searchElement, fromIndex) > -1;
    }
}
