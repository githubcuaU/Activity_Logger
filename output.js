
const { readFile } = require("fs");

setInterval(() => 
{
    // Read the updated file
    readFile("logs.txt", "utf-8", (err, newData) => 
    {
        if (err) throw err;
        console.log('Log data: ', newData);
    });  

}, 5000);   // for testing purpose, set the interval to 5 seconds
            // can set the interval to 120000 ms (2 minutes) as specified by the instructions


