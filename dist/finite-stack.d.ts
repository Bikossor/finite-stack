/**
 * A limitable LIFO data structure
 * @author André Lichtenthäler (Bikossor)
 * @license GPL-3.0
 */
declare class FiniteStack {
    Limit: number;
    Stack: any[];
    constructor(limit: number);
    /**
     * Adds one ore more elements to the end of the `FiniteStack`
     * @param value The element(s) to add
     */
    push(value: any): void;
    /**
     * Returns the last element from the `FiniteStack`
     */
    peek(): any;
    /**
     * Returns and removes the last element from the `FiniteStack`
     */
    pop(): any;
    /**
     * Empty the `FiniteStack`
     */
    clear(): void;
    /**
     * Checks if the `FiniteStack` contains a specific value
     * @param searchElement The value to search for
     * @param fromIndex The index at which to begin to search for
     */
    contains(searchElement: any, fromIndex: number): boolean;
}
