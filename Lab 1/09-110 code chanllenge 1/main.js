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
    scored :['van1','van2','van3','van4'],
    date :'06/01/2021',
    odds:{
        team1 : 1.33,
        x:3.25,
        team2:6.5,
    },

};
//1
const [players1,players2] = Game.players;
console.log(players1, players2);
//2
const [gk1, ...fieldPlayers1] = players1;
const [gk2, ...fieldPlayers2] = players2;
// console.log(gk1,fieldPlayers);
//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers); 
//4
const playersFinal1 = [...players1 , 'vant1', 'vant2', 'vant3'];
console.log(playersFinal1);
// 5
const {odds: { team1 , x:draw , team2}} = Game;
console.log(draw);


