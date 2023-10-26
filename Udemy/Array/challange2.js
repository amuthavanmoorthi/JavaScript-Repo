///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
//1
const names =  Object.values(game.scored) ;
const Index =  Object.entries(game.scored) ;
// console.log(Index);
// console.log(names);
for (const [goalsNum, name] of Index){
    console.log(`Goal ${goalsNum + 1}: ${name}`);
}  

//1.1
for (const [i, player] of game.scored.entries()) console.log(`Goal ${i +1} : ${player}`);

//2
let sum = 0;
const odds = Object.values(game.odds);
// for(let oddValue of odds){
//     sum += oddValue;
//     console.log(oddValue);
// }
// const avg = sum/odds.length ;
// console.log(avg);

//2.2
for(let odd of odds) sum+= odd;
sum /= odds.length;
console.log(sum);

//3
const t1Name = Object.values(game.team1);
const t2Name = Object.values(game.team2);
const t1Odd = Object.values(game.odds.team1);
const draw = Object.values(game.odds.team2);
const t2odd = Object.values(game.odds.x);
console.log(`Odd of victory ${t1Name} : ${t1Odd}`);
console.log(`Odd of draw ${draw}`);
console.log(`Odd of victory ${t2Name} : ${t2odd}`);

//3.3
for(const [team, odd] of Object.entries(game.odds)){
    // console.log(team);
    const teamStr = team === 'x' ? "draw" : `Victory ${game[team]}`
    // console.log(team);
    // console.log(game[team]);
    console.log(`Odd of ${teamStr} ${odd}`);
}

