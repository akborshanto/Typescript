"use strict";
{
    //nullabvle || unknown || never types
    const searchName = (value) => {
        if (value) {
            console.log('seracjtomg');
        }
        else {
            console.log('there is nottsa');
        }
    };
    searchName("null");
    /* unknown */
    const getSpped = (value) => {
        if (typeof value === 'number') {
            const convertedSpped = (value * 1000);
            console.log(convertedSpped);
        }
    };
    getSpped(1000);
}
