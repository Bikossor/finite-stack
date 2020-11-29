/**
 * A limitable LIFO data structure
 * @author André Lichtenthäler (Bikossor)
 * @license GPL-3.0
 */
export declare class FiniteStack<T> {
    limit: number;
    stack: T[];
    constructor(limit: number);
    /**
     * Adds one ore more elements to the end of the `FiniteStack`
     * @param value The element(s) to add
     */
    push(value: T): void;
    /**
     * Returns the last element from the `FiniteStack`
     */
    peek(): T;
    /**
     * Returns and removes the last element from the `FiniteStack`
     */
    pop(): T;
    /**
     * Empty the `FiniteStack`
     */
    clear(): void;
    /**
     * Checks if the `FiniteStack` contains a specific value
     * @param searchElement The value to search for
     * @param fromIndex The index at which to begin to search for
     */
    contains(searchElement: T, fromIndex: number): boolean;
}
