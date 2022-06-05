// !### Team-Stats
Pushing a new object
'use strict';

const teams = {
  _players: [
    { firstName: "Pete", lastName: "Wheeler", age: 4 },
    { firstName: "Katrina", lastName: "ler", age: 5 },
    { firstName: "Te", lastName: "Whee", age: 54 }
  ],

  _games: [
    { opponent: "skywalker", teamPoints: 10, opponentPoints: -7 },
    { opponent: "tina", teamPoints: 7, opponentPoints: 97 },
    { opponent: "skyker", teamPoints: 1, opponentPoints: 7 }
 ],

  get players() {
 return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer (newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this.players.push(player);
  },

   addGame (newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    }
    this.games.push(game);
  }
};


  teams.addPlayer('Bugs', "Bunny", 76);
  console.log(teams.players);

  teams.addGame('Titans', 100, 98);
  console.log(teams.games);
