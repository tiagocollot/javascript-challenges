const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },

  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },

  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },

  { first: 'Marie', last: 'Curie', year: 1867, passed: 1937 },

  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },

  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },

  { first: 'Max', last: 'Plank', year: 1858, passed: 1947 },

];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who where born in the 1500´ st
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <= 1599));
console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventory first and last namespace
const fullNames = inventors.map(inventor => inventor.first + ' ' + inventor.last);
// || const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const birthDate = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(birthDate);

// const birthDate = inventors.sort(function(a, b) {
//   if (a.year > b.year) {
//     return 1;
//   } else {
//     return -1
//   }
// });

// Array.prototype.reduce()
// 4. How many years did all the inventors live
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.table(totalYears);

// 5. Sort the inventors by years lived
const oldest = inventors.sort((a, b) => {
  const lastGuy = a.passed - a.year
  const nextGuy = b.passed - b.year
  return lastGuy > nextGuy ? -1 : 1;
  // if (lastGuy > nextGuy) {
  //   return -1;
  // } else {
  //   return 1;
  // }
});
console.table(oldest);

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https: //en.wikipedia.org/wiki/Category:Boulevards_In_Paris

// const people = ['Beck, Glen', 'Becker, Carl', 'Beckett, Samule', 'Beddoes, Mick', 'Beecher, Henry',
//   'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert',
//   'Benenson, Peter', 'Ben-Gurion, David', 'Benjamim, Walter', 'Benn, Tony',
//   'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric',
//   'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
//   'Bernhard, Sandra', ' Berra, Yogi', 'Berry, Hale', 'Berry, Wendell', 'Bethea, Erin',
//   'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve',
//   'Billings, Josh', 'Biondo, Frank', 'Birrel, Augustine', 'Black, Elk', 'Blair, Robert',
//   'Blair, Tony', 'Blake, William'
// ];

// 7. sort Exercise
//    Sort the people alphabetically by last name

// 8. Reduce Exercise