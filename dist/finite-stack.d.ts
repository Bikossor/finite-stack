declare class FiniteStack {
    Limit: any;
    Stack: any[];
    constructor(limit: any);
    push(value: any): void;
    peek(): any;
    pop(): any;
    clear(): void;
    contains(searchElement: any, fromIndex: any): boolean;
}
