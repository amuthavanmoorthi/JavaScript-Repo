'use strict';
const weekdays = ["monday","tuesday","wednesday","thursday","friday"];
const openingHours = {
    [weekdays[3]] : {
        open : 12,
        close : 22
    },
    [weekdays[0]] :{
        open : 11,
        close : 23
    },
    friday : {
        open : 0, //opens 24 hours
        close : 24
    }
};

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
    //Before ES6 
    // hours : openingHours,
    //After ES6
    openingHours,
    //Before ES6 we declare function in object like this
    orderDelivery : function({time = 1,address, first, second, third}){
        console.log(`Hey you, Order Received! ${this.categories[first]} , ${this.StarterNebu[second]} and ${this.mainMenu[third]} order will deliver ${address} at ${time}. ---- Thank You!`);
    },
    //After ES6 
    orderPasta(ing1, ing2, ing3){
        console.log(`Here is your delicious pasta with ${ing1},${ing2} and ${ing3}`);
    },
    orderPizza(mainIngrediants, ...otherIngrediants){
        console.log(mainIngrediants,otherIngrediants);
    }
};
//************************************* LOOPING OBJECT KEY AND VALUES ******************************** */
// //Property Names
// const openSts = Object.keys(openingHours);
// let openStr = `We are open on ${openSts.length} days :`
// for (const day of openSts){
//     openStr += `${day},`
// }
// console.log(openStr);

// //Property Values
// console.log(Object.values(openingHours));

// //Property Entries 
const Entry = Object.entries(openingHours)

//[Key , Value]
for (const [propy,{open, close}] of Entry){
    console.log(`On ${propy} We open at${open} and close at ${close}`);
}

//*************************************** OPTIONAL CHAINING (_.) *************************** */

//If we use optional (?) we won't get cannot read propoerty error in our console.
// if(restaurent.openingHours && restaurent.openingHours.wednesday)
// console.log(restaurent.openingHours.wednesday.open);

//With optional chaining
// console.log(restaurent.openingHours.wednesday?.open); //Here wednesday is optional
// console.log(restaurent.openingHours?.wednesday?.open); //Both used both optional

//Example
// const days = ["monday","tuesday","wednesday","thursday","friday"];
// for (const day of days){
//     const open = restaurent.openingHours[day]?.open ?? "closed";
//     console.log(`On ${day} we open at ${open}`);
// }

//Example's in Methods
// console.log(restaurent.book?.(1,2,3)?? "Method doesn't exist"); //To check the method is there are not.
// console.log(restaurent.Bookdetails?.(1,2,3)?? "Method doesn't exist"); //To check the method is there are not.

// Example's in Array 
// const users = [{name : "kummar", age : 20}];
// console.log(users[0].name ?? 'user name not available');
// console.log(users[1]?.name ?? 'user name not available');


//***************************************Enhanced Object Literals********************* */
//Just checking purpose
// const ingrediants = ["mushrrom","onion","tomoto"];
// restaurent.orderPasta(ingrediants[0],ingrediants[1],ingrediants[2])

//********************************* LOOPING ARRAY THE FOR-OF-LOOP ******************************* */
//This basically we do in for loop
// for (let i=0; i<restaurent.StarterNebu.length; i++){
//     // console.log(restaurent.StarterNebu[i]);
// }

// //Here is the for of loop
// // for(const item of restaurent.StarterNebu) console.log(item);

// //in for of loop have method to print the index value that called entries
// const forIter = [...restaurent.StarterNebu,...restaurent.categories]
// for(const item of forIter.entries()) {
//     // console.log(item);
// }

// //To print seperately in entries()
// for(const [index, elemet] of forIter.entries()){
//     console.log(`${index + 1} = ${elemet}`);
// }

// ********************************  LOGICAL ASSIGNMENT OPERATOR  ****************************
// const rest1 = {
//     name : 'kovai',
// numGuests : 20,
// }

// const rest2 = {
//     name : 'SS hydrabad',
//     owner : 'Kandhaswamy',
// }

// //OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// // Nullish Assignment operator (NUll or Undefined ah irundha falsy 0 or '' ah irundha truthy)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// //AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1,rest2);

//************************** NULLISH COLEASING OPERATOR ****************************** */
// Nullish : null and undefined (NOT 0 or '')
// restaurent.numGuests = ' ';
// const guestCorrect = restaurent.numGuests ?? 10;
// console.log(guestCorrect);

//**********************************SHORT CIRCUTING (&& AND ||)**************************************** */
// console.log("amudhavan" || 'amudhavan');  // amudhavan
// console.log('undefined' || null); //undiefined will print cox that is string
// console.log(undefined || null);  //null - here nothing is truthy value so last will print.
// console.log(undefined || null || 0 || 1 || 'hello');  //First value will return here.
// restaurent.guest = "1 guest";
// const guest = restaurent.guest? restaurent.guest : "guest illai";
// console.log(guest); // 1 guest

//                     //------------ AND ------------
// console.log(0 && "amudhavan"); // 0 coz it's false, and will return if there is falsy value immedietly that will return that.
// console.log(7 && 'amudhavan'); //amudhavan both are tru so it will return last value.
// console.log('hello' && 23 && null && 'You'); //null it will return falsy 

// if(restaurent.orderPizza){
//    console.log(restaurent.orderPizza('maida', 'bun'));
// }
// console.log(restaurent.orderPizza && restaurent.orderPizza('onion', 'cheese'));

//*********************************   REST PATTERN AND PARAMETERS ********************************* */
// basically rest operator is when we destructuring the array we can use.
// const [pizza, ,...otherFood] = [...restaurent.categories, restaurent.StarterNebu]
// console.log(pizza,otherFood);

//REST operator bcoz ... syntax in the left of the equal sign =
// const [a,b, ...others] = [1,23,3,4,,56,2]
// console.log(a,b,others);    

//Rest in object
// const{thursday,...otherDays} = restaurent.openingHours;
// console.log(thursday,otherDays);

        //Function
// function add(...numbers){
//     // console.log(numbers);
//     let sum = 0;
//     for (let i=0; i<numbers.length; i++) {sum+=numbers[i];}
//     console.log(sum);
// }
// add(1,2);
// add(1,2,3,45);
// add(2312321);
// const x = [1,2,3,4,56,7]
// add(...x);

// restaurent.orderPizza("Mushroom", "Onion", "Tomoto", "Cheese");
// restaurent.orderPizza(...x)

//******************************   SPREAD OPERATOR (...) ************************************ */

//We can use spread operator for object also
// const newCopy = { since : 1210, founder:'amudhavan', ...restaurent};
// newCopy.name = 'Cappicino to coffee!';
// console.log(restaurent.name);
// console.log(newCopy.name);
// console.log(newCopy);

// const ingrediants = [prompt(`Let's make pasta Enter Ingredients 1`),prompt(`Enter Ingredients 2`),prompt(`Enter Ingredients 3`)]
// console.log(ingrediants);
// restaurent.orderPasta(...ingrediants)

//Copy Array 
// const MainMenuCopy = [...restaurent.mainMenu];
// console.log(MainMenuCopy);

//Add 2 array in 1
// const twoArray = [...restaurent.mainMenu, ...restaurent.categories];
// console.log(twoArray);

//Iterable = Array , Strings, Maps, Sets. (Not Object)
// const str = 'amudhavan';
// const strChar = [...str];
// console.log(strChar);


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
