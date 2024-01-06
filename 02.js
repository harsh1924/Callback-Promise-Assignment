function manipulateString(string, callback){
    let newString = string.toUpperCase();
    callback(newString);
}

function logString(str){
    console.log(`The new string is ${str}`);
}

let newString = manipulateString("onepiece", logString);
console.log(newString);

// OUTPUT: The new string is ONEPIECE