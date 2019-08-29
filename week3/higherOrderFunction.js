/**
 * A Higher-Order function is a function that receives a 
 * function as an argument or returns the function as output.
 */
const birthYear = [1975, 1997, 2002, 1995, 1985];
const ages = birthYear.map(year => 2018 - year);
console.log(ages);