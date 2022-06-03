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

  addplayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this.players.push(player);
  }
};
