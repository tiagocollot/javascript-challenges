'use strict'

const menu = {
 _meal: '',
 _price: 0,

  set meal(mealToCheck){
   if(typeof mealToCheck === 'string') {
    return this._meal = mealToCheck;
   }
  },

  set price(priceToCheck){
   if(typeof priceToCheck === 'number') {
    return this._price = priceToCheck;
  }
 },

};

menu.meal = 'pasta';
menu.price = 10;
console.log(menu)
