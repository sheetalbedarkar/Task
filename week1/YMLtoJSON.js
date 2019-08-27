const yaml = require('js-yaml');
const readFile = require('fs').readFile;

readFile('./input.yml', 'utf-8', (err, fileContent) => {
    if (err) {
        console.log(err); // Do something to handle the error or just throw it
        throw new Error(err);
    }

    const jsonObj = yaml.safeLoad(fileContent);
    console.log(jsonObj);
});