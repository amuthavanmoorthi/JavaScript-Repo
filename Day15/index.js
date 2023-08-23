// const years = [111,222,333,444];
// const age =[];

// for (let i=0; i<years.length; i++){
//     // const yeah =(`This is years ${years[i]}`);
//     // console.log(yeah);
// age.push(years[i]);
    
// }
// console.log("This is age",age);

const me=[
     'amudhavan',
    20,
    'trichy',
     100
]

// console.log("---ONLY STRING---");

// for (let i = 0; i<me.length; i++){
//     if(typeof me[i] !== 'string') continue; //it will print only a string value.

//     console.log(me[i], typeof me[i]);
// }

// console.log("---ONLY NUMBER---");

// for (let i = 0; i<me.length; i++){
//     if(typeof me[i] === 'number') break; //It will break the loop when the number will come.

//     console.log(me[i], typeof me[i]);
// }

for (let i=me.length-1; i<=0; i--){
    console.log(i,me[i]);
}
