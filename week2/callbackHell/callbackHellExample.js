var fs = require("fs");
fs.readFile('test1.txt', 'utf-8', (err1, data1) => {
    if (err1) console.log(err1)
    else {
        fs.readFile(data1, 'utf-8', (err2, data2) => {
            if (err2) console.log(err2)
            else {
                fs.readFile(data2, 'utf-8', (err3, data3) => {
                    if (err3) console.log(err3)
                    else {
                        fs.readFile(data3, 'utf-8', (err4, data4) => {
                            if (err4) console.log(err4)
                            else
                                console.log(data4)
                        });
                    }
                });
            }
        });
    }
});