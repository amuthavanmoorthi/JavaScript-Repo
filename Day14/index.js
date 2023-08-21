// Array 
let friends = ['me','music','book'];
console.log(friends);

// Another way of array 
const Y = new Array ('111','222','333');
console.log(Y);

console.log(Y[2]);
console.log(friends.length);
console.log(friends[friends.length-1]);

// friends = ['he','jos','as'];

const calAge = function (BirthYear){
    return 2022 - BirthYear;
}
const years = [2202, 3303, 4004];

console.log(calAge(years[0]));
console.log(calAge(years[1]));
console.log(calAge(years[years.length-1]));

ages = [calAge(years[0]),calAge(years[1]),calAge(years[2]),calAge(years[years.length-1])];

console.log(ages);