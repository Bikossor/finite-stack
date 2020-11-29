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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluaXRlLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Zpbml0ZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0dBSUc7QUFDSDtJQUtJLHFCQUFZLEtBQWE7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7O09BR0c7SUFDSCwwQkFBSSxHQUFKLFVBQUssS0FBUTtRQUNULElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdEI7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7T0FFRztJQUNILDBCQUFJLEdBQUo7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCx5QkFBRyxHQUFIO1FBQ0ksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRDs7T0FFRztJQUNILDJCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw4QkFBUSxHQUFSLFVBQVMsYUFBZ0IsRUFBRSxTQUFpQjtRQUN4QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBdERELElBc0RDO0FBdERZLGtDQUFXIn0=