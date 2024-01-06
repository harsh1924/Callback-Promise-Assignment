let array = [14, 22, 36, 46];

function double(array, calllbackFnc) {
    return calllbackFnc(array);
}

function calllbackFnc(array) {
    let doubleArray = array.map((element) => element * 2 );
    return doubleArray;
}
let doubledArray = double(array,calllbackFnc);
console.log(doubledArray);

// OUTPUT: [ 28, 44, 72, 92 ]