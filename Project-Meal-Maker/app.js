'use strict'

const menu = {
 _meal: '',
 _price: 0

  set meal(mealToCheck){
   if(typeof mealToCheck === 'string') {
    return this.meal = mealToCheck;
   }

 }
};

menu._meal = 8;
menu._price = "Pasta";
console.log(menu);
