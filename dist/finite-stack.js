"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A limitable LIFO data structure
 * @author André Lichtenthäler (Bikossor)
 * @license GPL-3.0
 */
var FiniteStack = /** @class */ (function () {
    function FiniteStack(limit) {
        this.Limit = limit;
        this.Stack = new Array();
    }
    /**
     * Adds one ore more elements to the end of the `FiniteStack`
     * @param value The element(s) to add
     */
    FiniteStack.prototype.push = function (value) {
        if (this.Stack.length >= this.Limit) {
            this.Stack.shift();
        }
        this.Stack.push(value);
    };
    /**
     * Returns the last element from the `FiniteStack`
     */
    FiniteStack.prototype.peek = function () {
        return this.Stack[this.Stack.length - 1];
    };
    /**
     * Returns and removes the last element from the `FiniteStack`
     */
    FiniteStack.prototype.pop = function () {
        return this.Stack.pop();
    };
    /**
     * Empty the `FiniteStack`
     */
    FiniteStack.prototype.clear = function () {
        this.Stack = new Array();
    };
    /**
     * Checks if the `FiniteStack` contains a specific value
     * @param searchElement The value to search for
     * @param fromIndex The index at which to begin to search for
     */
    FiniteStack.prototype.contains = function (searchElement, fromIndex) {
        return this.Stack.indexOf(searchElement, fromIndex) > -1;
    };
    return FiniteStack;
}());
exports.FiniteStack = FiniteStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluaXRlLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Zpbml0ZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0dBSUc7QUFDSDtJQUlJLHFCQUFZLEtBQWE7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBSyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7O09BR0c7SUFDSCwwQkFBSSxHQUFKLFVBQUssS0FBUTtRQUNULElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsMEJBQUksR0FBSjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCx5QkFBRyxHQUFIO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRDs7T0FFRztJQUNILDJCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw4QkFBUSxHQUFSLFVBQVMsYUFBZ0IsRUFBRSxTQUFpQjtRQUN4QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBbERELElBa0RDO0FBbERZLGtDQUFXIn0=