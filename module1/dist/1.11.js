"use strict";
{
    //'ternery' | Otional Chaingh | nulish coalescing
    // npm i ts-node-dev --save-dev
    const age = 13;
    if (age >= 18) {
        console.log("aduld");
    }
    else {
        console.log('not adult');
    }
    //ternury
    const isAdult = age >= 18 ? "adult" : "not Adult";
    //nulissing coalescing opertior
    //null /undifined ==> descision make it.
    const iaAuth = null;
    const result1 = iaAuth !== null && iaAuth !== void 0 ? iaAuth : "GUEST";
}
