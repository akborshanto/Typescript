"use strict";
{ //learningh
    //normal fun
    //arrow function
    function modules(num1, num2 = 10) {
        return num1 + num2;
    }
    modules(1, 1);
    { /* arraow */ }
    const arrow = (num3, num4) => num3 + num4;
    arrow(1, 2);
    //object --> function -->method
    const poorUser = {
        name: "mezba",
        balance: 0,
        addBalance(balance) {
            return `    my name is functin :${this.balance + balance}`;
        }
    };
    /* maping */
    const arr = [1, 4, 5, 6];
    const newArray = arr.map((elem) => elem * elem);
}
