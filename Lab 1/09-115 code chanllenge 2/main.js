const Game = {
    team1 :'Van',
    team2 :'QVan',
    players:[[
        'van tm',
        'van 2',
        'van 3',
        'van 4',
        'van 5',
        'van 6',
        'van 7',
        'van 8',
        'van 9',
        'van 10',
        'van 11', 
    ],
    [
        'Qvan tm',
        'Qvan 2',
        'Qvan 3',
        'Qvan 4',
        'Qvan 5',
        'Qvan 6',
        'Qvan 7',
        'Qvan 8',
        'Qvan 9',
        'Qvan 10',
        'Qvan 11',
    ],
    ],
    score : '4:0 ',
    scored :['van1','van2','van3','van3'],
    date :'06/01/2021',
    odds:{
        team1 : 1.33,
        x:3.25,
        team2:6.5,
    },

};
//1
for(const [i,players] of Game.scored.entries()){
    console.log(`Goal: ${i+1}: '${players}` );
}
// console.log(Game.scored.entries());
// const goal = Object.entries(Game.scored);
// console.log(goal);

//2
var average = 0;
const odds = Object.values(Game.odds);
for(const odd of odds){
    average += odd;
}
average /= odds.length;   
console.log(average);

//3
for (const [team, odd] of Object.entries(Game.odds)) {
    const teamStr = team === 'x' ? 'hòa' : `thắng ${Game[team]}`;
    console.log(`Tỉ lệ  ${teamStr} ${odd}`);
}
// bonus
const scorers = {};
// console.log(Game.scored);
for (const player of Game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
    console.log(`${player}  : ${scorers[player]}`);
}


