'use strict';

const restaurent = {
    name : 'classico Italiano',
    location : 'Via Angelo Tavati 23, Fierenze, Italy',
    categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    StarterNebu : ['Focaccia', 'Bruscetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu : ['Pizza', ' Pasta', 'Risotto'],
    order : function(startIndex, secondIndex){
        return this.StarterNebu[startIndex],this.mainMenu[secondIndex]
    }
};

const arr = [1,2,3]
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a,b,c);
console.log(arr);

const [x,y,z] = arr;
console.log(x,y,z);
console.log(arr);

var [first,second] = restaurent.categories ;
console.log(first,second);

const [one, two]=restaurent.order(1,2)
console.log(one, two);

//Nested Array Destructuring
const nested = [10,11,12,[21,22,23],13];
const [i,j] = nested;
console.log(i,j);
