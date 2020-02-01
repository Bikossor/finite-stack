var FiniteStack = /** @class */ (function () {
    function FiniteStack(limit) {
        this.Limit = limit;
        this.Stack = new Array();
    }
    FiniteStack.prototype.push = function (value) {
        if (this.Stack.length >= this.Limit) {
            this.Stack.shift();
        }
        this.Stack.push(value);
    };
    FiniteStack.prototype.peek = function () {
        return this.Stack[this.Stack.length - 1];
    };
    FiniteStack.prototype.pop = function () {
        return this.Stack.pop();
    };
    FiniteStack.prototype.clear = function () {
        this.Stack = new Array();
    };
    FiniteStack.prototype.contains = function (searchElement, fromIndex) {
        return this.Stack.indexOf(searchElement, fromIndex) > -1;
    };
    return FiniteStack;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluaXRlLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2Zpbml0ZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUdJLHFCQUFZLEtBQUs7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELDBCQUFJLEdBQUosVUFBSyxLQUFLO1FBQ04sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdEI7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsMEJBQUksR0FBSjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQseUJBQUcsR0FBSDtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsMkJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsOEJBQVEsR0FBUixVQUFTLGFBQWEsRUFBRSxTQUFTO1FBQzdCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUEvQkQsSUErQkMifQ==