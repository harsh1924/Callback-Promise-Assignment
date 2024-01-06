const person = {
    firstName: "Harsh",
    lastName: "Panwar",
    ageInYears: 22
};

function ageInDays(object, callback) {
    let fullName = `${object.firstName} ${object.lastName}`;
    let ageDays = object.ageInYears * 365;
    callback(fullName, ageDays);
};

function callback(fullName, ageDays) {
    console.log(`The full name of the person is ${fullName} and their age in days is ${ageDays}`);
};

let output = ageInDays(person, callback);
console.log(output);


// OUTPUT: The full name of the person is Harsh Panwar and their age in days is 8030