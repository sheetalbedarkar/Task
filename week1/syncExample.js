const fs = require('fs');
const data = fs.readFileSync('textFile.txt'); // blocks here until file is read
console.log(data);

console.log("something else");// will run after read file operation