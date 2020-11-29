"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A limitable LIFO data structure
 * @author André Lichtenthäler (Bikossor)
 * @license GPL-3.0
 */
var FiniteStack = /** @class */ (function () {
    function FiniteStack(limit) {
        this.limit = limit;
        this.stack = new Array();
        this.length = 0;
    }
    Object.defineProperty(FiniteStack.prototype, "items", {
        get: function () {
            return this.stack;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds one ore more elements to the end of the `FiniteStack`
     * @param value The element(s) to add
     */
    FiniteStack.prototype.push = function (value) {
        if (this.length >= this.limit) {
            this.stack.shift();
        }
        this.length = this.stack.push(value);
    };
    /**
     * Returns the last element from the `FiniteStack`
     */
    FiniteStack.prototype.peek = function () {
        return this.stack[this.length - 1];
    };
    /**
     * Returns and removes the last element from the `FiniteStack`
     */
    FiniteStack.prototype.pop = function () {
        this.length--;
        return this.stack.pop();
    };
    /**
     * Empty the `FiniteStack`
     */
    FiniteStack.prototype.clear = function () {
        this.stack = new Array();
        this.length = 0;
    };
    /**
     * Checks if the `FiniteStack` contains a specific value
     * @param searchElement The value to search for
     * @param fromIndex The index at which to begin to search for
     */
    FiniteStack.prototype.contains = function (searchElement, fromIndex) {
        return this.stack.indexOf(searchElement, fromIndex) > -1;
    };
    return FiniteStack;
}());
exports.FiniteStack = FiniteStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluaXRlLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Zpbml0ZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0dBSUc7QUFDSDtJQVNJLHFCQUFZLEtBQWE7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFSRCxzQkFBVyw4QkFBSzthQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQVFEOzs7T0FHRztJQUNILDBCQUFJLEdBQUosVUFBSyxLQUFRO1FBQ1QsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDM0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QjtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsMEJBQUksR0FBSjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7T0FFRztJQUNILHlCQUFHLEdBQUg7UUFDSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsMkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDhCQUFRLEdBQVIsVUFBUyxhQUFnQixFQUFFLFNBQWlCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUExREQsSUEwREM7QUExRFksa0NBQVcifQ==