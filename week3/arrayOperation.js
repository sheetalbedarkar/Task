/**
 * ARRAY MERGE
 */
var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var children = hege.concat(stale);
console.log("*** ARRAY MERGE ***")
console.log("first array :: ",hege);
console.log("Second array :: ",stale);
console.log("Merge array :: ",children);

/**
 * ARRAY SPLICE
 */
var example = ['A', 'B', 'C', 'D'];
console.log("*** ARRAY SPLICE ***")
console.log("Array before operation :: ",example)
example.splice(2, 0, 'E');       // remove 0 item, and insert 'E' at 2-index 
console.log("Insert a element in array :: ",example);
var copy = example.splice(2, 1); // remove 1 item at 2-index postion, return the deleted item
console.log("Remove a element in array :: ",copy);
console.log("Array after removing a element :: ",example);

/**
 * ARRAY SPLIT
 */
var str = "How are you doing today?";
var res = str.split(" ");
console.log("*** ARRAY SPLIT ***")
console.log("Before spliting :: ",str);
console.log("After spliting :: ",res);

/**
 * ARRAY FILTER
 */
console.log("*** ARRAY FILTER ***")
var numbers = [1, 3, 6, 8, 11];
var lucky = numbers.filter(function(number) {
  return number > 7;
});
console.log("Filter numbers :: ",lucky);

/**
 * ARRAY SEARCH
 */
console.log("*** ARRAY SEARCH ***")
var array1 = [5, 12, 8, 130, 44];
var found = array1.find(function(element) {
  return element > 10;
});
console.log("Search elements are :: ",found);

/**
 * ARRAY REPLACE
 */
var example = ['A', 'B', 'C', 'D'];
console.log("*** ARRAY REPLACE ***");
console.log("Array before operation :: ",example)
example.splice(2, 1, 'E');  
console.log("Array after replacing a element :: ",example);

/**
 * ARRAY MAP
 */
console.log("*** ARRAY MAP ***");
var numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt)
console.log("Array before operation :: ",numbers)
console.log("Array after mapping elements :: ",x);