"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A limitable LIFO data structure
 * @author André Lichtenthäler (Bikossor)
 * @license GPL-3.0
 */
var FiniteStack = /** @class */ (function () {
    function FiniteStack(limit) {
        this._limit = limit;
        this._items = new Array();
        this._length = 0;
    }
    Object.defineProperty(FiniteStack.prototype, "limit", {
        get: function () {
            return this._limit;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FiniteStack.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FiniteStack.prototype, "length", {
        get: function () {
            return this._length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds one element to the end of the `FiniteStack`
     * @param value The element(s) to add
     */
    FiniteStack.prototype.push = function (value) {
        if (this._length >= this._limit) {
            this._items.shift();
        }
        this._length = this._items.push(value);
    };
    /**
     * Returns the last element from the `FiniteStack`
     */
    FiniteStack.prototype.peek = function () {
        return this._items[this._length - 1];
    };
    /**
     * Returns and removes the last element from the `FiniteStack`
     */
    FiniteStack.prototype.pop = function () {
        this._length--;
        return this._items.pop();
    };
    /**
     * Empty the `FiniteStack`
     */
    FiniteStack.prototype.clear = function () {
        this._items = new Array();
        this._length = 0;
    };
    /**
     * Checks if the `FiniteStack` contains a specific value
     * @param searchElement The value to search for
     * @param fromIndex The index at which to begin to search for
     */
    FiniteStack.prototype.contains = function (searchElement, fromIndex) {
        return this._items.indexOf(searchElement, fromIndex) > -1;
    };
    return FiniteStack;
}());
exports.FiniteStack = FiniteStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluaXRlLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Zpbml0ZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0dBSUc7QUFDSDtJQWlCSSxxQkFBWSxLQUFhO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBaEJELHNCQUFXLDhCQUFLO2FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsOEJBQUs7YUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVywrQkFBTTthQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQVFEOzs7T0FHRztJQUNILDBCQUFJLEdBQUosVUFBSyxLQUFRO1FBQ1QsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN2QjtRQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVEOztPQUVHO0lBQ0gsMEJBQUksR0FBSjtRQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7T0FFRztJQUNILHlCQUFHLEdBQUg7UUFDSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsMkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDhCQUFRLEdBQVIsVUFBUyxhQUFnQixFQUFFLFNBQWlCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFsRUQsSUFrRUM7QUFsRVksa0NBQVcifQ==