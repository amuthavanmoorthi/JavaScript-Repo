'use strict';

const restaurent = {
    name : 'classico Italiano',
    location : 'Via Angelo Tavati 23, Fierenze, Italy',
    categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    StarterNebu : ['Focaccia', 'Bruscetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu : ['Pizza', ' Pasta', 'Risotto'],
    // order : function(startIndex, secondIndex){
    //     return this.StarterNebu[startIndex],this.mainMenu[secondIndex]
    // }
    book : function(first, second, third){
        return this.categories[first]+this.StarterNebu[second]+this.mainMenu[third];
    },
    openingHours: {
        thu : {
            open : 12,
            close : 22
        },
        fri : {
            open : 11,
            close : 23
        },
        sat : {
            open : 0, //opens 24 hours
            close : 24
        }
    },
    orderDelivery : function({time = 1,address, first, second, third}){
        console.log(`Hey you, Order Received! ${this.categories[first]} , ${this.StarterNebu[second]} and ${this.mainMenu[third]} order will deliver ${address} at ${time}. ---- Thank You!`);
    },
    orderPasta : function(ing1, ing2, ing3){
        console.log(`Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`);
    }
};

//We can use spread operator for object also
const newCopy = { since : 1210, founder:'amudhavan', ...restaurent};
newCopy.name = 'Cappicino to coffee!';
console.log(restaurent.name);
console.log(newCopy.name);
console.log(newCopy);

// const ingrediants = [prompt(`Let's make pasta Enter Ingredients 1`),prompt(`Enter Ingredients 2`),prompt(`Enter Ingredients 3`)]
// console.log(ingrediants);
// restaurent.orderPasta(...ingrediants)

//Copy Array 
const MainMenuCopy = [...restaurent.mainMenu];
console.log(MainMenuCopy);

//Add 2 array in 1
const twoArray = [...restaurent.mainMenu, ...restaurent.categories];
console.log(twoArray);

//Iterable = Array , Strings, Maps, Sets. (Not Object)
const str = 'amudhavan';
const strChar = [...str];
console.log(strChar);


//****************************************************************************************************** */

// restaurent.orderDelivery({
//     time : '19:00',
//     address : 'saravanmpatti',
//     first : 1,
//     second : 1, 
//     third : 1
// })
// restaurent.orderDelivery({
//     address : 'saravanmpatti',
//     first : 1,
//     second : 1, 
//     third : 1
// })

                                                //Object Destructuring

// const {name, categories, openingHours} = restaurent ;
// console.log(name, categories, openingHours);

//to set new variable name for object keys
// const {name : restaurentName , categories : Menu, openingHours: hours} = restaurent;
// console.log(restaurentName,Menu, hours);

//To set default values
// const {menus = [], StarterNebu : starters = []} = restaurent;
// console.log(menus,starters);

//Mutating variable
// let a = 111;
// let b = 222;
// const obj = {a:2,b:3};
// ({a,b} = obj);    // Token error for javascript wants code block so return error.
// console.log(a,b);

//Nested Object destructuring
// const {thu : {open :openTime, close : closeTime}} = openingHours;
// console.log(openTime, closeTime);
// console.log(open, close);


//*********************************************************************************************************** */
                                            //Array Destructuring
//object over array function
// console.log(restaurent.book(0,0));

//nested array destructuring
// let nesteds = [1,4,5,[5,6,7,9]]
// let [l, , ,k] = nesteds;
// console.log(l,k);

// const arr = [1,2,3]
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// console.log(a,b,c);
// console.log(arr);

// const [x,y,z] = arr;
// console.log(x,y,z);
// console.log(arr);

// var [first,second] = restaurent.categories ;
// console.log(first,second);

// const [one, two]=restaurent.order(1,2)
// console.log(one, two);

// //Nested Array Destructuring
// const nested = [10,11,12,[21,22,23],13];
// const [i,j] = nested;
// console.log(i,j);
