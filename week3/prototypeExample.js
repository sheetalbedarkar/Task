function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.nationality = "Indian";
  var myFather = new Person("John", "Doe", 50, "blue");
  console.log("The nationality of my father is " + myFather.nationality);