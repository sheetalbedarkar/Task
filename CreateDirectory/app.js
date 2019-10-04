var fs = require('fs');

fs.mkdir('stuff', function()
{
    fs.readFile('readMe.txt', 'utf8', function(err, data)
    {
        console.log(data)
        fs.writeFile('../stuff/writeMe.txt', data, function(err, result)
        {
            if(err)
                console.log('ERROR', err);
        });
    });
});