// Array Methods 

// Add Elements 
const friends = ['hi','hello','vanakkam'];
console.log(friends);
friends.push('You'); //Last 

friends.unshift('me'); //First

//Remove Elements
friends.pop();
console.log(friends.pop()); //Last

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf('hi')); //To check the index value of the array.

friends.push(23);

console.log(friends.includes(23)); //If the value is include it will return as boolean.

if(friends.includes('hello')){
    console.log('You have that hello word.');
}


