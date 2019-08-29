/**
 * STRING MERGE
 */
var str1 = "Hello ";
var str2 = "world!";
var res = str1.concat(str2);
console.log("*** STRING MERGE ***")
console.log("first string :: ",str1);
console.log("Second string :: ",str2);
console.log("Merge String :: ",res)

/**
 * STRING SPLIT
 */
var str = "How are you doing today?";
var res = str.split(" ");
console.log("*** STRING SPLIT ***")
console.log("Before spliting :: ",str);
console.log("After spliting :: ",res);

/**
 * STRING SORT
 */
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("*** STRING SORT ***");
console.log("Before sorting :: ",fruits);
fruits.sort();
console.log("After sorting :: ",fruits);

/**
 * STRING SEARCH
 */
var str = "Hello Sheetal!";
var n = str.search("Sheetal");
console.log("String to be searched :: ",str);
console.log("Searched String :: ",n);

/**
 * STRING REPLACE
 */
var str = "Good Morining!";
var res = str.replace("Morining", "Night");
console.log("*** STRING REPLACE ***")
console.log("String Before replace :: ",str);
console.log("String after replace :: ",res)
