/**
 * A limitable LIFO data structure
 * @author André Lichtenthäler (Bikossor)
 * @license GPL-3.0
 */
export class FiniteStack<T> {
    private _limit: number;
    private _items: T[];
    private _length: number;

    public get limit(): number {
        return this._limit;
    }

    public get items(): Array<T> {
        return this._items;
    }

    public get length(): number {
        return this._length;
    }

    constructor(limit: number) {
        this._limit = limit;
        this._items = new Array<T>();
        this._length = 0;
    }

    /**
     * Adds one element to the end of the `FiniteStack`
     * @param value The element(s) to add
     */
    push(value: T): void {
        if (this._length >= this._limit) {
            this._items.shift();
        }

        this._length = this._items.push(value);
    }

    /**
     * Returns the last element from the `FiniteStack`
     */
    peek(): T {
        return this._items[this._length - 1];
    }

    /**
     * Returns and removes the last element from the `FiniteStack`
     */
    pop(): T {
        this._length--;
        return this._items.pop();
    }

    /**
     * Empty the `FiniteStack`
     */
    clear(): void {
        this._items = new Array();
        this._length = 0;
    }

    /**
     * Checks if the `FiniteStack` contains a specific value
     * @param searchElement The value to search for
     * @param fromIndex The index at which to begin to search for
     */
    contains(searchElement: T, fromIndex: number): boolean {
        return this._items.indexOf(searchElement, fromIndex) > -1;
    }
}
