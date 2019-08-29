/**
 * CREATE
 */
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

/**
* DISPLAY
*/
console.log("PERSON :: ",person)
console.log("PERSON FIRST NAME :: ",person.firstName)
console.log("PERSON LAST NAME :: ",person.lastName)
console.log("PERSON AGE :: ",person.age)
console.log("PERSON EYE COLOR :: ",person.eyeColor)

/**
* UPDATE
*/
person.firstName = "Sheetal"
person.lastName = "Bedarkar"
person.age = "23"
person.eyeColor = "Black"

console.log("After updating the values...")
console.log("PERSON :: ",person)
console.log("PERSON FIRST NAME :: ",person.firstName)
console.log("PERSON LAST NAME :: ",person.lastName)
console.log("PERSON AGE :: ",person.age)
console.log("PERSON EYE COLOR :: ",person.eyeColor)

/**
* DELETE
*/
delete person.eyeColor;
console.log("After deleting the values...")
console.log("PERSON :: ",person)
console.log("PERSON FIRST NAME :: ",person.firstName)
console.log("PERSON LAST NAME :: ",person.lastName)
console.log("PERSON AGE :: ",person.age)
console.log("PERSON EYE COLOR :: ",person.eyeColor)