'use strict';


// Function Declaration S

// document.write(age(20));

function age(yourage){
    return 2023- yourage;
}


// function exprression 

const age1 = function age(yourage){
    return 2023- yourage;
}

// document.write(age1(24));

// The Difference between these is we invoke the function before declara the function declaration 


// Arrow Function 

const age3 = birth => birth - 2023;
// document.write(age3(20));

const age4 = (birth,name) => {
   console.log( birth - 2023);
   const goal = `You are ${name} win!`;
   return goal;
};
// document.write(age4(20, 'amudhavan'));
// document.write(age4(25, 'prasanth hari'));
// document.write(age4(27, 'aravind,mani, kamesh'));